import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, filter, Observable, takeUntil} from 'rxjs';
import {OnDestroyable} from './OnDestroyable';
import {environment} from '../environments/environment';

const STEP = 10;

@Injectable({
  providedIn: 'root',
})
export class FetchImageService extends OnDestroyable {

  private imageFetchCount = new BehaviorSubject<number>(0);
  private _data = new BehaviorSubject<Array<ImageData>>([]);
  data$!: Observable<Array<ImageData>>;

  constructor(private httpClient: HttpClient) {
    super();

    this.imageFetchCount.pipe(
      takeUntil(this.onDestroy$),
      filter(v => v > 0),
    ).subscribe(value => {
      this.loadMoreImageRequest((value - 1) * STEP)
          .subscribe(newEntries => {
              this._data.next(this._data.value.concat(newEntries));
            },
          );
    });

    this.data$ = this._data.pipe(
      takeUntil(this.onDestroy$),
      filter(v => v.length > 0),
    );
  }

  loadMoreImages() {
    this.imageFetchCount.next(this.imageFetchCount.value + 1);
  }

  private loadMoreImageRequest(offset: number) {
    return this.httpClient.get<Array<ImageData>>(environment.url + 'images.php', {
      params:
        new HttpParams().set('offset', offset).set('count', STEP),
    });
  }


}

export type ImageData = { name: string, height: number }

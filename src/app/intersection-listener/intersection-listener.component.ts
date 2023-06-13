import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {distinctUntilChanged, map, mergeMap, Observable, switchMap, takeUntil, tap} from 'rxjs';
import {OnDestroyable} from '../OnDestroyable';

@Component({
  selector: 'app-intersection-listener',
  templateUrl: './intersection-listener.component.html',
  styleUrls: ['./intersection-listener.component.css'],
})
export class IntersectionListenerComponent extends OnDestroyable implements AfterViewInit {
  @ViewChild('divElement', {read: ElementRef})
  divElement!: ElementRef;

  @Output()
  onIntersectionChange = new EventEmitter<boolean>();

  @Input()
  class?:string

  @Input()
  rootMargin?: string;
  @Input()
  threshold?: number | number[];

  ngAfterViewInit(): void {
    this.createAndObserve(this.divElement).subscribe(event => this.onIntersectionChange.emit(event));
  }

  createAndObserve(element: ElementRef): Observable<boolean> {
    return new Observable<Array<IntersectionObserverEntry>>(observer => {
      const intersectionObserver = new IntersectionObserver(entries => {
        observer.next(entries);
      }, {rootMargin: this.rootMargin, threshold: this.threshold});

      intersectionObserver.observe(element.nativeElement);

      return () => {
        intersectionObserver.disconnect();
      };
    }).pipe(
      takeUntil(this.onDestroy$),
      switchMap(entries => entries),
      map(entry => entry.isIntersecting),
      distinctUntilChanged(),
    );
  }
}

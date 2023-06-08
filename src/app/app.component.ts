import {Component} from '@angular/core';
import {FetchImageService} from './fetch-image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'feed-frontend';

  constructor(private service: FetchImageService) {
  }

  protected data$ = this.service.data$;

  protected loadMoreImages(isIntersecting: boolean) {
    if(isIntersecting) {
      this.service.loadMoreImages();
    }
  };
}

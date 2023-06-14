import {Injectable} from '@angular/core';
import {MatomoTracker} from '@ngx-matomo/tracker';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrackingService {

  constructor(private matomoTracker: MatomoTracker) {
  }

  trackEvent(category: string, action: string, name?: string, value?: number) {
    this.matomoTracker.trackEvent(category, category + '_' + action, name, value);
    if(!environment.production) {
      console.log('Matomo event', {category, action, name, value});
    }
  }
}

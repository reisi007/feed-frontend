import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ImageComponent} from './image/image.component';
import {HttpClientModule} from '@angular/common/http';
import {IntersectionListenerComponent} from './intersection-listener/intersection-listener.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    IntersectionListenerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

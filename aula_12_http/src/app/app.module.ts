import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiIterceptor } from './core/api.interceptor';
import { AlbunsComponent } from './main/albuns/albuns.component';
import { PhotosComponent } from './main/photos/photos.component';
import { PhotoFinalComponent } from './photo-final/photo-final.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbunsComponent,
    PhotosComponent,
    PhotoFinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiIterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

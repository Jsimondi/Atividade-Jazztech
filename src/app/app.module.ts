import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    HttpParams
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

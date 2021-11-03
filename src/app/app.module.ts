import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { WeatherForecastModule } from './weather-forecast/weather-forecast.module';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    WeatherForecastModule
  ],
  providers: [
    HttpParams
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

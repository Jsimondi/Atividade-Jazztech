import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    WeatherForecastComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SearchBarComponent
  ]
})
export class WeatherForecastModule { }

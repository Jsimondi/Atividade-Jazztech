import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherBoxComponent } from './weather-box/weather-box.component';
import { WeatherLineComponent } from './weather-line/weather-line.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    WeatherForecastComponent,
    WeatherBoxComponent,
    WeatherLineComponent
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

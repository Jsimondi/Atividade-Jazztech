import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchCityWeather(event: any) {
    console.log('event: ', event)
  }
}

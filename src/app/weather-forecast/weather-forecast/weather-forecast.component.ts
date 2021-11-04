import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../weather-forecast.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  cityWeather = {}

  constructor(
    private weatherForecastService: WeatherForecastService
  ) { }

  ngOnInit(): void {
  }

  searchCityWeather(searchedCityName: string) {
    this.weatherForecastService.getWeatherByCityName(searchedCityName).subscribe(res => {
      console.log('res: ', res);
      this.cityWeather = res.results;
    })
  }
}

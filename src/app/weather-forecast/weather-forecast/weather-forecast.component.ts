import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../weather-forecast.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  cityWeather = {};
  showWeather: boolean = false;

  constructor(
    private weatherForecastService: WeatherForecastService
  ) { }

  ngOnInit(): void {
    console.log('cityWeather: ', this.cityWeather);
  }

  searchCityWeather(searchedCityName: string) {
    this.weatherForecastService.getWeatherByCityName(searchedCityName).subscribe(res => {
      console.log('res: ', res);
      this.showWeather = res.valid_key;
      this.cityWeather = res.results;
    })
  }
}

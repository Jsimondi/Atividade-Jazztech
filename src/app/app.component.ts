import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from './weather-forecast/weather-forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Atividade-Jazztech';

  constructor(
    private weatherForecastService: WeatherForecastService,
  ) {}

  ngOnInit() {
    // this.weatherForecastService.getKeyValidation(environment.apiKey).subscribe(res => {
    //   console.log('RES: ', res);
    // })
    // this.weatherForecastService.getWeatherByCityName(environment.apiKey, 'Campinas,SP').subscribe(res => {
    //   console.log('res: ', res);
    // })
  }
}

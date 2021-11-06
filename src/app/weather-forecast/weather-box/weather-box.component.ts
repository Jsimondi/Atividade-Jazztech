import { Component, OnInit, Input } from '@angular/core';
import { SingleDate } from '../weather.models';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent implements OnInit {
  @Input() cityWeather: any;

  constructor() { }

  ngOnInit(): void {
  }

  filterSevenDays(weatherArray: SingleDate[]){
    return weatherArray.slice(0, 6);
  }
  
}

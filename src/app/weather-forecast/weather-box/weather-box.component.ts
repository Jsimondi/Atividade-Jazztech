import { Component, OnInit, Input } from '@angular/core';

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

}

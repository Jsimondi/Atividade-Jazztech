import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-line',
  templateUrl: './weather-line.component.html',
  styleUrls: ['./weather-line.component.scss']
})
export class WeatherLineComponent implements OnInit {
  @Input() forecast: any;

  constructor() { }

  ngOnInit(): void {
  }

}

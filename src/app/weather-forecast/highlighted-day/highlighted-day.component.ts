import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-highlighted-day',
  templateUrl: './highlighted-day.component.html',
  styleUrls: ['./highlighted-day.component.scss']
})
export class HighlightedDayComponent implements OnInit {
  @Input() forecast: any;
  day: Date = new Date();
  
  constructor() { }

  ngOnInit(): void {
    console.log('HIGHLIGHTED DAY FORECAST: ', this.forecast);
    this.day = this.generateDate(this.forecast.date)
    console.log('weekDay: ', this.day)
  }

  generateDate(date: string): Date {
    const splittedDate = date.split('/');
    return new Date(
      `${splittedDate[1]}/${splittedDate[0]}/${splittedDate[2]}`
    )
  }

}

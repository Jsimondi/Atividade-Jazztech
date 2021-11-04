import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLineComponent } from './weather-line.component';

describe('WeatherLineComponent', () => {
  let component: WeatherLineComponent;
  let fixture: ComponentFixture<WeatherLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

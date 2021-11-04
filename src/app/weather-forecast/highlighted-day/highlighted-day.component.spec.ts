import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedDayComponent } from './highlighted-day.component';

describe('HighlightedDayComponent', () => {
  let component: HighlightedDayComponent;
  let fixture: ComponentFixture<HighlightedDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightedDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightedDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

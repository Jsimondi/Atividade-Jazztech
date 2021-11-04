import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoeiCityCodesComponent } from './woei-city-codes.component';

describe('WoeiCityCodesComponent', () => {
  let component: WoeiCityCodesComponent;
  let fixture: ComponentFixture<WoeiCityCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoeiCityCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoeiCityCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

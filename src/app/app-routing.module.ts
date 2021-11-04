import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast/weather-forecast.component';
import { WoeiCityCodesComponent } from './woei-city-codes/woei-city-codes.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherForecastComponent
  },
  {
    path: 'woei',
    component: WoeiCityCodesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

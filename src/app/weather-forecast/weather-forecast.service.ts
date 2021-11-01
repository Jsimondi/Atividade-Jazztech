import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(
    private httpClient: HttpClient,
    private httpParams: HttpParams
  ) { }

  getKeyValidation(apiKey: string): Observable<any> {
    let params = this.httpParams.set('key', apiKey);
    return this.httpClient.get<any>(`https://hgbrasil.com/weather`, {params});
  }

  getWeatherByCityCode(apiKey:string, woeidCode: string): Observable<any> {
    let params = this.httpParams;
    params.set('key', apiKey);
    params.set('woeid', woeidCode);
    return this.httpClient.get<any>(`https://api.hgbrasil.com/weather?`, {params});
  }

  getWeatherByCityName(apiKey:string, cityName: string): Observable<any> {
    let params = this.httpParams;
    params.set('key', apiKey);
    params.set('city_name', cityName);
    return this.httpClient.get<any>(`https://api.hgbrasil.com/weather?`, {params});
  }
}

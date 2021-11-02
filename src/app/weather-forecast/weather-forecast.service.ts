import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  options = {
    headers: {
      // 'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      'x-rapidapi-key': 'aaa1afff'
    }
  }

  getKeyValidation(apiKey: string): Observable<any> {
    let params = new HttpParams()
    params = params.set('key', apiKey);
    params = params.set('format', 'json-cors')
    return this.httpClient.get<any>(`https://hgbrasil.com/weather`, {params});
  }

  getWeatherByCityCode(apiKey:string, woeidCode: string): Observable<any> {
    let params = new HttpParams()
    params = params.set('key', apiKey);
    params = params.set('woeid', woeidCode);
    params = params.set('format', 'json-cors')
    return this.httpClient.get<any>(`https://api.hgbrasil.com/weather`, {params});
  }

  getWeatherByCityName(apiKey:string, cityName: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('key', apiKey);
    params = params.set('city_name', cityName);
    params = params.set('format', 'json-cors')
    return this.httpClient.get<any>(`https://api.hgbrasil.com/weather`, {params});
  }
}

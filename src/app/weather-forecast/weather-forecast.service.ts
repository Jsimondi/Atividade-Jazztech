import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment"

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  environment = environment;

  constructor(
    private httpClient: HttpClient,
  ) { }

  options = {
    headers: {
      // 'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      'x-rapidapi-key': 'aaa1afff'
    }
  }

  getKeyValidation(): Observable<any> {
    let params = new HttpParams()
    params = params.set('key', environment.apiKey);
    params = params.set('format', 'json-cors')
    return this.httpClient.get<any>(`https://hgbrasil.com/weather`, {params});
  }

  getWeatherByCityCode(woeidCode: string): Observable<any> {
    let params = new HttpParams()
    params = params.set('key', environment.apiKey);
    params = params.set('woeid', woeidCode);
    params = params.set('format', 'json-cors')
    return this.httpClient.get<any>(`https://api.hgbrasil.com/weather`, {params});
  }

  getWeatherByCityName(cityName: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('key', environment.apiKey);
    params = params.set('city_name', cityName);
    params = params.set('format', 'json-cors')
    return this.httpClient.get<any>(`https://api.hgbrasil.com/weather`, {params});
  }
}

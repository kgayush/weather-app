import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>('https://community-open-weather-map.p.rapidapi.com/weather', {
      headers: new HttpHeaders()
      .set('X-RapidAPI-Host', 'community-open-weather-map.p.rapidapi.com')
      .set('X-RapidAPI-Key', '08b8c36c9cmshf10716130bac52bp109bcbjsn302d440a0b61'),
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('mode', 'json')
    })
  }
}

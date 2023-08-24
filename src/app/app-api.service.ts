import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AppApi } from './app-api';

@Injectable({
  providedIn: 'root',
})
export class AppApiService {
  constructor(private http: HttpClient) {}
  getData$ = this.http
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=36befd1cb138498097803738232408&q=bandung&days=4&aqi=no&alerts=no`
    )
    .pipe(shareReplay(1));

  getData() {
    return this.http.get<AppApi>(
      `https://api.weatherapi.com/v1/forecast.json?key=36befd1cb138498097803738232408&q=bandung&days=5&aqi=no&alerts=no`
    );
  }
}

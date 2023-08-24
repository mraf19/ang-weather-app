import { Component, OnInit } from '@angular/core';
import { AppApiService } from './app-api.service';
import { ForeCastDay } from './app-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private api: AppApiService) {}

  condition!: string;
  imageUrl!: string;
  windMph!: number;
  windDeg!: number;
  humidity!: number;
  tempC!: number;
  tempF!: number;
  maxTempC!: number;
  minTempC!: number;
  maxTempF!: number;
  minTempF!: number;
  predictionItems!: ForeCastDay[];

  ngOnInit() {
    this.api.getData().subscribe((data) => {
      console.log(data);
      this.condition = data.current.condition.text;
      this.imageUrl = data.current.condition.icon;
      this.windMph = data.current.wind_mph;
      this.windDeg = data.current.wind_degree;
      this.humidity = data.current.humidity;
      this.tempC = data.current.temp_c;
      this.tempF = data.current.temp_f;
      this.maxTempC = data.forecast.forecastday[0].day.maxtemp_c;
      this.minTempC = data.forecast.forecastday[0].day.mintemp_c;
      this.maxTempF = data.forecast.forecastday[0].day.maxtemp_f;
      this.minTempF = data.forecast.forecastday[0].day.mintemp_f;
      this.predictionItems = sliceArray(data.forecast.forecastday);
      console.log(this.predictionItems);
    });
  }
}

function sliceArray(arr: any[]) {
  const newArr: any = [];
  for (let i = 1; i <= 4; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

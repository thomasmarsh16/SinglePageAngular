import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherapiserviceService } from  'src/weatherapiservice.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(private weatherApi: WeatherapiserviceService) {
    weatherApi.getWeather().subscribe(
      forecasts => this.forecasts = forecasts
    );
  }

}

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

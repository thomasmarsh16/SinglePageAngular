import { Injectable, Inject } from '@angular/core';
import { environment } from './environments/environment';
import { SocialUser } from 'angularx-social-login';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WeatherForecast } from "src/app/fetch-data/fetch-data.component"


@Injectable({
  providedIn: 'root'
})
export class WeatherapiserviceService {
  user: SocialUser;
  defaultHeaders: HttpHeaders;

  constructor(private httpClient: HttpClient) { 
    this.user = JSON.parse(localStorage.getItem('user'));
    this.defaultHeaders = new HttpHeaders();
    this.defaultHeaders = this.defaultHeaders.append('Content-Type', 'application/json');

    if (this.user != null) {
      this.defaultHeaders = this.defaultHeaders.append('Authorization', 'Bearer ' + this.user.idToken);
    }
  }

  public getWeather() {
    return this.httpClient.get<WeatherForecast[]>('https://localhost:5001/weatherforecast',{headers: this.defaultHeaders});
  }
}

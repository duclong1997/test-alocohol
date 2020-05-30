import { Injectable } from '@angular/core';
import {Key} from '../../utils/key';
import {Path} from '../../utils/path';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { CurrentWeather } from './entity/req/currentWeather';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServereWeatherAletRes } from './entity/res/severeWeatherAlertsRes';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private key = Key.API_KEY;
  private urlCurrentWeatherApi = Path.CURRENT_WEATHER_API;
  private urlWeatherForecastApi = Path.WEATHER_FORECAST_API;
  private urlSevereWeatherAlertsApi = Path.SEVERE_WEATHER_ALERTS_API;

  constructor(private http: HttpClient) { }

  getCurrentWeather(): Observable<CurrentWeather>{
    // params
    let param = new HttpParams();
    param =param.append('key',this.key);
    param = param.append('lang', 'en');
    param =param.append('units','I');
    // param =param.append('lat','38.123');
    // param =param.append('lon','-78.543');
    param =param.append('city','Raleigh');
    // param =param.append('country','US');
    
    return this.http.get<CurrentWeather>(this.urlCurrentWeatherApi,{params :param})
    .pipe(catchError(this.errorHandler));
  }

  getWeatherForecast(): Observable<CurrentWeather>{
    let param = new HttpParams();
    param =param.append('key',this.key);
    param = param.append('lang', 'en');
    param =param.append('units','I');
    // param =param.append('lat','38.123');
    // param =param.append('lon','-78.543');
    param =param.append('city','Raleigh');
    // param =param.append('country','US');
    return this.http.get<CurrentWeather>(this.urlWeatherForecastApi, {params : param})
    .pipe(catchError(this.errorHandler));
  }

  getServereWeatherAlet(): Observable<ServereWeatherAletRes>{
    let params = new HttpParams();
    params =params.append('lat','38.00');
    params = params.append('lon','-90.00');
    params = params.append('key',this.key);
  
    return this.http.get<ServereWeatherAletRes>(this.urlSevereWeatherAlertsApi, {params:params})
    .pipe(catchError(this.errorHandler));
  }

  // error handler
  errorHandler(error : HttpErrorResponse | any){
    return throwError(error.message || "server error.");
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRootObject_GetWeeklyForecast, IRootObject_GetForCityAndContry } from '../interfaces/IClimaApp.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  // Establecemos el parametro de unidad, que sera Celsius
  private paramsUnits: string = '&units=metric'; 
  
  constructor( private http: HttpClient ) { }
  
  /** Devuelve la temperatura estandar para el dia actual */
  public getTemperatureStandarOfDay() : Observable<IRootObject_GetForCityAndContry> {
    
    const URL_GetForCityAndCountry = `${ environment.API_ENDPOINT_GETFORCITYANDCOUNTRY }${ environment.API_KEY }${ this.paramsUnits }`;
    return this.http.get<IRootObject_GetForCityAndContry>(URL_GetForCityAndCountry);
  }

  /** Devuleve el pronostico para los siguientes 5 dias */
  public getWeeklyForecast() : Observable<IRootObject_GetWeeklyForecast> {
    
    const URL_GetWeeklyForeCast = `${ environment.API_ENDPOINT_GETWEEKLYFORECAST }${ environment.API_KEY }${ this.paramsUnits }`;
    return this.http.get<IRootObject_GetWeeklyForecast>(URL_GetWeeklyForeCast);
  }
}

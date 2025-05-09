import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRootObject } from '../interfaces/IClimaApp.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  // Establecemos el parametro de unidad, que sera Celsius
  private paramsUnits: string = '&units=metric'; 
  private URL = `${ environment.URL_API }${ environment.API_KEY }${ this.paramsUnits }`;

  constructor( private http: HttpClient ) { }

  public getTemperatureStandar() {
    
    return this.http.get<IRootObject>(this.URL);
  }
}

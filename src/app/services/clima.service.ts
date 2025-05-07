import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRootObject } from '../interfaces/IClimaApp.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private URL = `${ environment.URL_API }${ environment.API_KEY }`;

  constructor( private http: HttpClient ) { }

  public getTemperatureStandar() {
    
    return this.http.get<IRootObject>(this.URL);
  }
}

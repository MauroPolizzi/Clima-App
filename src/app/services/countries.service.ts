import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor( private http: HttpClient ) { }

  public getAllCountries() {
    
    const URL_GetAllCountries = `${ environment.API_ENDPOINT_ALL_COUNTRIES }`;
    return this.http.get(URL_GetAllCountries);
  }

  public getCountryByName( countryName: string ) {
    
    const URL_GetCountryByName = `${ environment.API_ENDPOINT_NAME_COUNTRY }${ countryName }`;
    return this.http.get(URL_GetCountryByName);
  }

  public getCountryByCapital( countryCapital: string ) {
    
    const URL_GetCountryByCapital = `${ environment.API_ENDPOINT_CAPITAL_COUNTRY }${ countryCapital }`;
    return this.http.get(URL_GetCountryByCapital);
  }
}

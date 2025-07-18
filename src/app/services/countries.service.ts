import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  
  /** Propiedad para autorizacion de las llamadas a la Api Country State City */
  private headers: HttpHeaders = new HttpHeaders({'X-CSCAPI-KEY': `${ environment.API_KEY_API_COUNTRYSTATECITY }`});

  constructor( private http: HttpClient ) { }

  //#region Methods APi Rest Country
  public getAllCountriesAPiRestCountry() {
    
    const URL_GetAllCountries = `${ environment.API_RESTCOUNTRY_ENDPOINT_ALL_COUNTRIES }`;
    return this.http.get(URL_GetAllCountries);
  }

  public getCountryByNameAPiRestCountry( countryName: string ) {
    
    const URL_GetCountryByName = `${ environment.API_RESTCOUNTRY_ENDPOINT_NAME_COUNTRY }${ countryName }`;
    return this.http.get(URL_GetCountryByName);
  }

  public getCountryByCapitalAPiRestCountry( countryCapital: string ) {
    
    const URL_GetCountryByCapital = `${ environment.API_RESTCOUNTRY_ENDPOINT_CAPITAL_COUNTRY }${ countryCapital }`;
    return this.http.get(URL_GetCountryByCapital);
  }
  //#endregion

  //#region Methods Api Country State City
  public getAllCountriesApiCountryStateCity() {
    
    const URL_GetAllCountries = `${ environment.API_COUNTRYSTATECITY_ENDPOINT_ALL_COUNTRIES }`;
    return this.http.get(URL_GetAllCountries, { headers: this.headers });
  }

  public getStatesByCountry( ISO2Country: string ) {

    // Realizamos el remplazo del path params por el correspondiente del parametro
    const URL_GetStatesByCountry = environment.API_COUNTRYSTATECITY_ENDPOINT_STATES_BY_COUNTRY.replace('[ciso]', ISO2Country);
    return this.http.get(URL_GetStatesByCountry, { headers: this.headers });
  } 

  public getCitiesByStateAndCountry( ISO2Country: string, ISO2State: string) {
    
    const URL_GetCitiesByStateAndCountry = environment.API_COUNTRYSTATECITY_ENDPOINT_CITIES_BY_STATE.replace('[ciso]', ISO2Country).replace('[siso]', ISO2State);
    return this.http.get(URL_GetCitiesByStateAndCountry, { headers: this.headers });
  }
  //#endregion
}

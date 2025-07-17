// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  // API Open Weather Map
  /** End Point que devuelve datos basicos del pronostico para el dia actual, segun los parametros de q (nombre de ciudad separado por coma codigo ISO del pais). */
  API_ENDPOINT_GETFORCITYANDCOUNTRY: 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=',
  
  /** End Point para que devuelve una lista de pronosticos para las siguientes 5 dias cada 3 horas 
   * Con el params cnt definimos el limite de objetos dentro de la lista devuelta.
  */
  API_ENDPOINT_GETWEEKLYFORECAST: 'https://pro.openweathermap.org/data/2.5/forecast?q=London&cnt=40&appid=',
  API_KEY: '974a07281e5b6d25f5d9c7a55caa9743',

  URL_ICON: 'https://openweathermap.org/img/wn/',

  // API de Rest Countries
  /** End Point que devuelve todos los paises con su nombre (name), capital (capital) y bandera (flags). */
  API_ENDPOINT_ALL_COUNTRIES: 'https://restcountries.com/v3.1/all?fields=name,capital,flags',

  /** End Point que devuelve los paises coincidentes con el path params {name} (https://restcountries.com/v3.1/name/{name}). */
  API_ENDPOINT_NAME_COUNTRY: 'https://restcountries.com/v3.1/name/',

  /** End Point que devuelve el paise, segun su capital proporcionada con el path params {capital} (https://restcountries.com/v3.1/capital/{capital}). */
  API_ENDPOINT_CAPITAL_COUNTRY: 'https://restcountries.com/v3.1/capital/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

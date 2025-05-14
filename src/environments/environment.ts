// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  /** End Point que devuelve datos basicos del pronostico para el dia actual, segun los parametros de q (nombre de ciudad separado por coma codigo ISO del pais). */
  API_ENDPOINT_GETFORCITYANDCOUNTRY: 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=',
  
  /** End Point para que devuelve una lista de pronosticos para las siguientes 5 dias cada 3 horas 
   * Con el params cnt definimos el limite de objetos dentro de la lista devuelta.
  */
  API_ENDPOINT_GETWEEKLYFORECAST: 'https://pro.openweathermap.org/data/2.5/forecast?q=London&cnt=40&appid=',
  API_KEY: '974a07281e5b6d25f5d9c7a55caa9743'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { APP_ID } from "@angular/core";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  
  //#region API Open Weather Map
  /** End Point que devuelve datos basicos del pronostico para el dia actual, segun los parametros de q (nombre de ciudad separado por coma codigo ISO del pais). */
  //'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=' END POINT General,
  // Aqui apuntamos directamente a San Miguel de Tucuman
  API_ENDPOINT_GETFORCITYANDCOUNTRY: 'https://api.openweathermap.org/data/2.5/weather?lat=-26.82414000&lon=-65.22260000&appid=', 
  
  /** End Point para que devuelve una lista de pronosticos para las siguientes 5 dias cada 3 horas 
   * Con el params cnt definimos el limite de objetos dentro de la lista devuelta.
  */
  //'https://pro.openweathermap.org/data/2.5/forecast?q=London&cnt=40&appid=' END POINT General
 // Aqui apuntamos directamente a San Miguel de Tucuman
  API_ENDPOINT_GETWEEKLYFORECAST: 'https://pro.openweathermap.org/data/2.5/forecast?lat=-26.82414000&lon=-65.22260000&cnt=40&appid=', 
  API_KEY: '974a07281e5b6d25f5d9c7a55caa9743',

  URL_ICON: 'https://openweathermap.org/img/wn/',
  //#endregion

  //#region API de Rest Countries
  /** End Point que devuelve todos los paises con su nombre (name), capital (capital) y bandera (flags). */
  API_RESTCOUNTRY_ENDPOINT_ALL_COUNTRIES: 'https://restcountries.com/v3.1/all?fields=name,capital,flags',

  /** End Point que devuelve los paises coincidentes con el path params {name} (https://restcountries.com/v3.1/name/{name}). */
  API_RESTCOUNTRY_ENDPOINT_NAME_COUNTRY: 'https://restcountries.com/v3.1/name/',

  /** End Point que devuelve el paise, segun su capital proporcionada con el path params {capital} (https://restcountries.com/v3.1/capital/{capital}). */
  API_RESTCOUNTRY_ENDPOINT_CAPITAL_COUNTRY: 'https://restcountries.com/v3.1/capital/',
//#endregion

  //#region API de Country State City
  /** APi Key para Autorization de la Api Country State City. */
  API_KEY_API_COUNTRYSTATECITY: 'Wk42UDUySU83WEhuZ0tDSjFLRmprUXAzeGdhenFNSElrVXN6WldxaA==',
  
  /** End Point que devuelve todos los paises. */
  API_COUNTRYSTATECITY_ENDPOINT_ALL_COUNTRIES: 'https://api.countrystatecity.in/v1/countries',
  
  /** End Point que devulve las Cities de un determinado State (provincia/estado) y de un determinado Country. 
   * Se debe especificar los siguientes path params: 
   * @[ciso] = ISO2 Code of Country - Required	- String,
   * @[siso] = ISO2 Code of State - Required	- String
  */
  API_COUNTRYSTATECITY_ENDPOINT_CITIES_BY_STATE: 'https://api.countrystatecity.in/v1/countries/[ciso]/states/[siso]/cities',

  /** End Point que devuelve todos los States (provincias/estados) del Country. 
   * Se debe especificar el siguiente path params:
   * @[ciso] = ISO2 Code of Country - Required	- String
  */
  API_COUNTRYSTATECITY_ENDPOINT_STATES_BY_COUNTRY: 'https://api.countrystatecity.in/v1/countries/[ciso]/states',
  //#endregion
};

//#region Firebase Config

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCHMStQHxm-XE7rROUXeyUn9p8bRAb2Ukc",
    authDomain: "clima-app-90927.firebaseapp.com",
    projectId: "clima-app-90927",
    storageBucket: "clima-app-90927.firebasestorage.app",
    messagingSenderId: "727876306236",
    appId: "1:727876306236:web:cd1b58f779c2bcbbf30a39",
    measurementId: "G-D5KT3KJW6X"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  //#endregion

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

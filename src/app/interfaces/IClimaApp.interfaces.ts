//#region Interfaces de obj de API Open Weather MAP
//#region API_ENDPOINT_GETFORCITYANDCOUNTRY
/**
 * Interface que contiene todos los campos que devuelve el end point 'API_ENDPOINT_GETFORCITYANDCOUNTRY' (enviroment.ts), cuenta con parametros internos de la API de openweathermap 
*/
export interface IRootObject_GetForCityAndContry {
  coord: ICoord;
  weather: IWeather[];
  base: string;
  main: IMain;
  /**
   * Visibilidad en metros. El valor máximo de visibilidad es de 10 km.
  **/
  visibility: number;
  wind: IWind;
  rain: IRain;
  clouds: IClouds;
  dt: number;
  sys: ISys;
  /**
   * Cambio en segundos desde UTC
  */
  timezone: number;
  /**
   * Id de la City
  */
  id: number;
  /**
   * Nombre de la City 
  */
  name: string;
  cod: number;
}

export interface ISys {
  type: number;
  id: number;
  /**
   * Código de país (GB, JP, etc.) 
  */
  country: string;
  /**
   * Hora del amanecer, Unix, UTC
  */
  sunrise: number;
  /**
   * Hora del atardecer, Unix, UTC
  */
  sunset: number;

  /** Parte del dia (n - night, d - day) */
  pod: string;
}

/**
 * Datos basicos de nubosidad
*/
export interface IClouds {
  /**
   * Porcentaje de nubosidad, %
   */
  all: number;
}

/**
 * Datos basicos de lluvia 
*/
export interface IRain {
  /**
   * Precipitación, mm/h. Tenga en cuenta que solo se dispone de mm/h como unidad de medida para este parámetro.
  */
  '1h': number;
}

/**
 * Datos basicos del viento
**/
export interface IWind {
  /**
   * Velocidad del viento. Unidad predeterminada: metros/seg. Sistema métrico: metros/seg. Sistema imperial: millas/hora.
  **/
  speed: number;
  /**
   * Dirección del viento, grados (meteorológicos)
  **/
  deg: number;
  /**
   * Ráfaga de viento. Unidad predeterminada: metros/segundo, sistema métrico: metros/segundo, sistema imperial: millas/hora
  **/
  gust: number;
}

/**
 * Datos basicos del clima
**/
export interface IMain {
  /**
   * Temperatura. Unidad predeterminada: Kelvin, Métrica: Celsius, Imperial: Fahrenheit
  **/
  temp: number;
  /**
   * Temperatura. Este parámetro de temperatura refleja la percepción humana del clima. Unidad predeterminada: Kelvin, Métrica: Celsius, Imperial: Fahrenheit
  **/
  feels_like: number;
  /**
   * Temperatura mínima actual. Esta es la temperatura mínima observada actualmente (en grandes megalópolis y zonas urbanas).
  **/
  temp_min: number;
  /**
   * Temperatura maxima actual. Esta es la temperatura mínima observada actualmente (en grandes megalópolis y zonas urbanas).
  **/
  temp_max: number;
  /**
   * Presión atmosférica sobre el nivel del mar, hPa
  **/
  pressure: number;
  /**
   * Porcentaje de humedad, %
  **/
  humidity: number;
  /**
   * Presión atmosférica sobre el nivel del mar, hPa
  **/
  sea_level: number;
  /**
   * Presión atmosférica sobre el nivel del suelo, hPa
  **/
  grnd_level: number;
}

/**
 * Informacion general del clima
**/
export interface IWeather {
  /**
   * Id de la condicion del clima
  **/
  id: number;
  /**
   * Grupo de parametros metereologicos (lluvia, nieve, etc.)
  **/
  main: string;
  /**
   * Descripcion del grupo meteorologicos
  **/
  description: string;
  /**
   * Id del icono de clima
  **/
  icon: string;
}

/**
 * Coordenadas de la City
**/
export interface ICoord {
  /**
   * Longitud de la City
  **/
  lon: number;
  /**
   * Latitud de la City
  **/
  lat: number;
}

//#endregion

//#region API_ENDPOINT_GETWEEKLYFORECAST
/**
 * Interface que contiene todos los campos que devuelve el end point 'API_ENDPOINT_GETWEEKLYFORECAST' (enviroment.ts), cuenta con parametros internos de la API de openweathermap 
*/
export interface IRootObject_GetWeeklyForecast {
  list: IList[];
  city: ICity;
}

export interface ICity {
  id: number;
  name: string;
  coord: ICoord;
  country: string;
  population: number;
  timezone: number;
  /** Hora de salida del sol */
  sunrise: number;
  /** Hora de puesta del sol */
  sunset: number;
}

export interface IList {
  dt: number;
  main: IMain;
  weather: IWeather[];
  clouds: IClouds;
  wind: IWind;
  visibility: number;
  /** Probabilidad de precipitación. Los valores del parámetro varían entre 0 y 1, donde 0 equivale al 0 % y 1 al 100 %. */
  pop: number;
  sys: ISys;
  dt_txt: string;
}
//#endregion
//#endregion

//#region Interfaces de obj de API Country State City

//#region API_COUNTRYSTATECITY_ENDPOINT_ALL_COUNTRIES
export interface ICountry_CountryStateCity {
  id: number;
  name: string;
  iso2: string;
  iso3: string;
  phonecode: string;
  capital: string;
  currency: string;
  native: string;
  emoji: string;
}
//#endregion

//#region API_COUNTRYSTATECITY_ENDPOINT_CITIES_BY_STATE
export interface ICity_CountryStateCity {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
}
//#endregion

//#region API_COUNTRYSTATECITY_ENDPOINT_STATES_BY_COUNTRY
export interface IState_CountryStateCity {
  id: number;
  name: string;
  iso2: string;
}
//#endregion

//#endregion

//#region Interfaces de obj de API Rest Country

//#region API_RESTCOUNTRY_ENDPOINT_ALL_COUNTRIES
export interface ICountry_RestCountry {
  flags: IFlags_RestCountry;
  name: IName_RestCountry;
  capital: string[];
}

export interface IName_RestCountry {
  common: string;
  official: string;
  nativeName: INativeName_RestCountry;
}

export interface INativeName_RestCountry {
  ron: IRon_RestCountry;
}

export interface IRon_RestCountry {
  official: string;
  common: string;
}

export interface IFlags_RestCountry {
  png: string;
  svg: string;
  alt: string;
}
//#endregion

//#region API_RESTCOUNTRY_ENDPOINT_NAME_COUNTRY

export interface ICountryDetail_RestCountry {
  name: IName_RestCountry;
  tld: string[];
  cca2: string;
  ccn3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  //currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  cca3: string;
  translations: Translations;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: IFlags_RestCountry;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

interface PostalCode {
  format: string;
  regex: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Gini {
  '2019': number;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Translations {
  ara: Grn;
  bre: Grn;
  ces: Grn;
  cym: Grn;
  deu: Grn;
  est: Grn;
  fin: Grn;
  fra: Grn;
  hrv: Grn;
  hun: Grn;
  ind: Grn;
  ita: Grn;
  jpn: Grn;
  kor: Grn;
  nld: Grn;
  per: Grn;
  pol: Grn;
  por: Grn;
  rus: Grn;
  slk: Grn;
  spa: Grn;
  srp: Grn;
  swe: Grn;
  tur: Grn;
  urd: Grn;
  zho: Grn;
}

interface Demonyms {
  eng: Eng;
  fra: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Languages {
  grn: string;
  spa: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Grn {
  official: string;
  common: string;
}

//#endregion

//#endregion
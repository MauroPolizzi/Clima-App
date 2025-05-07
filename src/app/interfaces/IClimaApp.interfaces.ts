/**
 * Interface que contiene todas las demas interfaces y cuenta con parametros internos de la API de openweathermap 
*/
export interface IRootObject {
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
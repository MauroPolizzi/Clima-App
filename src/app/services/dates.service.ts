import { Injectable } from '@angular/core';
import { IList } from '../interfaces/IClimaApp.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  private daysOfWeek: string [] = ['Sunday', 'Monday', 'Thuesday', 'Wendnesday', 'Thursday', 'Friday', 'Saturday'];
  private monthsOfYear: string [] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  constructor() { }

  public getCurrentDateInfo(): { 
    day: number; 
    dayName: string;
    month: number; 
    monthName: string; 
    year: number; 
    fullDate: string; 
    isoString: string 
  } {
    const now = new Date();
  
    const day = now.getDate(); // Día del mes
    const month = now.getMonth(); // Mes (0-11, por eso se suma 1, deja de sumar 1, ya que tomamos del array de meses la posicion concreta)
    const year = now.getFullYear(); // Año completo
    const isoString = now.toISOString(); // Fecha y hora en formato ISO
    
    const dayName = this.daysOfWeek[now.getDay()];
    const monthName = this.monthsOfYear[month];
    
    const fullDate = `${day.toString()} de ${monthName}`; // Formato D de montName de YYYY

    return { day, dayName, month, monthName, year, fullDate, isoString };
  }

  /** Devuelve el dia resumido de la semana, segun la fecha indicada por parametro */
  public getDayOfWeek(dateStr: string): string {

    const date = new Date(dateStr);
    const day = date.getDay(); // 0 = domingo, 1 = lunes, ..., 6 = sábado
  
    return this.daysOfWeek[day].substring(0, 3);
  }

  /** Agrupa los items por fecha y devuelve un objeto con la fecha y una array de IList[]*/
  public groupedByDate(listWeather: IList[]) {
    
    const group: { [date: string]: IList[] } = {};
    for (const item of listWeather) {
      const date = item.dt_txt.split(" ")[0];
      if (!group[date]) {
        group[date] = [];
      }
      group[date].push(item);
    }

    return Object.entries(group).map(([date, items]) => ({
      date, 
      items
    }));
  }

  /** Convierte la hora (Unix timestamp) que trae la api de opneWeatherMap a GMT-3*/
  public convertUnixToGMT3(unixTimestamp: number): string {
   
    // Convertimos el timestamp Unix (en segundos) a milisegundos
    const dateUTC = new Date(unixTimestamp * 1000);
  
    // Ajuste manual a GMT-3
    const utcHour = dateUTC.getUTCHours();
    const gmt3Hour24 = (utcHour - 3 + 24) % 24;
    const minutes = dateUTC.getUTCMinutes();
  
    // Conversión a formato 12 horas
    const period = gmt3Hour24 >= 12 ? 'PM' : 'AM';
    const hour12 = gmt3Hour24 % 12 === 0 ? 12 : gmt3Hour24 % 12;
  
    // Devolver formato "HH:MM AM/PM"
    return `${hour12.toString().padStart(1)}:${minutes.toString().padStart(2, '0')} ${period}`;
  }
}

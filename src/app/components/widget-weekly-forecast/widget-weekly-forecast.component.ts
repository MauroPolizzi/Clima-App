import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';
import { IList, IRootObject_GetWeeklyForecast } from 'src/app/interfaces/IClimaApp.interfaces';
import { ClimaService } from 'src/app/services/clima.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-widget-weekly-forecast',
  templateUrl: './widget-weekly-forecast.component.html',
  styleUrls: ['./widget-weekly-forecast.component.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonGrid, IonCol, IonRow, NgFor]
})
export class WidgetWeeklyForecastComponent implements OnInit {

  public dates: string[] = [];
  public averanges: number[] = [];
  public descriptionIcon: string[] = [];

  constructor(private service: ClimaService) { 

    this.service.getWeeklyForecast()
      .subscribe( (resp: IRootObject_GetWeeklyForecast) => { 
        this.calculatePromedioTemperatureOfDay( this.groupedByDate(resp.list) );
        this.getDescriptionIcon(resp.list);
      });
  }

  ngOnInit() {}

  public getDescriptionIcon(list: IList[]) : string[] {

    for (let index = 0; index < list.length; index += 8) {
      const item = list[index];
      const icon = `${ environment.URL_ICON }${ item.weather[0].icon }@2x.png`; //description.replace(/\s+/g, '');
      this.descriptionIcon.push(icon);
    }

    console.log(this.descriptionIcon)
    return this.descriptionIcon;
  }

  /** Devuelve un array en formato 'day-temperature-icon' */
  public reurnDayAndTemperature() : string[]{
    const result: string[] = [];
    let day: string = '';
    let averange: number = 0;

    for (let index = 0; index < this.dates.length; index++) {
      day = this.getDayOfWeek(this.dates[index]);
      averange = parseFloat(this.averanges[index].toFixed(0));
      
      // Le concatenamos el nombre de los iconos de OpenWeather
      result.push(`${ day }-${ averange }°-${ this.descriptionIcon[index] }`);
    }

    return result;
  }

  /** Devuelve el dia resumido de la semana, segun la fecha indicada por parametro */
  private getDayOfWeek(fechaStr: string): string {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    const fecha = new Date(fechaStr);
    const dia = fecha.getDay(); // 0 = domingo, 1 = lunes, ..., 6 = sábado
  
    return diasSemana[dia].substring(0, 3);
  }

  /** Agrupa los items por fecha y devuelve un objeto con la fecha y una array de IList[]*/
  private groupedByDate(listWeather: IList[]) {
    
    const agrupado: { [fecha: string]: IList[] } = {};
    for (const item of listWeather) {
      const fecha = item.dt_txt.split(" ")[0];
      if (!agrupado[fecha]) {
        agrupado[fecha] = [];
      }
      agrupado[fecha].push(item);
    }

    return Object.entries(agrupado).map(([fecha, items]) => ({
      fecha, 
      items
    }));
  }

  /** Devuelve un array de fechas y un array de promedios de la temperatura */
  private calculatePromedioTemperatureOfDay( groupDate: any[] ): { dates: string[]; averanges: number[]; } {
    
    let dates: string[] = []; // Obtenemos las fechas
    let averanges: number[] = []; // Array de promedios de temperatura por fecha
    let averange: number = 0;

    for (const item of groupDate) {
      dates.push(item.fecha);

      // Sumamos la temperatura por agrupacion de fecha
      for (const list of item.items){
        averange += list.main.temp;
      }

      // Obtenemos el promedio y lo agregamos al array
      averange = averange / item.items.length;
      averanges.push(averange);

      //console.log(`Promedio de temperatura para la fecha: ${ item.fecha } - ${ averange }`);
    }

    // Colocamos el resultado en las variables globales para luego usarlas en el template
    // Quitamos el primer elemento, ya son datos de la fecha actual y queremos los siguientes 5 dias
    this.dates = dates.slice(1);
    this.averanges = averanges.slice(1);

    return { dates, averanges };
  }
}
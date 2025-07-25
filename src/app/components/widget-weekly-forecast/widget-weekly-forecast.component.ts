import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';
import { IList, IRootObject_GetWeeklyForecast } from 'src/app/interfaces/IClimaApp.interfaces';
import { ClimaService } from 'src/app/services/clima.service';
import { DatesService } from 'src/app/services/dates.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-widget-weekly-forecast',
  templateUrl: './widget-weekly-forecast.component.html',
  styleUrls: ['./widget-weekly-forecast.component.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonGrid, IonCol, IonRow, NgFor]
})
export class WidgetWeeklyForecastComponent implements OnInit, OnDestroy {

  public dates: string[] = [];
  public averanges: number[] = [];
  public descriptionIcon: string[] = [];
  public screenWidth: number = window.innerWidth;

  constructor(private climaService: ClimaService, private datesService: DatesService) { 

    this.climaService.getWeeklyForecast()
      .subscribe( (resp: IRootObject_GetWeeklyForecast) => { 
        this.calculatePromedioTemperatureOfDay( this.datesService.groupedByDate(resp.list) );
        this.getDescriptionIcon(resp.list);
      });
  }

  ngOnInit() {
    this.updateScreenWidth();
    window.addEventListener('resize', this.updateScreenWidth.bind(this));
  }
  
  ngOnDestroy() {
    window.removeEventListener('resize', this.updateScreenWidth.bind(this));
  }
  
  updateScreenWidth() {
    this.screenWidth = window.innerWidth;
  }
  
  getResponsiveForecastItems(): string[] {
    const items = this.reurnDayAndTemperature();
    
    // Si el ancho de pantalla es muy pequeño (por ejemplo < 400px), mostrar solo 4
    if (this.screenWidth < 400) {
      return items.slice(0, 4);
    }
  
    return items;
}

  

  public getDescriptionIcon(list: IList[]) : string[] {

    for (let index = 0; index < list.length; index += 8) {
      const item = list[index];
      const icon = `${ environment.URL_ICON }${ item.weather[0].icon }@2x.png`; //description.replace(/\s+/g, '');
      this.descriptionIcon.push(icon);
    }

    return this.descriptionIcon;
  }

  /** Devuelve un array en formato 'day-temperature-icon' */
  public reurnDayAndTemperature() : string[]{
    const result: string[] = [];
    let day: string = '';
    let averange: number = 0;

    for (let index = 0; index < this.dates.length; index++) {
      day = this.datesService.getDayOfWeek(this.dates[index]);
      averange = parseFloat(this.averanges[index].toFixed(0));
      
      // Le concatenamos el nombre de los iconos de OpenWeather
      result.push(`${ day }-${ averange }°-${ this.descriptionIcon[index] }`);
    }

    return result;
  }

  /** Devuelve un array de fechas y un array de promedios de la temperatura */
  private calculatePromedioTemperatureOfDay( groupDate: any[] ): { dates: string[]; averanges: number[]; } {
    
    let dates: string[] = []; // Obtenemos las fechas
    let averanges: number[] = []; // Array de promedios de temperatura por fecha
    let averange: number = 0;

    for (const item of groupDate) {
      dates.push(item.date);

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
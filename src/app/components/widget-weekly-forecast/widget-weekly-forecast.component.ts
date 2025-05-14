import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { IList, IRootObject_GetWeeklyForecast } from 'src/app/interfaces/IClimaApp.interfaces';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-widget-weekly-forecast',
  templateUrl: './widget-weekly-forecast.component.html',
  styleUrls: ['./widget-weekly-forecast.component.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonGrid, IonCol, IonRow]
})
export class WidgetWeeklyForecastComponent implements OnInit {

  constructor(private service: ClimaService) { 

    this.service.getWeeklyForecast()
      .subscribe( (resp: IRootObject_GetWeeklyForecast) => { console.log(this.CalculatePromedioTemperatureOfDay( this.groupedByDate(resp.list) )) });
  }

  ngOnInit() {}

  /** Agrupa los items por fecha y devuelve un objeto con la fecha y una array de IList[]*/
  private groupedByDate(listWeather: IList[]) : any[] {
    
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

  /**  */
  private CalculatePromedioTemperatureOfDay( groupDate: any[] ) {

    for (const item of groupDate) {
      let prom: number = 0; // Promedio de la temperatura por fecha

      // Sumamos la temperatura por agrupacion de fecha
      for (const list of item.items){
        prom += list.main.temp;
      }

      // Obtenemos el promedio
      prom = prom / item.items.length;

      console.log('Promedio de temperatura: ', parseFloat(prom.toFixed(2)));
    }
  }
}
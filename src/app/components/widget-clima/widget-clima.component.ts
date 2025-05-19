import { Component, OnInit } from '@angular/core';
import { IRootObject_GetForCityAndContry } from 'src/app/interfaces/IClimaApp.interfaces';
import { ClimaService } from 'src/app/services/clima.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-widget-clima',
  templateUrl: './widget-clima.component.html',
  styleUrls: ['./widget-clima.component.scss']
})
export class WidgetClimaComponent  implements OnInit {

  public fecha = this.getCurrentDateInfo();
  public icon: string = environment.URL_ICON;

  constructor(private service: ClimaService) { 

    this.service.getTemperatureStandarOfDay().subscribe( (resp: IRootObject_GetForCityAndContry) => this.icon += `${ resp.weather[0].icon }@2x.png`);
  }

  ngOnInit() { }
 
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
    
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const monthsOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dayName = daysOfWeek[now.getDay()];
    const monthName = monthsOfYear[month];
    
    const fullDate = `${day.toString()} de ${monthName} de ${year}`; // Formato D de montName de YYYY

    return { day, dayName, month, monthName, year, fullDate, isoString };
  }
  
}

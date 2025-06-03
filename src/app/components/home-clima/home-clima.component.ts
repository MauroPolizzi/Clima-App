import { IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { ClimaService } from 'src/app/services/clima.service';
import { WidgetClimaComponent } from '../widget-clima/widget-clima.component';
import { WidgetInfoGeneralComponent } from '../widget-info-general/widget-info-general.component';
import { WidgetWeeklyForecastComponent } from '../widget-weekly-forecast/widget-weekly-forecast.component';
import { IRootObject_GetForCityAndContry } from 'src/app/interfaces/IClimaApp.interfaces';

@Component({
  selector: 'app-home-clima',
  templateUrl: './home-clima.component.html',
  styleUrls: ['./home-clima.component.scss'],
  imports: [CommonModule, WidgetClimaComponent, WidgetInfoGeneralComponent, WidgetWeeklyForecastComponent, IonRefresher, IonRefresherContent]
})
export class HomeClimaComponent  implements OnInit {

  public infoForCityAndContry: Observable<{
    temperature: number;
    temperaturaFormat: string;
    temperatura_description: string;
    temperatura_min: number;
    temperatura_max: number;
    city: string;
  }>;

  constructor(private service: ClimaService) { 
    
    this.infoForCityAndContry = this.getCurrentInfoForCityAndContryAsync();
  }
  
  ngOnInit() { }

  public getCurrentInfoForCityAndContryAsync(): Observable<{
    temperature: number;
    temperaturaFormat: string;
    temperatura_description: string;
    temperatura_min: number;
    temperatura_max: number;
    city: string;
  }> {
    return this.service.getTemperatureStandarOfDay().pipe(
      map((resp: IRootObject_GetForCityAndContry) => {
        const temperature = parseFloat(resp.main.temp.toFixed(0));
        const temperaturaFormat = `${temperature}°`;
        const temperatura_description = resp.weather[0].description;
        const temperatura_min = parseFloat(resp.main.temp_min.toFixed(0));
        const temperatura_max = parseFloat(resp.main.temp_max.toFixed(0));
        const city = resp.name;

        return {
          temperature,
          temperaturaFormat,
          temperatura_description,
          temperatura_min,
          temperatura_max,
          city
        };
    }));
  }

  public handleRefresh(event: CustomEvent) {
    setTimeout(() => {
      // Any calls to load data go here
      (this.infoForCityAndContry = this.getCurrentInfoForCityAndContryAsync()); 
      console.log(this.infoForCityAndContry);
    }, 2000);
  }
}

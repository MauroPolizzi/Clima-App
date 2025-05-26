import { Component, OnInit } from '@angular/core';
import { WidgetClimaComponent } from '../widget-clima/widget-clima.component';
import { WidgetInfoGeneralComponent } from '../widget-info-general/widget-info-general.component';
import { WidgetWeeklyForecastComponent } from '../widget-weekly-forecast/widget-weekly-forecast.component';
import { IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { ClimaService } from 'src/app/services/clima.service';
import { IRootObject_GetForCityAndContry } from 'src/app/interfaces/IClimaApp.interfaces';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home-clima',
  templateUrl: './home-clima.component.html',
  styleUrls: ['./home-clima.component.scss'],
  imports: [WidgetClimaComponent, WidgetInfoGeneralComponent, WidgetWeeklyForecastComponent, IonRefresher, IonRefresherContent]
})
export class HomeClimaComponent  implements OnInit {

  public infoForCityAndContry: any;

  constructor(private service: ClimaService) { 
    
    this.infoForCityAndContry = this.getCurrentInfoForCityAndContryAsync().subscribe();
  }
  
  ngOnInit() { 
    //this.infoForCityAndContry = this.getCurrentInfoForCityAndContry();
  }

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
        const temperaturaFormat = `${temperature}°C`;
        const temperatura_description = resp.weather[0].description;
        const temperatura_min = resp.main.temp_min;
        const temperatura_max = resp.main.temp_max;
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
      (event.target as HTMLIonRefresherElement).complete();
    }, 2000);
  }
}

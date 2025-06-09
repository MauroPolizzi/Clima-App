import { IonContent, IonRefresher, IonRefresherContent, IonSpinner } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize, forkJoin, map, Observable, timer } from 'rxjs';
import { ClimaService } from 'src/app/services/clima.service';
import { WidgetClimaComponent } from '../widget-clima/widget-clima.component';
import { WidgetInfoGeneralComponent } from '../widget-info-general/widget-info-general.component';
import { WidgetWeeklyForecastComponent } from '../widget-weekly-forecast/widget-weekly-forecast.component';
import { WidgetSunComponent } from '../widget-sun/widget-sun.component';
import { IRootObject_GetForCityAndContry } from 'src/app/interfaces/IClimaApp.interfaces';

@Component({
  selector: 'app-home-clima',
  templateUrl: './home-clima.component.html',
  styleUrls: ['./home-clima.component.scss'],
  imports: [CommonModule, WidgetClimaComponent, WidgetInfoGeneralComponent, WidgetWeeklyForecastComponent, WidgetSunComponent, IonContent, IonRefresher, IonRefresherContent, IonSpinner]
})
export class HomeClimaComponent  implements OnInit {

  public loading: boolean = true;
  public weatherData!: {
    temperature: number;
    temperaturaFormat: string;
    temperatura_description: string;
    temperatura_min: number;
    temperatura_max: number;
    city: string;
  };

  constructor(private service: ClimaService) { }
  
  ngOnInit() { this.loadWeatherData() }

  public loadWeatherData(event?: any): void {
    if (!event) this.loading = true;

    const weather: Observable<any> = this.service.getTemperatureStandarOfDay()
      .pipe(
        map((resp: IRootObject_GetForCityAndContry) => ({
          temperature: parseFloat(resp.main.temp.toFixed(0)),
          temperaturaFormat: `${parseFloat(resp.main.temp.toFixed(0))}°`,
          temperatura_description: resp.weather[0].description,
          temperatura_min: parseFloat(resp.main.temp_min.toFixed(0)),
          temperatura_max: parseFloat(resp.main.temp_max.toFixed(0)),
          city: resp.name,
        })),
      )
      
      // Establecemos el tiempo de espera
      const delay = timer(1500);
      
      forkJoin([weather, delay])
        .pipe(
          finalize(() => {
            this.loading = false;
            if (event) {
              event.target.complete(); // Finaliza la animación de refresco
            }
            this.loading = false;
          })
        )
      .subscribe({
        next: ([data]) => this.weatherData = data,
        error: (err) => {
          console.error('Error al cargar datos del clima', err);
        }
    });
  }
}

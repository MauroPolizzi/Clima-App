import { IonContent, IonRefresher, IonRefresherContent, IonSpinner, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize, forkJoin, map, Observable, timer } from 'rxjs';
import { ClimaService } from 'src/app/services/clima.service';
import { CountriesService } from '../../services/countries.service';
import { DatesService } from 'src/app/services/dates.service';
import { ButtonLocationComponent } from '../button-location/button-location.component';
import { WidgetClimaComponent } from '../widget-clima/widget-clima.component';
import { WidgetInfoGeneralComponent } from '../widget-info-general/widget-info-general.component';
import { WidgetWeeklyForecastComponent } from '../widget-weekly-forecast/widget-weekly-forecast.component';
import { WidgetSunComponent } from '../widget-sun/widget-sun.component';
import { WidgetHumidityComponent } from '../widget-humidity/widget-humidity.component';
import { WidgetWindComponent } from '../widget-wind/widget-wind.component';
import { IRootObject_GetForCityAndContry } from 'src/app/interfaces/IClimaApp.interfaces';

@Component({
  selector: 'app-home-clima',
  templateUrl: './home-clima.component.html',
  styleUrls: ['./home-clima.component.scss'],
  imports: [CommonModule, WidgetClimaComponent, WidgetInfoGeneralComponent, WidgetWeeklyForecastComponent, WidgetSunComponent, WidgetHumidityComponent, WidgetWindComponent, ButtonLocationComponent, IonContent, IonRefresher, IonRefresherContent, IonSpinner, IonGrid, IonRow, IonCol]
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

  // Propiedades que pasaremos al widget-sun.component
  public sunrise: string = '';
  public sunset: string = '';

  // Propiedad que pasaremos al widget-wind.component
  public windSpeed: number = 0;

  // Propiedad que pasaremos al widget-humility.component
  public humility: number = 0;

  constructor(private climaService: ClimaService, private dateServie: DatesService, private countriesService: CountriesService) { }
  
  ngOnInit() { 
    this.loadWeatherData(); 
  
    // Solicitud para testear method
    //this.countriesService.getCountryByCapitalAPiRestCountry('Buenos Aires').subscribe(resp => console.log(resp[0])); 
  }

  public loadWeatherData(event?: any): void {
    if (!event) this.loading = true;

    const weather: Observable<any> = this.climaService.getTemperatureStandarOfDay()
      .pipe(
        map((resp: IRootObject_GetForCityAndContry) => ({
          temperature: parseFloat(resp.main.temp.toFixed(0)),
          temperaturaFormat: `${parseFloat(resp.main.temp.toFixed(0))}°`,
          temperatura_description: resp.weather[0].description,
          temperatura_min: parseFloat(resp.main.temp_min.toFixed(0)),
          temperatura_max: parseFloat(resp.main.temp_max.toFixed(0)),
          city: resp.name,
          sunrise: this.dateServie.convertUnixToGMT3(resp.sys.sunrise),
          sunset: this.dateServie.convertUnixToGMT3(resp.sys.sunset),
          windSpeed: resp.wind.speed,
          humility: resp.main.humidity
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
        next: ([data]) => {
          this.weatherData = data;
          this.sunrise = data.sunrise,
          this.sunset = data.sunset,
          this.windSpeed = data.windSpeed,
          this.humility = data.humility
        },
        error: (err) => {
          console.error('Error al cargar datos del clima', err);
        }
    });
  }
}

import { Component } from '@angular/core';
import { ClimaService } from '../services/clima.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  public temperatura: number = 0;
  public city: string = '';
  public temperatura_description: string = '';
  public temperatura_min: number = 0;
  public temperatura_max: number = 0;
  
  constructor( private service: ClimaService ) { 

    service.getTemperatureStandar().subscribe( resp => { 
      this.temperatura = resp.main.temp;
      this.city = resp.name;
      this.temperatura_description = resp.weather[0].description;
      this.temperatura_min = resp.main.temp_min;
      this.temperatura_max = resp.main.temp_max;

      console.log(resp);
     });
  }

}

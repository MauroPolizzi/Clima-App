import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-widget-info-general',
  templateUrl: './widget-info-general.component.html',
  styleUrls: ['./widget-info-general.component.scss'],
})
export class WidgetInfoGeneralComponent  implements OnInit {

  public temperatura: number = 0;
  public temperaturaFormat: string = '';
  public city: string = '';
  public temperatura_description: string = '';
  public temperatura_min: number = 0;
  public temperatura_max: number = 0;
    
    constructor( private service: ClimaService ) { 
  
      this.service.getTemperatureStandarOfDay().subscribe( resp => { 
        this.temperatura = parseFloat(resp.main.temp.toFixed(0));
        this.city = resp.name;
        this.temperatura_description = resp.weather[0].description;
        this.temperatura_min = parseFloat(resp.main.temp_min.toFixed(0));
        this.temperatura_max = parseFloat(resp.main.temp_max.toFixed(0))
        this.temperaturaFormat = `${parseFloat(this.temperatura.toFixed(0))}°`;
       });
    }

  ngOnInit() {
  }

}

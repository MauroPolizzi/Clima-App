import { Component, OnInit } from '@angular/core';
import { IRootObject_GetForCityAndContry } from 'src/app/interfaces/IClimaApp.interfaces';
import { ClimaService } from 'src/app/services/clima.service';
import { DatesService } from 'src/app/services/dates.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-widget-clima',
  templateUrl: './widget-clima.component.html',
  styleUrls: ['./widget-clima.component.scss']
})
export class WidgetClimaComponent  implements OnInit {

  public fecha = this.datesService.getCurrentDateInfo();
  public icon: string = environment.URL_ICON;

  constructor(private climaService: ClimaService, private datesService: DatesService) { 

    this.climaService.getTemperatureStandarOfDay().subscribe( (resp: IRootObject_GetForCityAndContry) => this.icon += `${ resp.weather[0].icon }@2x.png`);
  }

  ngOnInit() { }
  
}

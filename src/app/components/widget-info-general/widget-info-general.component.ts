import { Component, Input } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-widget-info-general',
  templateUrl: './widget-info-general.component.html',
  styleUrls: ['./widget-info-general.component.scss'],
})
export class WidgetInfoGeneralComponent  {

  @Input() info_GetForCityAndContry!: {
    temperature: number;
    temperaturaFormat: string;
    temperatura_description: string;
    temperatura_min: number;
    temperatura_max: number;
    city: string;
  };

  constructor( private service: ClimaService ) { }
  
}

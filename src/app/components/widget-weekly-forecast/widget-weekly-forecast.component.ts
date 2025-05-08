import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-widget-weekly-forecast',
  templateUrl: './widget-weekly-forecast.component.html',
  styleUrls: ['./widget-weekly-forecast.component.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonGrid, IonCol, IonRow]
})
export class WidgetWeeklyForecastComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

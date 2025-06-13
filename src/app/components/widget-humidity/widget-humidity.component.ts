import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-widget-humidity',
  templateUrl: './widget-humidity.component.html',
  styleUrls: ['./widget-humidity.component.scss'],
  imports: [IonCard, IonCardContent, IonIcon]
})
export class WidgetHumidityComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

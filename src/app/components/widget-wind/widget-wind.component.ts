import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardSubtitle, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-widget-wind',
  templateUrl: './widget-wind.component.html',
  styleUrls: ['./widget-wind.component.scss'],
  imports: [IonCard, IonCardContent, IonCardSubtitle, IonIcon]
})
export class WidgetWindComponent  implements OnInit {

  @Input() windSpeed: number = 0;

  constructor() { }

  ngOnInit() {}

}

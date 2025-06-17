import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardSubtitle, IonIcon } from '@ionic/angular/standalone';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-widget-humidity',
  templateUrl: './widget-humidity.component.html',
  styleUrls: ['./widget-humidity.component.scss'],
  imports: [IonCard, IonCardContent, IonCardSubtitle, IonIcon, NgIf]
})
export class WidgetHumidityComponent  implements OnInit {

  @Input() humility: number = 0;

  constructor() { }

  ngOnInit() {}

}

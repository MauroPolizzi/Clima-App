import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-widget-sun',
  templateUrl: './widget-sun.component.html',
  styleUrls: ['./widget-sun.component.scss'],
  imports: [IonCard, IonCardContent, IonIcon]
})
export class WidgetSunComponent  implements OnInit {

  @Input() sunrise: string = '';
  @Input() sunset: string = '';

  constructor() { }
  
  ngOnInit() {  }
}

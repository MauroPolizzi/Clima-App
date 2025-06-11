import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-widget-sun',
  templateUrl: './widget-sun.component.html',
  styleUrls: ['./widget-sun.component.scss'],
  imports: [IonCard, IonCardContent, IonIcon]
})
export class WidgetSunComponent  implements OnInit {
  
   data = [
    { name: '5 AM', value: 0 },
    { name: '6 AM', value: 30 },
    { name: '7 AM', value: 80 },
    { name: '8 AM', value: 120 },
    { name: '9 AM', value: 150 },
    { name: '12 PM', value: 200 },
    { name: '3 PM', value: 180 },
    { name: '6 PM', value: 120 },
    { name: '7 PM', value: 60 },
    { name: '8 PM', value: 10 },
    { name: '9 PM', value: 0 }
  ];

  sunrise = '6:03 AM';
  sunset = '8:12 PM';

  constructor() { }
  
  ngOnInit() {  }
}

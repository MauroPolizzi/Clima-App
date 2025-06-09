import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle } from '@ionic/angular/standalone';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-widget-sun',
  templateUrl: './widget-sun.component.html',
  styleUrls: ['./widget-sun.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardContent, IonCardSubtitle]
})
export class WidgetSunComponent  implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
    this.chart();
  }

  private chart() {
    const chart = document.getElementById('mychart') as HTMLCanvasElement;
    
    new Chart(chart, {
      type: 'line',
      data: {
        labels: ['January', 'Febrary', 'March', 'April', 'May'],
        datasets: [{
          label: 'Chart of sunrise',
          data: [12, 19, 5, 50, 87],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });
  }
}

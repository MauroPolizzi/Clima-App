import { Component, OnInit } from '@angular/core';
import { IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonSearchbar, IonInfiniteScroll, IonInfiniteScrollContent, InfiniteScrollCustomEvent } from '@ionic/angular/standalone'

@Component({
  selector: 'app-button-location',
  templateUrl: './button-location.component.html',
  styleUrls: ['./button-location.component.scss'],
  imports: [IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonSearchbar, IonInfiniteScroll, IonInfiniteScrollContent]
})
export class ButtonLocationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
}

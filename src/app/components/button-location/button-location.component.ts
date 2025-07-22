import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone'
import { CountriesService } from '../../services/countries.service';
import { ICountry_CountryStateCity, ICountryDetail_RestCountry } from 'src/app/interfaces/IClimaApp.interfaces';

@Component({
  selector: 'app-button-location',
  templateUrl: './button-location.component.html',
  styleUrls: ['./button-location.component.scss'],
  imports: [IonSearchbar, IonList, IonItem, IonLabel, NgIf, NgFor]
})
export class ButtonLocationComponent  implements OnInit {

  public countryList: ICountryDetail_RestCountry[] = [];

  constructor(private countriesService : CountriesService) { }

  ngOnInit() {}

  onSearchChange(event: any) {
    let search: string = event.detail.value;
    if(search.length > 3) {
      this.countriesService.getCountryByNameAPiRestCountry(search)
        .subscribe((resp: ICountryDetail_RestCountry[]) => {
          this.countryList = resp;
          console.log(this.countryList);
        });
    }
  }
}

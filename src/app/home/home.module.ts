import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { ButtonLocationComponent } from '../components/button-location/button-location.component';
import { HomePageRoutingModule } from './home-routing.module';
import { HomeClimaComponent } from '../components/home-clima/home-clima.component';
import { WidgetClimaComponent } from "../components/widget-clima/widget-clima.component";
import { WidgetWeeklyForecastComponent } from "../components/widget-weekly-forecast/widget-weekly-forecast.component";
import { WidgetInfoGeneralComponent } from "../components/widget-info-general/widget-info-general.component";
import { WidgetSunComponent } from '../components/widget-sun/widget-sun.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HomeClimaComponent,
    WidgetClimaComponent,
    WidgetWeeklyForecastComponent,
    WidgetInfoGeneralComponent,
    WidgetSunComponent,
    ButtonLocationComponent
],
  declarations: [HomePage]
})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { WidgetClimaComponent } from "../components/widget-clima/widget-clima.component";
import { WidgetWeeklyForecastComponent } from "../components/widget-weekly-forecast/widget-weekly-forecast.component";
import { WidgetInfoGeneralComponent } from "../components/widget-info-general/widget-info-general.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    WidgetClimaComponent,
    WidgetWeeklyForecastComponent,
    WidgetInfoGeneralComponent
],
  declarations: [HomePage]
})
export class HomePageModule {}

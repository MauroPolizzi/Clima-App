import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WidgetWeeklyForecastComponent } from './widget-weekly-forecast.component';

describe('WidgetWeeklyForecastComponent', () => {
  let component: WidgetWeeklyForecastComponent;
  let fixture: ComponentFixture<WidgetWeeklyForecastComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetWeeklyForecastComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetWeeklyForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

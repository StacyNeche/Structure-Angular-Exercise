import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetComponent } from "./components/weather-widget/weather-widget.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { WeatherInterceptor } from "./interceptors/weather.interceptor";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    WeatherWidgetComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
		MatTooltipModule,
		NoopAnimationsModule,
		HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WeatherInterceptor,
      multi: true
    },
  ],
  exports: [
    WeatherWidgetComponent
  ]
})
export class WeatherModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BikesModule } from "./bikes/bikes.module";
import { WeatherModule } from "./weather/weather.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BikesModule,
    WeatherModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

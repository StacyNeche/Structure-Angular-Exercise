import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BikesListComponent } from './bikes/components/bikes-list/bikes-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BikePhotoComponent } from './bikes/components/bike-photo/bike-photo.component';
import { AddOrUpdateBikeDialogComponent } from './bikes/components/add-or-update-bike-dialog/add-or-update-bike-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { WeatherInterceptor } from "./weather/interceptors/weather.interceptor";
import { WeatherWidgetComponent } from './weather/components/weather-widget/weather-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    BikesListComponent,
    BikePhotoComponent,
    AddOrUpdateBikeDialogComponent,
    WeatherWidgetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    NoopAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WeatherInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

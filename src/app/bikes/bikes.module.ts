import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikesListComponent } from "./components/bikes-list/bikes-list.component";
import { BikePhotoComponent } from "./components/bike-photo/bike-photo.component";
import {
  AddOrUpdateBikeDialogComponent
} from "./components/add-or-update-bike-dialog/add-or-update-bike-dialog.component";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    BikesListComponent,
    BikePhotoComponent,
    AddOrUpdateBikeDialogComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    NoopAnimationsModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [
    BikesListComponent
  ]
})
export class BikesModule { }

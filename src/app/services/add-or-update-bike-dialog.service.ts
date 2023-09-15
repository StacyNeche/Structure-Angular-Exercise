import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddOrUpdateBikeDialogComponent } from "../components/add-or-update-bike-dialog/add-or-update-bike-dialog.component";
import { IBike } from "../models/bike.model";
import { filter } from "rxjs";
import { BikesService } from "./bikes.service";

@Injectable({
	providedIn: "root"
})
export class AddOrUpdateBikeDialogService {
	constructor(private readonly dialog: MatDialog, private readonly bikeService: BikesService) {
	}

	openDialog(bike?: IBike): void {
		const dialogRef = this.dialog.open(AddOrUpdateBikeDialogComponent, {
			data: bike, disableClose: true, minWidth: 400
		});

		dialogRef.afterClosed() // Any notification will complete the observable, no need to unsubscribe
			.pipe(filter((bike: Partial<IBike>) => !!bike)).subscribe((bike: Partial<IBike>) => this.bikeService.addOrUpdate(bike));
	}
}
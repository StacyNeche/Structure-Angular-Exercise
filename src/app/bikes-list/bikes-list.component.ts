import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { BikesService } from "../services/bikes.service";
import { IBike } from "../models/bike.model";
import { AddOrUpdateBikeDialogService } from "../services/add-or-update-bike-dialog.service";
import { BikesDataSource } from "../models/bikes-data.source";

@Component({
	selector: "app-bikes-list",
	templateUrl: "./bikes-list.component.html",
	styleUrls: ["./bikes-list.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikesListComponent implements OnInit, OnDestroy {
	public bikeTableColumns = ["photo", "model", "type", "rating", "price", "qty", "description", "actions"];
	public bikesDataSource: BikesDataSource = new BikesDataSource([]);

	private subscriptions: Subscription = new Subscription();

	constructor(private readonly bikesService: BikesService,
							private readonly addOrUpdateBikeDialogService: AddOrUpdateBikeDialogService) {
	}

	public ngOnInit(): void {
		this.subscriptions.add(this.bikesService.bikes$.subscribe((bikes: IBike[]) => this.bikesDataSource.setData(bikes)));
	}

	public ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}

	public onDeleteBike(id: string): void {
		this.bikesService.deleteBike(id);
	}

	public onAddNewBike(): void {
		this.addOrUpdateBikeDialogService.openDialog();
	}

	public onEditBike(id: string): void {
		// emulate real-life scenario: refresh bike's data before edit
    const bike = this.bikesService.loadSingle(id);
		this.addOrUpdateBikeDialogService.openDialog(bike);
	}
}

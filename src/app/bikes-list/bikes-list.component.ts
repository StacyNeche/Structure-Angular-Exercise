import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { BikesService } from "../services/bikes.service";
import { IBike } from "../models/bike.model";

@Component({
	selector: "app-bikes-list",
	templateUrl: "./bikes-list.component.html",
	styleUrls: ["./bikes-list.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikesListComponent implements OnInit, OnDestroy {
	public bikes: IBike[] = [];
	public bikeTableColumns = ["photo", "model", "type", "rating", "price", "qty", "description", "actions"];

	private subscriptions: Subscription = new Subscription();

	constructor(private readonly bikesService: BikesService) {
	}

	public ngOnInit(): void {
		this.subscriptions.add(this.bikesService.bikes$.subscribe((bikes: IBike[]) => this.bikes = bikes));
	}

	public ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}

	public onDeleteBike(id: string): void {
		this.bikesService.deleteBike(id);
	}
}

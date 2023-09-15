import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IBike } from "../../models/bike.model";
import { BikeType } from "../../models/bike.type";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-add-or-update-bike-dialog",
	templateUrl: "./add-or-update-bike-dialog.component.html",
	styleUrls: ["./add-or-update-bike-dialog.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddOrUpdateBikeDialogComponent implements OnInit {

	public mode: "add" | "edit";
	public bikeTypes: BikeType[] = ["Mountain", "Road", "Hybrid", "Other"];
	public bikeForm: FormGroup;

	constructor(@Inject(MAT_DIALOG_DATA) public readonly bike: IBike,
							private readonly formBuilder: FormBuilder) {
	}

	public ngOnInit(): void {
		this.mode = this.bike ? "edit" : "add";
		this.buildBikeForm();
	}

	public getSubmitValue(): Partial<IBike> {
		return {
			id: this.bike?.id,
			...this.bikeForm.getRawValue()
		}
	}

	private buildBikeForm(): void {
		const bike = this.getBikeOrDefault();
		this.bikeForm = this.formBuilder.group({
			model: [bike.model, Validators.required],
			type: bike.type,
			rating: [bike.rating, [Validators.min(-5), Validators.max(5)]],
			price: [bike.price, Validators.min(0)],
			qty: [bike.qty, [Validators.required, Validators.min(1)]],
			description: bike.description
		});
	}

	private getBikeOrDefault(): Partial<IBike> {
		return this.bike ? this.bike : {qty: 1};
	}
}

import { Injectable } from "@angular/core";
import { IBike } from "../models/bike.model";
import { BIKES } from "../../db/bikes.repository";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root"
})

export class BikesService {
	private bikes = BIKES;

	public bikes$: BehaviorSubject<IBike[]> = new BehaviorSubject(this.bikes);

	public deleteBike(id: string): void {
    this.bikes = this.bikes.filter((bike: IBike) => bike.id !== id);
		this.bikes$.next(this.bikes);
	}
}
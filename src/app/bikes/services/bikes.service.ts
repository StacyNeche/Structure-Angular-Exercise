import { Injectable } from "@angular/core";
import { IBike } from "../models/bike.model";
import { BIKES } from "../../../db/bikes.repository";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root"
})

export class BikesService {
	private bikes = BIKES;

	public bikes$: BehaviorSubject<IBike[]> = new BehaviorSubject(this.bikes);

	public loadSingle(id: string): IBike | undefined {
		return this.bikes.find((bike: IBike) => bike.id === id);
	}

	public deleteBike(id: string): void {
		this.bikes = this.bikes.filter((bike: IBike) => bike.id !== id);
		this.bikes$.next(this.bikes);
	}

	public addOrUpdate(bike: Partial<IBike>): void {
		bike.id ? this.updateBike(bike) : this.addBike(bike);
		this.bikes$.next(this.bikes);
	}

	private updateBike(bike: Partial<IBike>): void {
		const ind = this.bikes.findIndex((bikeInStore) => bikeInStore.id === bike.id);
		this.bikes[ind] = bike as IBike;
	}

	private addBike(bike: Partial<IBike>): void {
		const bikeToSave: IBike = {
			...bike as IBike, id: this.generateId()
		}
		this.bikes.push(bikeToSave);
	}

	private generateId(): string {
		return (Math.random() + 1).toString(36).substring(7);
	}
}
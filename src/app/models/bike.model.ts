import { BikeType } from "./bike.type";

export interface IBike {
	id: string;
	model: string;
	description: string;
	rating: number;
	price: number;
	qty: number;
	type: BikeType;
	image: string;
}
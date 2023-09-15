import { BikeType } from "./bike.type";

export interface IBike {
	id: string;
	model: string;
	qty: number;
	description?: string;
	rating?: number;
	price?: number;
	type?: BikeType;
	image?: string;
}
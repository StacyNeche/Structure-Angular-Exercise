import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { from, map, Observable, switchMap } from "rxjs";
import { IWeatherResponse } from "../models/weather-response.model";
import { ICoordinates } from "../models/coordinates.model";
import { apiConfig } from "../../../api.config";

@Injectable({
	providedIn: "root"
})
export class WeatherService {

	constructor(private readonly httpClient: HttpClient) {
	}

	public getCurrentWeather(): Observable<IWeatherResponse> {
		return from(this.tryGetCoordinates())
			.pipe(
				map((coordinates: ICoordinates) =>
					new HttpParams().appendAll({
						lat: coordinates.latitude,
						lon: coordinates.longitude
					})),
				switchMap((params: HttpParams) =>
					this.httpClient.get<IWeatherResponse>(apiConfig.weatherURL, {params})));
	}

	private tryGetCoordinates = async (): Promise<ICoordinates> => {
		return new Promise((resolve, reject) => {
			if (!("geolocation" in navigator)) {
				reject(new Error("Weather widget: geolocation is not available in this browser."))
			}

			const errorHandler = (error: GeolocationPositionError) => {
				switch (error.code) {
					case error.PERMISSION_DENIED:
						reject(new Error("Weather widget: user denied the request for geolocation."));
						break;
					default:
						reject(new Error("Weather widget is temporary not available"))
				}
			}

			const successHandler = (position: GeolocationPosition) => resolve({
				longitude: position.coords.longitude, latitude: position.coords.latitude
			});

			navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
		})
	}
}
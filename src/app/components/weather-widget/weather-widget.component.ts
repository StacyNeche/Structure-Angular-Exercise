import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../../services/weather.service";
import { catchError, ignoreElements, map, Observable, of } from "rxjs";
import { weatherViewFromWeatherResponse } from "../../mappers/weather-view.mapper";
import { IWeatherView } from "../../models/weather-view.model";

@Component({
	selector: "app-weather-widget",
	templateUrl: "./weather-widget.component.html",
	styleUrls: ["./weather-widget.component.scss"]
})
export class WeatherWidgetComponent implements OnInit {
	public weather$: Observable<IWeatherView>;
	public error$: Observable<string>;

	constructor(private readonly weatherService: WeatherService) {
	}

	public ngOnInit(): void {
		this.weather$ = this.weatherService.getCurrentWeather()
			.pipe(map(weatherViewFromWeatherResponse));

		this.error$ = this.weather$
			.pipe(ignoreElements(),
				catchError(({message}) => of(message)))
	}
}

import { IWeatherResponse } from "../models/weather-response.model";
import { IWeatherView } from "../models/weather-view.model";
import { apiConfig } from "../../api.config";

export const weatherViewFromWeatherResponse = (response: IWeatherResponse): IWeatherView => {
	const weatherResponse = response?.weather?.length ? response.weather[0] : null;

	return {
		dt: response.dt,
		name: response.name,
		temp: response?.main?.temp,
		feelsLike: response?.main?.feels_like,
		icon: weatherResponse?.icon ? apiConfig.weatherImagesURL.concat(`${weatherResponse?.icon}@2x.png`) : '',
		main: weatherResponse?.main ?? '',
		description: weatherResponse?.description ?? '',
		humidity: response.main?.humidity,
		windSpeed: response.wind?.speed,
	}
}
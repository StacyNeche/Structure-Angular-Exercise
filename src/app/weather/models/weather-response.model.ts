export interface IWeatherResponse {
	weather: [{
		main: string,
		description: string,
		icon: string,
	}],
	main: {
		temp: number,
		feels_like: number,
		humidity: number,
	},
	visibility: number,
	wind: {
		speed: number,
	},
	dt: number,
	name: string
}
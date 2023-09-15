import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiConfig } from "../../../api.config";
import { environment } from "../../../environments/environment";

@Injectable()
export class WeatherInterceptor implements HttpInterceptor {
	public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (req.url.includes(apiConfig.weatherURL)) {
			req = req.clone({
				params: req.params.append("appid", environment.weatherApiKey)
			});
		}

		return next.handle(req);
	}
}
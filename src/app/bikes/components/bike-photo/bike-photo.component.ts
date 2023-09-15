import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
	selector: "app-bike-photo",
	templateUrl: "./bike-photo.component.html",
	styleUrls: ["./bike-photo.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikePhotoComponent {
	@Input() public src?: string;

	public imageFound = true;

	public onLoadImageError(): void {
		this.imageFound = false;
	}
}

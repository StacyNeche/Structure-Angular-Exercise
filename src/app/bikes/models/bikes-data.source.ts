// Required for Angular Material Table
import { IBike } from "./bike.model";
import { Observable, ReplaySubject } from "rxjs";
import { DataSource } from "@angular/cdk/collections";

export class BikesDataSource extends DataSource<IBike> {
	private _dataStream = new ReplaySubject<IBike[]>();

	constructor(initialData: IBike[]) {
		super();
		this.setData(initialData);
	}

	public connect(): Observable<IBike[]> {
		return this._dataStream;
	}

	public disconnect() {
	}

	public setData(data: IBike[]) {
		this._dataStream.next(data);
	}
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommDataModel } from '../model/comm.data.model';
import { Theme } from '../model/theme';

@Injectable({
	providedIn: 'root',
})
export class CommonDataService {
	constructor(private http: HttpClient) {}

	public themeState$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>({
		darkmode: false,
	});

	getHeader(): Observable<CommDataModel> {
		return this.http.get(
			'assets/db-data/common-val.json'
		) as Observable<CommDataModel>;
	}
}

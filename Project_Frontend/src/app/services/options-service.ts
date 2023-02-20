import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterModel } from '../model/filter.model';

@Injectable({
	providedIn: 'root',
})
export class OptionsService {
	constructor(private http: HttpClient) {}

	getOptions() {
		return this.http.get('assets/db-data/filters.json');
	}
	getOptionsWithLabel(): Observable<FilterModel[]> {
		return this.http.get('assets/db-data/filters-labeled.json') as Observable<
			FilterModel[]
		>;
	}
}

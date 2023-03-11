import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FILTER_LABEL } from '../../assets/db-data/filters-labeled';
import { INSTRUMENTS } from '../../assets/db-data/instruments';
import { FilterModel, OptionModel } from '../model/filter.model';

@Injectable({
	providedIn: 'root',
})
export class OptionsService {
	constructor(private http: HttpClient) {}

	getInstruments(): OptionModel[] {
		return INSTRUMENTS as OptionModel[];
	}
	getOptionsWithLabel(): FilterModel[] {
		return FILTER_LABEL as FilterModel[];
	}
}

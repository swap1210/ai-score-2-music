import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { COMM_DATA } from '../../assets/db-data/common-val';
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

	getData(): CommDataModel {
		return COMM_DATA;
	}
}

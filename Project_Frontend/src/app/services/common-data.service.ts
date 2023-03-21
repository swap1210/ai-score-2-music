import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { COMM_DATA } from '../../assets/db-data/common-val';
import { CommDataModel } from '../model/comm.data.model';
import { Theme } from '../model/theme';

export interface CurrentState {
	apiFound: boolean;
}

@Injectable({
	providedIn: 'root',
})
export class CommonDataService {
	constructor(private http: HttpClient) {}

	public themeState$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>({
		darkmode: false,
	});

	public currentState$: BehaviorSubject<CurrentState> =
		new BehaviorSubject<CurrentState>({
			apiFound: false,
		});

	getData(): CommDataModel {
		return COMM_DATA;
	}
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommDataModel } from '../model/comm.data.model';
import { Theme } from '../model/theme';
import { CommonDataService } from '../services/common-data.service';

@Component({
	selector: 'app-main-home',
	templateUrl: './main-home.component.html',
	styleUrls: ['./main-home.component.scss'],
})
export class MainHomeComponent implements OnInit, OnDestroy {
	constructor(public commData: CommonDataService) {}
	ngOnInit(): void {}
	ngOnDestroy(): void {
		throw new Error('Method not implemented.');
	}
}

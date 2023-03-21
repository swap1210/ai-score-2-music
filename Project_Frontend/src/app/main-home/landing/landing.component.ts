import { Component, OnInit } from '@angular/core';
import { Home } from '../../model/comm.data.model';
import { CommonDataService } from '../../services/common-data.service';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
	public dat: Home;
	constructor(public commData: CommonDataService) {
		this.dat = commData.getData().home;
	}
	ngOnInit(): void {}

	clearKey(): void {
		sessionStorage.setItem('GPT_TOK', '');
		this.commData.currentState$.next({ apiFound: false });
	}
}

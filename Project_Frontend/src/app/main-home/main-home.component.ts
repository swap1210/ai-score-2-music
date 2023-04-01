import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogText } from '../model/comm.data.model';
import {
	CommonDataService,
	CurrentState,
} from '../services/common-data.service';
import { KeyDialog } from './key-dialog/key-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-main-home',
	templateUrl: './main-home.component.html',
	styleUrls: ['./main-home.component.scss'],
})
export class MainHomeComponent implements OnInit {
	chatShh: string;
	constructor(
		public commData: CommonDataService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {
		this.chatShh = localStorage.getItem('GPT_TOK');
		if (!(!this.chatShh || this.chatShh == 'null' || this.chatShh == '')) {
			this.chatShh = localStorage.getItem('GPT_TOK');
			this.commData.currentState$.next({
				apiFound: true,
			});
		}
	}
	ngOnInit(): void {
		this.activatedRoute.fragment.subscribe((params: string) => {
			if (params && params.includes('ref')) {
				console.log('Dialog to be closed');
				this.router.navigate(['ref']);
			}
		});
	}
}

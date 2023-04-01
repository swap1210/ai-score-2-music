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
export class MainHomeComponent implements OnInit, OnDestroy {
	chatShh: string;
	constructor(
		public commData: CommonDataService,
		public dialog: MatDialog,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {
		this.chatShh = sessionStorage.getItem('GPT_TOK');
		if (!(!this.chatShh || this.chatShh == 'null' || this.chatShh == '')) {
			this.chatShh = sessionStorage.getItem('GPT_TOK');
			this.commData.currentState$.next({
				apiFound: true,
			});
		}

		this.commData.currentState$.subscribe({
			next: (val: CurrentState) => {
				if (!val.apiFound) {
					this.openDialog();
				} else {
					this.dialog.closeAll();
				}
			},
		});
	}
	ngOnInit(): void {
		this.activatedRoute.fragment.subscribe((params: string) => {
			console.log(params); // Print the parameter to the console.
			if (params.includes('ref')) {
				this.router.navigate(['ref']);
			}
		});
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(KeyDialog, {
			data: this.commData.getData().apiKeyDialog,
		});

		dialogRef.afterClosed().subscribe((result: DialogText) => {
			if (
				typeof result == 'undefined' ||
				!result.key ||
				result.key == 'null' ||
				result.key == ''
			) {
				this.commData.currentState$.next({
					apiFound: false,
				});
			} else {
				sessionStorage.setItem('GPT_TOK', result.key);
				this.commData.currentState$.next({
					apiFound: true,
				});
			}
		});
	}
	ngOnDestroy(): void {}
}

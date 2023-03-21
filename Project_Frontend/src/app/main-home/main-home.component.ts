import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
	CommonDataService,
	CurrentState,
} from '../services/common-data.service';
import { DialogData, KeyDialog } from './key-dialog/key-dialog.component';

@Component({
	selector: 'app-main-home',
	templateUrl: './main-home.component.html',
	styleUrls: ['./main-home.component.scss'],
})
export class MainHomeComponent implements OnInit, OnDestroy {
	chatShh: string;
	constructor(public commData: CommonDataService, public dialog: MatDialog) {
		this.chatShh = sessionStorage.getItem('GPT_TOK');
		if (!this.chatShh || this.chatShh == 'null' || this.chatShh == '') {
			this.openDialog();
		} else {
			this.chatShh = sessionStorage.getItem('GPT_TOK');
			this.commData.currentState$.next({
				apiFound: true,
			});
		}

		this.commData.currentState$.subscribe({
			next: (val: CurrentState) => {
				if (!val.apiFound) {
					this.openDialog();
				}
			},
		});
	}
	ngOnInit(): void {}

	openDialog(): void {
		const dialogRef = this.dialog.open(KeyDialog, {
			data: {},
		});

		dialogRef.afterClosed().subscribe((result: DialogData) => {
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

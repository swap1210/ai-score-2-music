import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonDataService } from '../services/common-data.service';
import { KeyDialog, DialogData } from './key-dialog/key-dialog.component';

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
			this.chatShh = prompt('Please enter your API key', '');
			sessionStorage.setItem('GPT_TOK', this.chatShh);
		} else {
			this.chatShh = sessionStorage.getItem('GPT_TOK');
		}
	}
	ngOnInit(): void {}

	openDialog(): void {
		const dialogRef = this.dialog.open(KeyDialog, {
			data: {},
		});

		dialogRef.afterClosed().subscribe((result: DialogData) => {
			console.log('The dialog was closed', result);
			this.chatShh = result.key;
		});
	}
	ngOnDestroy(): void {}
}

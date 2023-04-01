import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogText, Home } from '../../model/comm.data.model';
import {
	CommonDataService,
	CurrentState,
} from '../../services/common-data.service';
import { MatDialog } from '@angular/material/dialog';
import { KeyDialog } from '../key-dialog/key-dialog.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
	public dat: Home;
	destroy$: Subject<boolean> = new Subject<boolean>();
	constructor(public commData: CommonDataService, public dialog: MatDialog) {
		this.dat = commData.getData().home;
	}
	ngOnDestroy(): void {
		console.log('Landing killed');
		this.dialog.closeAll();
		this.destroy$.next(true);
		this.destroy$.complete();
	}
	ngOnInit(): void {
		this.commData.currentState$.pipe(takeUntil(this.destroy$)).subscribe({
			next: (val: CurrentState) => {
				if (!val.apiFound) {
					this.openDialog();
				} else {
					console.log('Now found');
					this.dialog.closeAll();
				}
			},
		});
	}

	openDialog(): void {
		console.log('Opened dialog');
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
				localStorage.setItem('GPT_TOK', result.key);
				this.commData.currentState$.next({
					apiFound: true,
				});
			}
		});
	}

	clearKey(): void {
		localStorage.setItem('GPT_TOK', '');
		this.commData.currentState$.next({ apiFound: false });
	}
}

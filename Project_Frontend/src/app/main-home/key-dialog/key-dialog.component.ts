import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
	selector: 'key-dialog',
	templateUrl: './key-dialog.component.html',
	styleUrls: ['./key-dialog.component.scss'],
})
export class KeyDialog {
	constructor(
		public dialogRef: MatDialogRef<KeyDialog>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}
}

export interface DialogData {
	key: string;
}

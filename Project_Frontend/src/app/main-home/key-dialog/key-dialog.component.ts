import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogText } from '../../model/comm.data.model';

@Component({
	selector: 'key-dialog',
	templateUrl: './key-dialog.component.html',
	styleUrls: ['./key-dialog.component.scss'],
})
export class KeyDialog {
	constructor(
		public dialogRef: MatDialogRef<KeyDialog>,
		@Inject(MAT_DIALOG_DATA) public data: DialogText
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}
}

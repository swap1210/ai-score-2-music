import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

let components = [
	CommonModule,
	ClipboardModule,
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
];

@NgModule({
	declarations: [],
	imports: components,
	exports: components,
})
export class HomeMaterialModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';

let components = [
	CommonModule,
	ClipboardModule,
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatTabsModule,
	MatFormFieldModule,
	ReactiveFormsModule,
	MatSelectModule,
	MatTooltipModule,
	MatInputModule,
];

@NgModule({
	declarations: [],
	imports: components,
	exports: components,
})
export class HomeMaterialModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';

let components = [CommonModule, ClipboardModule];

@NgModule({
	declarations: [],
	imports: components,
	exports: components,
})
export class HomeMaterialModule {}

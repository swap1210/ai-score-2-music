import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainHomeRoutingModule } from './main-home-routing.module';
import { MainHomeComponent } from './main-home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PromptGenComponent } from './prompt-gen/prompt-gen.component';
import { HomeMaterialModule } from './home-material/home-material.module';
import { EditorComponent } from './prompt-gen/editor/editor.component';
import { KeyDialog } from './key-dialog/key-dialog.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
	declarations: [
		MainHomeComponent,
		HeaderComponent,
		FooterComponent,
		PromptGenComponent,
		EditorComponent,
		KeyDialog,
		LandingComponent,
	],
	imports: [CommonModule, HomeMaterialModule, MainHomeRoutingModule],
})
export class MainHomeModule {}

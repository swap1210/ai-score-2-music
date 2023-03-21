import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlatioEditorComponent } from './flatio-editor/flatio-editor.component';
import { LandingComponent } from './landing/landing.component';
import { MainHomeComponent } from './main-home.component';
import { PromptGenComponent } from './prompt-gen/prompt-gen.component';

const routes: Routes = [
	{
		path: '',
		component: MainHomeComponent,
		children: [
			{
				path: '',
				component: LandingComponent,
			},
			{
				path: 'music-gen',
				component: PromptGenComponent,
			},
			{
				path: 'editor',
				component: FlatioEditorComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MainHomeRoutingModule {}

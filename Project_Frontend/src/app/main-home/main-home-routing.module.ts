import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from '../editor/editor.component';
import { MainHomeComponent } from './main-home.component';
import { PromptGenComponent } from './prompt-gen/prompt-gen.component';

const routes: Routes = [
	{
		path: '',
		component: MainHomeComponent,
		children: [
			{
				path: 'editor',
				component: EditorComponent,
			},
			{
				path: 'prompt-gen',
				component: PromptGenComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MainHomeRoutingModule {}

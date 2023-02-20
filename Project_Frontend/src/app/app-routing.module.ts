import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { HomeComponent } from './main-home/home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'editor',
		component: EditorComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./main-home/main-home.module').then((m) => m.MainHomeModule),
	},
	{
		path: '**',
		redirectTo: '/',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {})],
	exports: [RouterModule],
})
export class AppRoutingModule {}

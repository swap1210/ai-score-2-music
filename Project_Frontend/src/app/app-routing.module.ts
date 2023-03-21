import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
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
		redirectTo: '/home',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {})],
	exports: [RouterModule],
})
export class AppRoutingModule {}

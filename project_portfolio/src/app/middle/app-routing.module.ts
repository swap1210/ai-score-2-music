import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { MiddleComponent } from './middle.component';

const routes: Routes = [
  {
    path:"",
    component:MiddleComponent
  },
  {
    path:"error",
    component: ErrorComponent
  },
  {
    path:"**",
    redirectTo:'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

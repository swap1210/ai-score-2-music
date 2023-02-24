import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsedMaterialModule } from './used-material/used-material.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

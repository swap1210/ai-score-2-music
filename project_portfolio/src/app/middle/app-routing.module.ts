import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MentorComponent } from './mentor/mentor.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent,
  },{
    path: 'team',
    component: TeamComponent,
    },{
      path: 'mentor',
      component: MentorComponent,
      },
{
 path: '**',
 redirectTo: 'error',
},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { MentorComponent } from './mentor/mentor.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { MemberComponent } from './team/member/member.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'mentor',
    component: MentorComponent,
  },
  {
    path: 'milestones',
    component: MilestonesComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
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
export const RoutingComponents = [
  HomeComponent,
  TeamComponent,
  MentorComponent,
  MemberComponent,
  MilestonesComponent,
];

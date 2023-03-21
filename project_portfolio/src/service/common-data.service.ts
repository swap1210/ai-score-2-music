import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { COMMVAL } from 'src/assets/db-data/common-val';
import {
  CommDataModel,
  Footer,
  Header,
  Home,
  Mentor,
  Milestone,
  TeamMember,
} from './model/comm.data.model';
import { Theme } from './model/theme';

@Injectable({
  providedIn: 'root',
})
export class CommonDataService {
  public themeState$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>({
    darkmode: false,
  });

  public header$: BehaviorSubject<Header> = new BehaviorSubject<Header>({
    appIconLink: '',
    appDesc: '',
    appName: '',
  });

  public home$: BehaviorSubject<Home> = new BehaviorSubject<Home>({
    text: '',
  });

  public footer$: BehaviorSubject<Footer> = new BehaviorSubject<Footer>({
    section1: '',
    section2: '',
    section3: '',
  });

  public mentor$: BehaviorSubject<Mentor> = new BehaviorSubject<Mentor>({
    imgSrc: '',
    heading: '',
    desc: '',
  });

  public teamMembers$: BehaviorSubject<TeamMember[]> = new BehaviorSubject<
    TeamMember[]
  >([]);

  public milestones$: BehaviorSubject<Milestone[]> = new BehaviorSubject<
    Milestone[]
  >([]);

  constructor() {
    const val: CommDataModel = COMMVAL;
    this.header$.next(val.header);
    this.home$.next(val.home);
    this.footer$.next(val.footer);
    this.mentor$.next(val.mentor);
    this.teamMembers$.next(val.teamMembers);
    this.milestones$.next(val.milestones);
  }
}

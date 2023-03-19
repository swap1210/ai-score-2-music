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

  constructor(private http: HttpClient) {
    // this.http.get('../assets/db-data/common-val.json').subscribe({
    //   next: (val: any) => {
    const val = COMMVAL;
    this.header$.next(val['header'] as Header);
    this.home$.next(val['home'] as Home);
    this.footer$.next(val['footer'] as Footer);
    this.mentor$.next(val['mentor'] as Mentor);
    this.teamMembers$.next(val['teamMembers'] as TeamMember[]);
    this.milestones$.next(val['milestones'] as Milestone[]);
    //   },
    // });
  }

  getHeader(): Observable<CommDataModel> {
    return this.http.get(
      'assets/db-data/common-val.json'
    ) as Observable<CommDataModel>;
  }
}

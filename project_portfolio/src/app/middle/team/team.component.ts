import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/service/common-data.service';
import { TeamMember } from 'src/service/model/comm.data.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  public mem2: TeamMember = {
    imgSrc: 'https://avatars.githubusercontent.com/u/16183749?v=4',
    title: 'Swapnil Patel',
    bio: 'Enjoy building in all kind of programs, API and WebAPP. Strong understanding of database and data structure. Always pushing to make code more and more efficient',
    linkedin: 'https://www.linkedin.com/in/swap1210/',
    github: 'https://github.com/swap1210',
  };
  constructor(public commData: CommonDataService) {}

  ngOnInit(): void {}
}

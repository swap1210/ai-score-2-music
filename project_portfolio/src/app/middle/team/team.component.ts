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
  constructor(public commData: CommonDataService) {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { CommonDataService } from 'src/service/common-data.service';
import { TeamMember } from 'src/service/model/comm.data.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  @Input()
  member!: TeamMember;
  constructor(public commData: CommonDataService) {}

  ngOnInit(): void {}
}

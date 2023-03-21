import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/service/common-data.service';

@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.scss'],
})
export class MilestonesComponent implements OnInit {
  displayedColumns: string[] = ['dueDate', 'deliverable', 'status'];
  constructor(public commData: CommonDataService) {}

  ngOnInit(): void {}
}

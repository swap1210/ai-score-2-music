import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/service/common-data.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss'],
})
export class MentorComponent implements OnInit {
  constructor(public comService: CommonDataService) {}

  ngOnInit(): void {}
}

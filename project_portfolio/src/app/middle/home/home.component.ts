import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/service/common-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  heading: string = 'Meet the team';
  constructor(public commData: CommonDataService) {}

  ngOnInit(): void {
    console.log('Hello');
  }
}

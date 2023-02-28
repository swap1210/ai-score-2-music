import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heading: string  = "Meet the team";
  constructor(http: HttpClient) { }

  ngOnInit(): void {
    console.log("Hello");
  }

}

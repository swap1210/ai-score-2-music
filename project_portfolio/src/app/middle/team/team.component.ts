import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  content: any;
  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.http
      .get('https://63fd638f859df29986ce32b8.mockapi.io/api/col')
      .subscribe({
        next: (val) => {
          console.log('Got data ', val);
          this.content = val;
        },
        error: (val) => {
          console.log('error');
        },
      });
    console.log('Hello');
  }
}

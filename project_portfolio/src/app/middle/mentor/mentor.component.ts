import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/service/common-data.service';
import { CommDataModel } from 'src/service/model/comm.data.model';
import { Mentor } from 'src/service/model/mentor';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent implements OnInit {
dat:Mentor={
  imgSrc: '',
  heading: 'Gary D.Boetticher, Ph.D.',
  desc: ''
};
  constructor(public comService: CommonDataService) { }

  ngOnInit(): void {
    this.comService.getRaw().subscribe({
      next: (val:CommDataModel) => {
      //  console.log(val['mentor']);
       this.dat = val.mentor;
      }
    })
  }

}

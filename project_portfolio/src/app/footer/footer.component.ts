import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/service/common-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(public commData: CommonDataService) {}

  ngOnInit(): void {}
}

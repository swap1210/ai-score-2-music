import { Component, Input, OnInit } from '@angular/core';
import { CommonDataService } from 'src/service/common-data.service';
import { Footer } from 'src/service/model/comm.data.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input()
  footerData!: Footer;
  constructor() {}

  ngOnInit(): void {}
}

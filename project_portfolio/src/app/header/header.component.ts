import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/service/common-data.service';
import { Header } from 'src/service/model/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  header: Header = {
    appIconLink: '',
    appDesc: '',
    appName: '',
  };

  constructor(public commData: CommonDataService) {}

  ngOnInit(): void {
    this.commData.getHeader().subscribe({
      next: (val) => {
        this.header = val.header;
      },
    });
  }

  switchTheme = (): void => {
    //send new value to app component
    this.commData.themeState$.next({
      darkmode: !this.commData.themeState$.getValue().darkmode,
    });
  };
}

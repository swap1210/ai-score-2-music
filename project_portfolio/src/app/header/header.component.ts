import { Component, Input, OnInit } from '@angular/core';
import { CommonDataService } from 'src/service/common-data.service';
import { Theme } from 'src/service/model/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  theme!: Theme;
  constructor(public commData: CommonDataService) {}

  ngOnInit(): void {}

  switchTheme = (): void => {
    //send new value to app component
    this.commData.themeState$.next({
      darkmode: !this.commData.themeState$.getValue().darkmode,
    });
  };
}

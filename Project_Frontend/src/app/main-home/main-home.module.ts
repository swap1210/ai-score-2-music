import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainHomeRoutingModule } from './main-home-routing.module';
import { MainHomeComponent } from './main-home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HistoryPanelComponent } from './history-panel/history-panel.component';


@NgModule({
  declarations: [
    MainHomeComponent,
    HeaderComponent,
    FooterComponent,
    HistoryPanelComponent
  ],
  imports: [
    CommonModule,
    MainHomeRoutingModule
  ]
})
export class MainHomeModule { }

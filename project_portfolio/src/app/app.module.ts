import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './middle/app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonDataService } from 'src/service/common-data.service';
import { HttpClientModule } from '@angular/common/http';
import { UsedMaterialModule } from './used-material/used-material.module';
import { HomeComponent } from './middle/home/home.component';
import { HeaderComponent } from './header/header.component';
import { TeamComponent } from './middle/team/team.component';
import { MentorComponent } from './middle/mentor/mentor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TeamComponent,
    MentorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    UsedMaterialModule,
    CommonModule
  ],
  providers: [CommonDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

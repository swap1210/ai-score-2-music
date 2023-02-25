import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './middle/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './middle/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonDataService } from 'src/service/common-data.service';
import { HttpClientModule } from '@angular/common/http';
import { UsedMaterialModule } from './used-material/used-material.module';
import { HomeComponent } from './middle/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    UsedMaterialModule,
  ],
  providers: [CommonDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

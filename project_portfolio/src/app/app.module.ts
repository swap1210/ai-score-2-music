import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {
  AppRoutingModule,
  RoutingComponents,
} from './middle/app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonDataService } from 'src/service/common-data.service';
import { HttpClientModule } from '@angular/common/http';
import { UsedMaterialModule } from './used-material/used-material.module';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './middle/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RoutingComponents,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    UsedMaterialModule,
    CommonModule,
  ],
  providers: [CommonDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

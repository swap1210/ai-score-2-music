import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './main-home/home/home.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SafeUrlPipe } from './common/safe-url.pipe';
import { MessagesComponent } from './messages/messages.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './loading/loading.service';
import { MessagesService } from './messages/messages.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		SafeUrlPipe,
		MessagesComponent,
		LoadingComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		ReactiveFormsModule,
		MatProgressSpinnerModule,
		MatCardModule,
		MatFormFieldModule,
		RouterModule,
	],
	providers: [LoadingService, MessagesService],
	bootstrap: [AppComponent],
})
export class AppModule {}

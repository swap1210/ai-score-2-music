import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { LoginComponent } from './login/login.component';
import { SafeUrlPipe } from './common/safe-url.pipe';
import { MessagesComponent } from './messages/messages.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './loading/loading.service';
import { MessagesService } from './messages/messages.service';
import { MySelectComponent } from './my-select/my-select.component';
import { EditorComponent } from './editor/editor.component';
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		SafeUrlPipe,
		MessagesComponent,
		LoadingComponent,
		MySelectComponent,
		EditorComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		MatMenuModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatTabsModule,
		MatSidenavModule,
		MatListModule,
		MatToolbarModule,
		MatInputModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatProgressSpinnerModule,
		MatDialogModule,
		MatGridListModule,
		AppRoutingModule,
		MatSelectModule,
		MatDatepickerModule,
		MatMomentDateModule,
		ReactiveFormsModule,
	],
	providers: [LoadingService, MessagesService],
	bootstrap: [AppComponent],
})
export class AppModule {}

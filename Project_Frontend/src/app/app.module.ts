import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { SafeUrlPipe } from "./common/safe-url.pipe";
import { MessagesComponent } from "./messages/messages.component";
import { LoadingComponent } from "./loading/loading.component";
import { LoadingService } from "./loading/loading.service";
import { MessagesService } from "./messages/messages.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { EditorComponent } from "./editor/editor.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SafeUrlPipe,
    MessagesComponent,
    LoadingComponent,
    EditorComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [LoadingService, MessagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}

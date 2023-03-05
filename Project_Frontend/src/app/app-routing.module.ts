import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditorComponent } from "./main-home/home/editor/editor.component";
import { HomeComponent } from "./main-home/home/home.component";
import { LoginComponent } from "./login/login.component";
import { FlatioEditorComponent } from "./flatio-editor/flatio-editor.component";

const routes: Routes = [
  {
    path: "editor",
    component: FlatioEditorComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "home",
    loadChildren: () =>
      import("./main-home/main-home.module").then((m) => m.MainHomeModule),
  },
  {
    path: "**",
    redirectTo: "/home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

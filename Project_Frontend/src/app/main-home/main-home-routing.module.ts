import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FlatioEditorComponent } from "../flatio-editor/flatio-editor.component";
import { EditorComponent } from "./home/editor/editor.component";
import { HomeComponent } from "./home/home.component";
import { MainHomeComponent } from "./main-home.component";
import { PromptGenComponent } from "./prompt-gen/prompt-gen.component";

const routes: Routes = [
  {
    path: "",
    component: MainHomeComponent,
    children: [
      {
        path: "prompt-gen-old",
        component: HomeComponent,
      },
      {
        path: "prompt-gen",
        component: PromptGenComponent,
      },
      {
        path: "editor",
        component: FlatioEditorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainHomeRoutingModule {}

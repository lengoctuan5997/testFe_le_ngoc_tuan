import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './share/component/content-layout/content-layout.component';
import { rout } from "./share/routes/routes";

const routes: Routes = [
  { path: '', component: ContentLayoutComponent, children: rout}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

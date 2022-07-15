import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page.component';

const route: Routes = [{ path: '', component: HomePageComponent }];
@NgModule({
  imports: [
    RouterModule.forChild(route),
    CommonModule
  ],
  exports: [HomePageComponent],
  declarations: [HomePageComponent],
  providers: [],
})
export class HomePageModule {}

import { Routes } from "@angular/router";

export const rout: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../main/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
];

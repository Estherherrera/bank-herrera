import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPagesComponent } from './about-pages/about-pages.component';
import { HomePagesComponent } from './home-pages/home-pages.component';

const routes: Routes = [
  {
    path:'',
    component: HomePagesComponent
  },
  {
    path: 'about',
    component: AboutPagesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

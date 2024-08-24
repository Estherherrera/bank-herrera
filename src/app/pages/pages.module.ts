import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutPagesComponent } from './about-pages/about-pages.component';
import { HomePagesComponent } from './home-pages/home-pages.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AboutPagesComponent,
    HomePagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule
  ]
})
export class PagesModule { }

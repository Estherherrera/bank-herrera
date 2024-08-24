import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BelowbarComponent } from './components/belowbar/belowbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    BelowbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    BelowbarComponent
  ]
})
export class SharedModule { }

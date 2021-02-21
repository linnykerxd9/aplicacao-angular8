
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { NavBarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    NavBarComponent,
    Error404Component
  ],
  imports: [
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }

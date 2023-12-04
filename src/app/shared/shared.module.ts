import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SideMenuComponent
  ],
<<<<<<< HEAD
  exports:[
=======
  exports: [
>>>>>>> 0c125c6e3f5ba7bdf587279470ca6fbd6a36c333
    SideMenuComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    RouterModule,
=======
    RouterModule
>>>>>>> 0c125c6e3f5ba7bdf587279470ca6fbd6a36c333
  ]
})
export class SharedModule { }

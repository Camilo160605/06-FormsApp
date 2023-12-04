import { Component } from '@angular/core';

<<<<<<< HEAD
interface menuItem {
  title : string;
  route : string ;
}
=======
interface MenuItem{
  title: string;
  route: string;
} 
>>>>>>> 0c125c6e3f5ba7bdf587279470ca6fbd6a36c333

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent {

<<<<<<< HEAD
  public reactiveMenu : menuItem[] = [
    {title: 'Basicos', route:'./reactive/basic'},
    {title: 'Dínamicos', route:'./reactive/dynamic'},
    {title: 'Switches', route:'./reactive/switches'},
  ]
  public authMenu : menuItem[] = [
    {title: 'Registro', route:'./auth'}, 
=======
  public reactiveMenu : MenuItem[] = [
    {title: 'Basicos', route: './reactive/basic'},
    {title: 'Dinamicos', route: './reactive/dynamic'},
    {title: 'Switches', route: './reactive/switch'}
  ]

  public authMenu : MenuItem[] = [
    {title: 'Registro', route: './auth'},
>>>>>>> 0c125c6e3f5ba7bdf587279470ca6fbd6a36c333
  ]

}

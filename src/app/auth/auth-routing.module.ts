import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
<<<<<<< HEAD
    path: '',
    children: [
        { path: 'sing-up', component: RegisterPageComponent },
        { path: '**', redirectTo: 'sing-up' }
=======
    path:'',
    children : [
      { path: 'register', component: RegisterPageComponent },
      { path: '**', redirectTo: 'register' }
>>>>>>> 0c125c6e3f5ba7bdf587279470ca6fbd6a36c333
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

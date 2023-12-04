import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reactive',
<<<<<<< HEAD
    loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'**',
    redirectTo: 'reactive'
  }

=======
    loadChildren : ()=>import('./reactive/reactive.module').then(m => m.ReactiveModule)
  },
  {
    path: 'auth',
    loadChildren : ()=>import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
     path: '**', redirectTo:'reactive'
  }
>>>>>>> 0c125c6e3f5ba7bdf587279470ca6fbd6a36c333
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

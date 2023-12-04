import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
<<<<<<< HEAD
=======
import { ReactiveModule } from './reactive/reactive.module';
>>>>>>> 0c125c6e3f5ba7bdf587279470ca6fbd6a36c333

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
<<<<<<< HEAD
=======
    ReactiveModule
>>>>>>> 0c125c6e3f5ba7bdf587279470ca6fbd6a36c333
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

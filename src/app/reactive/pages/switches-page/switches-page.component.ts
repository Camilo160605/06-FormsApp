import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent {


  public myForm : FormGroup = this.fb.group({
    gender: ['m', Validators.required],
    wantNotifications: [true , Validators.required],
    termAndConditions: [false, Validators.requiredTrue ],
   });

  constructor( private fb : FormBuilder ){}

  
  onSave(){

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return 
    }

  }

}

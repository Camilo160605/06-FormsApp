import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validator.service';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent {


  public myForm : FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true , Validators.required],
    termAndConditions: [false, Validators.requiredTrue ],
   });

  constructor( 
    private fb : FormBuilder,
    private validatorService : ValidatorsService
    ){}

  isValidField(field : string ) {
    return this.validatorService.isValidField(this.myForm, field)
  }

  getFieldError( field : string ) : string | null {

    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for ( const key of Object.keys(errors) ) {
        switch( key ){
          case 'required' :
            return 'Este campo es requerido'
          case 'minlength' :
            return `Mínimo ${ errors['minlength'].requiredLength} caracteres`
        }
        
    }
    return null;
  }

  onSave(){

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return 
    }
    console.log(this.myForm.value);
  }

}

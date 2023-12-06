import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validator.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm : FormGroup = this.fb.group({
    name : ['',[Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    // email : ['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)],[new EmailValidator]],
    email : ['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)],[this.emailValidator]],
    username : ['',[Validators.required, this.validatorService.cantBeStrider]],
    password : ['',[Validators.required, Validators.minLength(6)]],
    password2 : ['',[Validators.required]],
  })

  constructor( 
    private fb : FormBuilder,
    private validatorService : ValidatorsService,
    private emailValidator : EmailValidator,
    ){}

  isValidField( field : string ){
    return this.validatorService.isValidField( this.myForm, field )
  }

  onSubmit() : void {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
    this.myForm.reset();
  }

}

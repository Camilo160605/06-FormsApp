import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';


@Injectable({providedIn: 'root'})


export class EmailValidator implements AsyncValidator {


    validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {

        const email = control.value
        console.log({email});

        const httpCallObservable = new Observable<ValidationErrors | null>(( subscriber )=>{

            console.log({email});
            if ( email === 'camilo@google.com' ){
                subscriber.next( { emailTaken : true } )
            }            

        })

        return httpCallObservable;

    }

}

// Maneras de hacer la validacion de forma asincronca

// validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {

//     const email = control.value
//     console.log({email});

//     return of({
//         emailTaken : true
//     }).pipe(
//         delay(2000),
//     )
// }

// return this.http.get<any[]>(`http://localhost:4200/users?q=${email}`)
// .pipe(
//     // delay(3000)
//     map( resp => {
//         return (resp.length === 0)
//         ? null
//         : {emailIsTaken : true}
//     })
// )
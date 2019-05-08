/*
  Vipul Dhaigude        2018-01-25    Created
*/


import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[TCMErrorStateMatcher]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TCMErrorStateMatcher,
      multi: true
    }
  ]
})

export class TCMErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return (control && control.invalid && (control.dirty || control.touched));
  }
}

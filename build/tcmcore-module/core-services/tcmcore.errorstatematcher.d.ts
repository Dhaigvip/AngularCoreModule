import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
export declare class TCMErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
}

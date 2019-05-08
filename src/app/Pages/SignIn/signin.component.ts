import { Component, ViewContainerRef } from '@angular/core';
import { ModuleBaseComponent, ClientRequestDTO } from '../../../library/index';
import { TranslateService } from 'ng2-translate';
// import { ToastsManager } from 'ng2-toastr';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ServiceLocator } from '../../app.serviceLocator';


@Component({
  selector: 'signin-form',
  templateUrl: './signin.component.html',
})
export class SignInComponent extends ModuleBaseComponent {
  
  constructor() {
    super("SigninForm", "TestModule", ServiceLocator);    
  }
  
  CheckIfDirty() {
    return false;
  }
  Save() {

  }


  ngOnInit() {
    super.ngOnInit();
  }
}

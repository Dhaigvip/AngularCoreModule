import { Component, ViewContainerRef } from '@angular/core';
import { ModuleBaseComponent, ClientRequestDTO } from '../../../library/index';
import { TranslateService } from 'ng2-translate';
// import { ToastsManager } from 'ng2-toastr';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ServiceLocator } from '../../app.serviceLocator';


@Component({
  selector: 'error505-form',
  templateUrl: './error505.component.html',
})
export class Error505Component extends ModuleBaseComponent {
  
  constructor() {
    super("Error505Form", "TestModule", ServiceLocator);    
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

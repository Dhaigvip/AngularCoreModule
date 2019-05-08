import { Component, ViewContainerRef } from '@angular/core';
import { ModuleBaseComponent, ClientRequestDTO } from '../../../library/index';
import { TranslateService } from 'ng2-translate';
// import { ToastsManager } from 'ng2-toastr';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ServiceLocator } from '../../app.serviceLocator';


@Component({
  selector: 'listgroup-form',
  templateUrl: './listgroup.component.html',
})
export class ListgroupComponent extends ModuleBaseComponent {
  
  constructor() {
    super("ListgroupComponent",  "TestModule", ServiceLocator);    
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

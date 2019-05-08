import { Component, ViewContainerRef, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  ModuleBaseComponent, ClientRequestDTO, AutoCompleteComponent,
  INavigationService, SplitComponent, SplitAreaDirective,
  ConfirmComponent, AutoHeightDirective, ErrorPopupComponent,
  ITCMWebSocketService, CoreState, getSelectedInboxItem, SearchRepository, IDataService, AutoCompleteOptions, tcmnumber, InputConverter, NumberConverter
} from '../../library/index';
import { TranslateService } from 'ng2-translate';
// import { ToastsManager } from 'ng2-toastr';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute, NavigationExtras, Params, ParamMap } from '@angular/router';

import { ServiceLocator } from '../app.serviceLocator';
import { TestService } from './test.sservice';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MatDialog, MatInput } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

declare var $: any;


@Component({
  selector: 'test3-form',
  templateUrl: './test3.html',
  encapsulation: ViewEncapsulation.None
})
export class Test3 extends ModuleBaseComponent {

  obj: any = { Test: 'Test' };

  constructor(
    public dialog: MatDialog
    , private ts: TestService,
  ) {
    super("Test3Form", "OrderModule", ServiceLocator);

  }


  ExternalGet = () => {
    this.ts.ExternalGet().subscribe(result => {
      this.obj = result;
    });
  }
  ExternalGetById = (id) => {
    this.ts.ExternalGetById(id).subscribe(result => {
      this.obj = result;
    });
  }
  ExternalPost = () => {
    var input = {
      id: 3, FirstName: 'Vipul', LastName: 'Dhaigude', Contacts: [
        { ContactNumber: '1234' },
        { ContactNumber: '7896' }
      ]
    }
    this.ts.ExternalPost(input).subscribe(resullt => {
      console.log("Extrenal post done");
    });
  }

  CheckIfDirty() {
    return true;
  }
  Save() {
    console.log("Save called from SnackBar");
  }




  ngOnInit() {

  }
  saveForm() {

  }
}

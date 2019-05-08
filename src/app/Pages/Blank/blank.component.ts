import { Component, ViewContainerRef } from '@angular/core';
import { ModuleBaseComponent, ClientRequestDTO } from '../../../library/index';
import { TranslateService } from 'ng2-translate';
// import { ToastsManager } from 'ng2-toastr';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute, NavigationEnd, ParamMap } from '@angular/router';
import { ServiceLocator } from '../../app.serviceLocator';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'blank-form',
  templateUrl: './blank.component.html',
})
export class BlankComponent extends ModuleBaseComponent {


  constructor() {
    super("BlankForm", "TestModule", ServiceLocator);
  }
  CheckIfDirty() {
    return false;
  }
  Save() {

  }

  ngOnInit() {
    super.ngOnInit();
    //How to use snapshot, alternative to observale routing.
    let data = this.route.snapshot.queryParamMap.get('data');
    this.logObject('Data accessed from snapshot -->', JSON.parse(data));

     //Access static data...
    var d = this.route.snapshot.data;
    this.logObject('Staic data fetched from route', d);
  

    // Capture the session ID if available
    var sessionId = this.route
      .queryParamMap
      .map(params => params.get('session_id') || 'None');

    // Capture the fragment if available
    var token = this.route
      .fragment
      .map(fragment => fragment || 'None');

    this.logObject('extras fragments', sessionId);
    this.logObject('extras fragments', token);
    //Observable way
    this.route.queryParamMap.switchMap((params: ParamMap) => {
      return Observable.of(JSON.parse(params.get('data')));
    }
    ).subscribe(result => {
      this.logObject('Data accessed from queryParamMap -->', result);
    });
  }
}

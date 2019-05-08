import { Component, ViewContainerRef, Inject, ViewEncapsulation } from '@angular/core';
import {
  ModuleBaseComponent, ClientRequestDTO,
  INavigationService, SplitComponent, SplitAreaDirective,
  ConfirmComponent, AutoHeightDirective, ErrorPopupComponent, ITCMWebSocketService
} from '../../library/index';
import { TranslateService } from 'ng2-translate';
// import { ToastsManager } from 'ng2-toastr';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute, NavigationExtras, Params, ParamMap } from '@angular/router';

import { ServiceLocator } from '../app.serviceLocator';
import { TestService } from './test.sservice';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';

declare var $: any;
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'test-form',
  templateUrl: './test.component.html',
  styleUrls: ['test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent extends ModuleBaseComponent {
  pages: any = [];
  model: any;
  selectedCity: Object;
  cities: any = [];
  TransService: string = ''
  Customer: any;
  errors: any;
  obj: any;
  static counter: number = 0;

  router: Router;
  route: ActivatedRoute;
  //toastr: ToastsManager;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  //counter = 0;
  constructor(
    public dialog: MatDialog
    , private ts: TestService,

    @Inject('INavigationService') navigate: INavigationService
    , @Inject('ITCMWebSocketService') private messageService: ITCMWebSocketService
    //, private shared: CoreShareService
  ) {
    super("TestForm", "OrderModule", ServiceLocator);

    this.logService.error('Client error logged to server');
    //messageService.newTCMMessage.subscribe((m) => {
    //  console.log(m);
    //})
    //this.toastr = ServiceLocator.injector.get(ToastsManager);
    //this.toastr.setRootViewContainerRef(vcr);

    this.router = ServiceLocator.injector.get(Router);
    this.route = ServiceLocator.injector.get(ActivatedRoute);

    //this.route.queryParams
    //  .filter(params => 'location' in params)
    //  .map(params => params.location)
    //  .distinctUntilChanged()
    //  .subscribe(lc => {
    //    if (lc && lc.includes("inbox")) {
    //      this.obj = this.shared.GetInboxData()
    //      console.log(this.shared.GetInboxData());
    //    }
    //  });

  }


  sendMessage = () => {
    //var fname = "vipul" + this.counter;
    //var lname = "dhaigude" + this.counter;
    //this.counter++;
    TestComponent.counter += 1;

    this.messageService.SendMessage({
      "OriginalOrder": {
        "Holder":
        {
          "Identity":
          {
            "FirstName": "Vipul" + TestComponent.counter.toString(),
            "LastName": "Dhaigude",
          }
        }
      }, "NewOrder": {
        "Holder":
        {
          "Identity":
          {
            "FirstName": "Vipul" + TestComponent.counter.toString(),
            "LastName": "Dhaigude",
          }
        }
      }
    }, "test", TestComponent.counter.toString()).subscribe(result => {
      console.log(result);
    });

  }


  CheckIfDirty() {
    return true;
  }
  Save() {
    console.log("Save called from SnackBar");
  }
  ShowToast() {
    this.NotifySuccess('You havew done it!');
    this.NotifyErrorMessage("Something very very bad happened!");
    this.NotifyWarning("Beware of warewolves");
    this.NotifyInfo("This is for your information");
  }
  Confirm() {
    let dialogRef = this.dialog.open(ConfirmComponent, {
      //width: '250px',
      disableClose: false,

      data: { message: "You have unsaved changes. Do you want to save?" }
    });
    dialogRef.afterClosed().subscribe(x => {
      console.log(x);
    });
  }

  ExecuteJS() {
    var name = "Test";

    var width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    var height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
    var heightwidth = 'width=' + $(window).height(); + ',height=' + height;

    var s = 'http://localhost:4201/nlux/createPIT?data={"holderid":"2880", "cashaccno":"B288033252", "curid":"JPY", "cashacctype":"SWT", "PITCode":"PIT1" }';
    var s1 = "window.open('" + s + "'," + "'" + name + "'" + ", 'scrollbars=1,resizable=1,left=0,top=0," + heightwidth + "');";


    eval(s1);
  }


  ShowErrorDialog() {
    this.ts.Error().subscribe((result) => {
      if (result.Success == false && result.Errors.length > 0) {
        this.errors = result.Errors;

        let dialogRef = this.dialog.open(ErrorPopupComponent, {
          //width: '250px',
          data: this.errors
        });
        dialogRef.afterClosed().subscribe(x => {
          console.log(x);
        });
      }
    });
  }

  GenerateErrors() {
    this.ts.Error().subscribe((result) => {
      if (result.Success == false && result.Errors.length > 0) {
        this.errors = result.Errors;
      }
      console.log(result);
    });

  }

  OnMenuToggled() {
    console.log("Dropdown menu toggled");
  }
  TestToast() {
    // this.NotifySuccess('You are awesome!', 'Success!');
    //this.NotifyErrorMessage('You messed up!', 'Error', { toastLife: 20000, positionClass: 'toast-top-full-width' });
    // this.NotifyErrorMessage(Message);
  }
  onItemClicked($event) {
    console.log("onItemClicked");
    console.log($event);
  }
  onItemSelected($event) {
    console.log("onItemSelected");
    console.log($event);
  }
  onShow() {
    console.log("onShow");
  }
  onHide() {
    console.log("onHide");
  }

  NavigateWithQueryParam() {
    this.navigation.NavigateWithQueryParams("blank", { id: 10, name: 'Vipul' });
  }
  NavigateWithMandatoryParam() {
    this.navigation.NavigateWithMandatoryParams("blank", 10);
  }
  NavigateWithExtras() {
    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': 1234 },
      fragment: 'anchor'
    };
    this.navigation.NavigateWithMandatoryParams("blank", navigationExtras);
  }
  NavigateWithData() {

  }
  NavigateWithFragment() {

  }



  TestCache() {
    this.ts.TestCache().subscribe((result) => {
      if (result.Success == false && result.Errors.length > 0) {
        this.NotifyError(result.Errors);
      }
      console.log(result);
    });
  }

  TestCache5mins() {
    this.ts.TestCache5mins().subscribe((result) => {
      if (result.Success == false && result.Errors.length > 0) {
        this.NotifyError(result.Errors);
      }
      console.log(result);
    });
  }

  OnError() {
    this.ts.Error().subscribe((result) => {
      if (result.Success == false && result.Errors.length > 0) {
        this.NotifyError(result.Errors);
      }
      console.log(result);
    });
  }

  OnException() {
    return this.ts.Exception().subscribe((result) => {
      if (result.Success == false && result.Errors.length > 0) {
        this.NotifyError(result.Errors);
      }
      console.log(result);
    });
  }



  ngOnInit() {
    //super.ngOnInit();
    this.TransService = this.translate.instant('Acc_Bal_Overview');

    this.logService.error('Logged to server');

    this.Customer = {
      Name: 'MyName',
      ShortName: 'ShortName',
      LegalName: 'LegalName',
      Isin: '1234',
      ExternalId: '2345',
      ExternalIdSource: '1234',
      ShareClassId: 'something',
      UmbrellaName: 'UmbrellaName',
      CountryCode: 'SE', //FI
      selectedDate: new Date(),
      Time: ''
    }

  }
  saveForm() {
    console.log(this.Customer);
  }
}

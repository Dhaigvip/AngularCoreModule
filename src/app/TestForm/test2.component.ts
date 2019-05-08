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
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'test-form',
  templateUrl: './test2.component.html',
  styleUrls: ['test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Test2Component extends ModuleBaseComponent {

  pages: any = [];
  model: any;
  selectedCity: Object;
  cities: any = [];
  TransService: string = ''
  Customer = {};
  obj: any
  testObj: any = null;
  Fund = null;
  Fund2 = null;
  Account = null;
  router: Router;
  route: ActivatedRoute;
  //toastr: ToastsManager;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  counter = 0;
  private acc_SearchOptions: AutoCompleteOptions = new AutoCompleteOptions();
  private fund_SearchOptions: AutoCompleteOptions = new AutoCompleteOptions();

  @ViewChild('t') t: AutoCompleteComponent;
  constructor(@Inject('IDataService') private dataService: IDataService,
    private tcmnumber: tcmnumber
  ) {

    super('test2', 'Core', ServiceLocator);
    this.store.pipe(select(getSelectedInboxItem)).subscribe(x => {
      if (x)
        this.Customer = x.MessageObject.Message;
    });
  }

  onSubmit(f) {
    console.log('Form submitted');
  }


  //If you received data via inbox then do not override in ngOnInit.
  //ngOnInit will be called every time view is navigated.
  //GetInboxData(inboxData: any) {
  //  this.Customer = inboxData;
  //}
  ngOnInit() {
    this.testObj = {
      Identification: {
        nulltime: null,
        time24: '14:30:00',
        time12: '02:20:00',
        nullobj: null,
        twoDecimals: 10444.696969,
        Age: 10444467474764.696969,
        nullobj2: null,
        twoDecimals2: 10444.696969,
        Age2: 10444467474764.696969,
        FirstName: 'vipul',
        InbuildDate: Date.now(),
        InbuildDatelocal: Date.now(),
        materialDate1: '2018-04-01',
        materialDate2: '2018-04-01',
        time1: "15:30",
        LastName: 'Dhaigude',
        City: 'BOND',
        Ok: false
      }
    };
    this.acc_SearchOptions = {
      id: "accSearch",
      disabled: true,
      required: true,
      helpText: this.translate.instant("acc_search_help"),
      label: this.translate.instant("account"),
      displayProp: "AccountNumber", hintLabel: this.translate.instant("accountnumber"), hintProp: "AccountNumber",
      tooltipProp: "AccountNumber", searchCriteria: [{
        SearchFieldId: 'AccountNumber',
        SearchOperatorId: 'BEGINS',
      }]
    }
    this.fund_SearchOptions = {
      id: "fundSearch",
      required: false,
      helpText: this.translate.instant("fund_search_help"),
      label: this.translate.instant("fundsearch"),
      hintLabel: 'Isin, shortName',
      hintProp: "Identity.Isin,Identity.FundShortName",
      displayProp: "Identity.FundName,Identity.FundShortName",
      tooltipProp: "Identity.FundName", searchCriteria: [{
        SearchFieldId: 'FundName',
        SearchOperatorId: 'BEGINS',
      },
      {
        SearchFieldId: 'FundShortName',
        SearchOperatorId: 'BEGINS',
      }
      ]
    }

    setTimeout(() => {
      this.Account = { "AccountId": 1, "AccountNumber": "1000000028", "AccountNumberType": "PROP", "AccountTypeCode": "DEP", "BaseCurrency": "SEK", "IsActive": true, "CreatedDate": "2018-11-23T09:07:52.84", "RegUser": "AP\\shipadny", "RegDate": "2018-11-23T09:07:52.84" };
    }, 5000)

    setTimeout(() => {
      this.Account = null;
    }, 10000)
  }

  ResetAutoComplete = () => {
    this.t.ResetControl();
  }

  searchAccounts = (repository) => {
    return this.AccountOverviewFind(repository).map((result) => {
      this.log('Get Instruments');
      return result;
    });
  }
  searchFunds = (repository) => {
    return this.FundOverviewFind(repository).map((result) => {
      this.log('Get Instruments');
      return result;
    });
  }
  public FundOverviewFind = (searchRepository: SearchRepository): Observable<any> => {
    var request = new ClientRequestDTO();
    request.MetaData.Action = "FindAsync";
    request.Data = searchRepository;
    return this.dataService.Post("Fund", request, null);
  }
  public AccountOverviewFind = (searchRepository: SearchRepository): Observable<any> => {
    var request = new ClientRequestDTO();
    request.MetaData.Action = "AccountOverviewFindAsync";
    request.Data = searchRepository;
    return this.dataService.Post("Cost", request, null);
  }
  save2() {
    var x = 0;
  }

  CheckIfDirty(): boolean {
    return false;
  }
  Save(): void {
    throw new Error("Method not implemented.");
  }
}
export class Identification {
  nulltime: number;
  time24: string;
  time12: string;

  nullobj: number;
 
  twoDecimals: number;
  
  Age: number;
  nullobj2: number;
  twoDecimals2: number;
  Age2: number;
  FirstName: string;
  InbuildDate: Date;
  InbuildDatelocal: Date;
  materialDate1: string;
  materialDate2: string;
  time1: string;
  LastName: string;
  City: string;
  Ok: boolean;

}

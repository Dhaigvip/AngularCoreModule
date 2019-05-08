import { Component, ViewContainerRef, Inject } from '@angular/core';
import { ModuleBaseComponent, ClientRequestDTO } from '../../../library/index';
import { TranslateService } from 'ng2-translate';
import { TranslatePipe } from 'ng2-translate';
// import { ToastsManager } from 'ng2-toastr';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ServiceLocator } from '../../app.serviceLocator';
import { IThemeService, IUserSettingsService } from '../../../library/index';


@Component({
  selector: 'formlayout-form',
  templateUrl: './formlayout.component.html',
})
export class FormlayoutComponent {
  theme;
  verticleRoutes = [
    { id: 'accordian', text: 'accordian' },
    { id: 'buttons', text: 'buttons' },
    { id: 'checkRadios', text: 'checkRadios' },
    { id: 'updates', text: 'updates' },
    { id: 'Settlement_Details', text: 'Settlement Details' },
    { id: 'FundIdentifiers', text: 'Fund Identifiers' }
  ];
  constructor(
    private router: Router
    , @Inject('IThemeService') private themeService: IThemeService
    , @Inject('IUserSettingsService') private userSettings: IUserSettingsService) {

  }
  ngAfterViewInit() {

    let globalSettings = this.userSettings.GetUserSettingsForPage("Global");
    (globalSettings) ? this.theme = globalSettings.PageData.filter((ctrl) => ctrl.ControlId === 'Theme')[0].ControlData : this.theme = 'primary';

  }
  ngOnInit() {
    this.themeService.theme.subscribe((val) => {
      this.theme = val;
    })
  }
}

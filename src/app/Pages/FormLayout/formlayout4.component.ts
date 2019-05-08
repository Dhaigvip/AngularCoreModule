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
  selector: 'formlayout2-form',
  templateUrl: './formlayout4.component.html',
})
export class Formlayout4Component {
  theme;
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

/*
  Vipul Dhaigude        2017-01-01    Created
*/

import { Component, OnInit, Input, Inject } from '@angular/core';
import { TranslatePipe } from 'ng2-translate';
//import { UserSettingsService } from '../../core-services/tcmcore.usersettings.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PageSettings } from '../../tcmcore-objects/tcmcore.domain.objects';
//import { ThemeService } from '../../core-services/tcmcore.theme.service';
import { IUserSettingsService, IThemeService } from '../../tcmcore-objects/tcmcore.domain.interfaces';
@Component({
  moduleId: module.id,
  selector: 'settings-cmp',
  templateUrl: 'settings.component.html'
})

export class SettingsComponent implements OnInit {
  globalSettings: PageSettings = null;
  selectedLang: string;
  selectedTheme: string;

  constructor(
    @Inject('IThemeService') private themeService: IThemeService
    , @Inject('IUserSettingsService') private userSettings: IUserSettingsService
    , public dialogRef: MatDialogRef<SettingsComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  changeLanguage(event): void {
    this.globalSettings.PageData.filter((ctrl => ctrl.ControlId === 'Lang'))[0].ControlData = this.selectedLang;

    this.userSettings.UpdatePageSettings("Global", this.globalSettings);
  }
  changeTheme(event): void {
    this.globalSettings.PageData.filter((ctrl => ctrl.ControlId === 'Theme'))[0].ControlData = event.value;
    this.userSettings.UpdatePageSettings("Global", this.globalSettings);
    this.themeService.change(event.value);
  }
  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

    this.selectedLang = 'sv-SE';
    this.selectedTheme = 'primary'

    this.globalSettings = this.userSettings.GetUserSettingsForPage("Global");
    if (!this.globalSettings) {
      this.globalSettings = new PageSettings();
      this.globalSettings.PageId = 'Global';
    }
    let lang = this.globalSettings.PageData.filter((ctrl) => ctrl.ControlId === 'Lang')[0];

    if (lang) { this.selectedLang = lang.ControlData } else {
      this.globalSettings.PageData.push({ ControlId: 'Lang', ControlData: this.selectedLang })
      this.userSettings.UpdatePageSettings("Global", this.globalSettings);
    };

    let theme = this.globalSettings.PageData.filter((ctrl) => ctrl.ControlId === 'Theme')[0];

    if (theme) { this.selectedTheme = theme.ControlData }
    else {
      this.globalSettings.PageData.push({ ControlId: 'Theme', ControlData: this.selectedTheme });
      this.userSettings.UpdatePageSettings("Global", this.globalSettings);
    }
  }
}

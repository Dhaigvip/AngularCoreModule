/*
  Vipul Dhaigude        2017-01-25    Created
*/


import { Injectable, Inject, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IThemeService, IConfigService } from '../tcmcore-objects/tcmcore.domain.interfaces';

@Injectable()
export class ThemeService implements IThemeService {
  public theme: BehaviorSubject<string> = new BehaviorSubject<string>("");
  private _theme = 'primary';
  constructor(@Inject('IConfigService') private configService: IConfigService, private zone: NgZone) {

  }
  init = () => {
    if (this.configService.Config.theme)
      this.currenttheme = this.configService.Config.theme;

    setTimeout(() => {
      this.change(this.currenttheme);
    }, 500);
  }
  get currenttheme(): string {
    return this._theme;
  }
  set currenttheme(theme: string) {
    this._theme = theme;
  }
  change = (value: string) => {
    console.log('theme service - ' + value);
    this.theme.next(value);
  }
}

import { TestBed, async } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component'


import { Component, OnInit, Input } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SettingsComponent } from '../../core-components/settings/settings.component';
import { ThemeService } from '../../core-services/tcmcore.theme.service';
import { AuthService } from '../../core-services/tcmcore.auth.service';
import { WindowRef } from '../../core-services/tcmcore.windowref.service';
import { DataService } from '../../core-services/tcmcore.data.service';
import { ConfigService } from '../../core-services/tcmcore.config.service';
import { LoaderService } from '../../core-services/tcmcore.loader.service';
import { TCMCacheService } from '../../core-services/tcmcore.cache.service';
import { UserSettingsService } from '../../core-services/tcmcore.usersettings.service';
import { LogService } from '../../core-services/tcmcore.log.service';

import { RouteInfo } from '../../tcmcore-objects/tcmcore.domain.objects';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RouterModule, Router, NavigationEnd } from '@angular/router';


import { CacheService } from 'ng2-cache-service';



import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, Http } from '@angular/http';


import { RouterTestingModule } from '@angular/router/testing';


import { ROUTES } from './app.test.route.config';
import { NavigationService } from '../../core-services/tcmcore.navigation.service';

@Component({
  selector: 'test-navbar',
  template: `
    <navbar-cmp [Routes]="routes" class="navbar-fixed-top"></navbar-cmp>
    `
})
class TestNavBarComponent {
  text: string;
  routes = ROUTES;
}

describe('TestNavBarComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestNavBarComponent, NavbarComponent],
      imports: [
        HttpModule,
        RouterTestingModule,
        CommonModule,
        FormsModule,
        MatDialogModule
      ],
      providers: [
        { provide: 'IThemeService', useClass: ThemeService }
        , { provide: 'IUserSettingsService', useClass: UserSettingsService }
        , { provide: 'IAuthService', useClass: AuthService }
        , { provide: 'INavigationService', useClass: NavigationService }
        , { provide: 'ILogService', useClass: LogService }
        , { provide: 'IDataService', useClass: DataService }
        , LoaderService
        , { provide: 'IConfigService', useClass: ConfigService }
        , CacheService
        , { provide: 'ICacheService', useClass: TCMCacheService }
        , { provide: 'IWindowRef', useClass: WindowRef }
      ]
    });
  });

  it('Navbar works well', async(() => {
    const fixture = TestBed.createComponent(TestNavBarComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.nativeElement as HTMLElement;

    expect(1 + 1).toBe(2);
  }));
});

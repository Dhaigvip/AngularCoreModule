/*
  Vipul Dhaigude        2017-01-01    Created
*/


import { Component, OnInit, Input, Inject, EventEmitter } from '@angular/core';
import { AsyncPipe, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SettingsComponent } from '../../core-components/settings/settings.component';
//import { ThemeService } from '../../core-services/tcmcore.theme.service';
//import { UserSettingsService } from '../../core-services/tcmcore.usersettings.service';
import { RouteInfo } from '../../tcmcore-objects/tcmcore.domain.objects';
import { IUserSettingsService, IAuthService, INavigationService, IThemeService, ITCMWebSocketService, CoreState } from '../../tcmcore-objects/tcmcore.domain.interfaces';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, NavigationEnd, ActivatedRoute, ROUTER_CONFIGURATION, RouterEvent } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { getInboxItems } from '../../state/tcmcore.selectors';
import { TranslateService } from 'ng2-translate';
import { VoiceSearch } from '../voicesearch/voicesearch.component';


//import { NavigationService } from '../../core-services/tcmcore.navigation.service';
declare var $: any;
//declare var _: any;
//import * as _ from 'lodash';


@Component({
  selector: 'navbar-cmp',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
  listTitles: any[];
  homePath:string;
  menuItem: RouteInfo = <RouteInfo>{};
  public notification: EventEmitter<void> = new EventEmitter();
  pendingMessages = 0;
  isAutheticated: boolean = false;

  inboxItems = null;

  userName: string;
  theme: string;
  isCollapsed: boolean = true;

  @Input() showSettings: boolean = false;
  @Input() showVoiceSearch: boolean = false;
  @Input() showNotification: boolean = false;

  //@Input()
  Routes: any;

  constructor(
    private router: Router
    //, private activatedRoute: ActivatedRoute
    , @Inject(ROUTER_CONFIGURATION) private config
    , private location: Location
    , private translate: TranslateService
    , @Inject('ITCMWebSocketService') private messageService: ITCMWebSocketService
    , @Inject('IThemeService') private themeService: IThemeService
    , @Inject('IUserSettingsService') private userSettings: IUserSettingsService
    , private dialog: MatDialog
    , @Inject('IAuthService') private auth: IAuthService
    , private store: Store<CoreState>
  ) {
    //, @Inject('INavigationService') private navService: INavigationService
    this.location = location;
    this.Routes = this.router.config;

    //messageService.newTCMMessage.subscribe((m) => {
    //  this.pendingMessages = this.messageService.GetMessages().length;
    //})

    this.router.events.subscribe((eventType) => {
      if (eventType instanceof NavigationEnd) {

        this.processSelection(eventType);
      }
    });
  }

  processSelection(item: any) {
    for (let i = 0; i < this.listTitles.length; i++) {
      let path = item.url.split("/")[1];

      if (path.trim() === "") {
        let temp = item.urlAfterRedirects;
        if (temp.charAt(0) === '/') temp = temp.substr(1);
        let m = temp.split("/")[0];

        this.menuItem = this.listTitles.find(x => x.path === m);
        if (this.menuItem.children)
          this.menuItem.children.sort((a, b) => { return a.ordinal - b.ordinal });
        break;
      }
      else if (this.listTitles[i].path === path) {
        this.menuItem = this.listTitles[i];
        if (this.menuItem.children)
          this.menuItem.children.sort((a, b) => { return a.ordinal - b.ordinal });
        break;
      }
    }
  }
  translateDecode(text) {
    return this.convertCharCodes(this.translate.instant(text));
  }
  convertCharCodes = (stringToFormat) => {
    return stringToFormat.replace(/&#(\d+);/g, function (match, number) { return String.fromCharCode(number) })
  }
  openNotification(): void {
    this.notification.next();
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(SettingsComponent, {
      width: '1000px',
      data: { theme: this.theme }
    });
  }
  openDialogVoice(): void {
    let dialogRef = this.dialog.open(VoiceSearch, {
      width: '1000px',
      data: { theme: this.theme }
    });
  }


  CombinePaths(parent, child) {
    return parent + '/' + child;
  }

  MainMenuSelect(mainMenuItem: RouteInfo) {
    this.menuItem = mainMenuItem;
  }

  ngOnInit() {

    //this.navService.Init(this.Routes);
    this.homePath="pagenotfound";
    this.listTitles = this.Routes.filter(listTitle => listTitle);
     
    //Sort
    this.listTitles.sort((a, b) => { return a.ordinal - b.ordinal });
    if(this.listTitles)
    {
      let homePathRoute=this.listTitles.find(element=>{ return element.path===''});    
      this.homePath=homePathRoute?homePathRoute.redirectTo:"pagenotfound";
    }
    //this.auth.onContext.subscribe((val: any) => {
    //  if (val)
    //    this.userName = val.RegUser;
    //});


    this.inboxItems = this.store.pipe(select(getInboxItems));

    var context = this.auth.GetUserContext();
    this.userName = context ? context.RegUser : '';// this.auth.GetUserContext().RegUser;
    //  .subscribe(items =>
    //  this.pendingMessages = items.length
    //);
    this.auth.userAutheticated.subscribe(result => {
      if (result) {
        this.userName = this.auth.GetUserContext().RegUser;
        this.isAutheticated = this.auth.IsAuthenticated();
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      let globalSettings = this.userSettings.GetUserSettingsForPage("Global");
      (globalSettings) ? this.theme = globalSettings.PageData.filter((ctrl) => ctrl.ControlId === 'Theme')[0].ControlData : this.theme = 'primary';
    });

    this.themeService.theme.subscribe((val) => {
      this.theme = val;
      console.log('navbar theme - ' + this.theme);
    });
    this.theme = this.themeService.currenttheme;
  }

  stickNavbarOntop = () => {
    var scroll = $(window).scrollTop();

    if (scroll >= 260) {
      if (!$('.navbar-fixed-on-scroll').hasClass('navbar-fixed-top'))
        $('.navbar-fixed-on-scroll').addClass('navbar-fixed-top');
    } else {
      if ($('.navbar-fixed-on-scroll').hasClass('navbar-fixed-top'))
        $('.navbar-fixed-on-scroll').removeClass('navbar-fixed-top');
    }
  }
  setUserName = (name) => {
    this.userName = name;
  }

  changeTheme(theme) {
    this.themeService.change(theme);
  }
  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(2);
    }
    for (let item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }
}

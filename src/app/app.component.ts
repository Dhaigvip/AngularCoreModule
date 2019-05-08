import { Component, ViewContainerRef, Inject, ViewChild } from '@angular/core';
import { NavbarComponent, FooterComponent, AppContextComponent, ILogService } from '../library/index';
//import { MAIN_ROUTES } from './app.route.config';
import { IDataService } from '../library/index';
import { IAppBootstrap, LoaderService, IUserSettingsService } from '../library/index';
import { Router, NavigationEnd } from '@angular/router';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';
// import { Toastm } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent { 
  showLoader: boolean;
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;
  constructor(

     @Inject('ILogService') private logService: ILogService
    , @Inject('IDataService') private dataService: IDataService
    , private toastrService: ToastrService
    , private loaderService: LoaderService
    , private router: Router
    , @Inject('IUserSettingsService') private userSettings: IUserSettingsService
  ) {}

  ngOnInit() {

    console.log('Application main component Init');

    this.toastrService.overlayContainer = this.toastContainer;

    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
    

  }
}

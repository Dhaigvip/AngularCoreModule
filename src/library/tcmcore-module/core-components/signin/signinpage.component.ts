/*
  Vipul Dhaigude        2017-01-01    Created
*/

import { Component, HostBinding, Inject, OnInit, OnDestroy } from '@angular/core';
import { ModuleBaseComponent } from '../../core-services/tcmcore.module-base.component';
import { UserCredentials, ClientResponseDTO } from '../../tcmcore-objects/tcmcore.domain.objects';
import { IAuthService } from '../../tcmcore-objects/tcmcore.domain.interfaces';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'signin-cmp',
  templateUrl: 'signinpage.component.html'
})

export class SignInComponent implements OnInit, OnDestroy {
  credentials: UserCredentials = new UserCredentials();
  errors = null;
  paramSub = null;
  redirectURL;
  constructor(
    @Inject('IAuthService') private auth: IAuthService
    , private router: Router
    , private route: ActivatedRoute) {

  }

  ngOnInit() {

    //this.redirectURL = this.route.snapshot.paramMap.get('redirectURL');

    this.paramSub = this.route.queryParamMap.switchMap((params: ParamMap) => {
      this.redirectURL = params.get('redirectURL');
      return this.redirectURL;
    });
  }
  ngOnDestroy() {
    //if (this.paramSub) this.paramSub.unsubscribe();
  }


  SignIn = () => {
    this.errors = null;
    this.auth.AutheticateExternal(this.credentials).subscribe((result: ClientResponseDTO) => {
      if (this.auth.IsAuthenticated()) {
        //this.router.navigateByUrl(this.redirectURL);
        this.router.navigateByUrl("/");
      } else {
        this.errors = result.ErrorList;
      }
    });
  }
}

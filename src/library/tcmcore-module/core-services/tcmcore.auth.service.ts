/*
  Vipul Dhaigude        2017-01-12    Created
*/


import { Injectable, Inject } from '@angular/core';
import { Http, Response, Request, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { ClientRequestDTO, ContextDTO, ClientContext, ClientResponseDTO, UserCredentials } from '../tcmcore-objects/tcmcore.domain.objects';
import { IDataService, IAuthService, IWindowRef, ILogService } from '../tcmcore-objects/tcmcore.domain.interfaces';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService implements IAuthService {
  UserContext: ClientContext;
  UserToken: string;
  isAutheticated: boolean = false;

  //public onContext: Subject<ContextDTO> = new Subject<ContextDTO>();


  constructor(
    @Inject('IWindowRef') private window: IWindowRef
    , @Inject('IDataService') private dataService: IDataService
  ) { }

  IsAuthenticated = (): boolean => {
    return this.UserContext ? this.UserContext.IsAutheticated : false;
  }

  GetUserContext(): ContextDTO {
    return this.UserContext ? this.UserContext.Context : null;
  }

  AutheticateExternal = (credentials: UserCredentials): Observable<ClientContext> => {
    return null;
  }
  PreAutheticate = (): Observable<string> => {
    return null;
  }
  GetExpiryDate = (): Date => {
    return null;
  }

  Autheticate = (): Observable<ClientContext> => {
    let request = new ClientRequestDTO();
    request.MetaData.Action = "Autheticate";

    return this.dataService.Post("Auth", request, null).map((response: ClientResponseDTO) => {
      this.UserContext = response.Data;

      let strContext = JSON.stringify(this.UserContext.Context);
      let strToken = this.UserContext.Token;

      sessionStorage.setItem("UserToken", strToken);
      sessionStorage.setItem("UserContext", strContext);
      return this.UserContext;
    });
  }



  IsInRole = (role: string): boolean => {
    return this.UserContext.Roles.filter(x => x === role).length > 0
  }

  IsAuthorisedForUpdate = (roles: string[]) => {
    return true;
    //var found = roles.some(r => this.UserContext.Roles.includes(r))
    //return found;
  }
  IsAuthorisedForCreate = (roles: string[]) => {
    return true;
    //var found = roles.some(r => this.UserContext.Roles.includes(r))
    //return found;
  }

  DecodeUserToken = (): any => {
    let self = this;

    if (this.UserContext.Token) {
      let base64Url = this.UserContext.Token.split('.')[1];
      let base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(this.window.nativeWindow.atob(base64));
    }
    return null;
  }
}

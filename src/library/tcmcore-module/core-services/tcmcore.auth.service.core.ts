/*
  Vipul Dhaigude        2019-03-10    Created
*/


import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Http, Response, Request, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { ClientRequestDTO, ContextDTO, ClientContext, ClientResponseDTO, UserCredentials } from '../tcmcore-objects/tcmcore.domain.objects';
import { IDataService, IAuthService, IWindowRef, ILogService } from '../tcmcore-objects/tcmcore.domain.interfaces';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthServiceCore implements IAuthService { 
  decodedToken = null;
  public userAutheticated: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    @Inject('IWindowRef') private window: IWindowRef
    , @Inject('IDataService') private dataService: IDataService
  ) {
    this.DecodeUserTokenInterval();
  }

  IsAuthenticated = (): boolean => {
    let context = JSON.parse(sessionStorage.getItem('UserContext'));
    return context ? context.IsAutheticated : false;
  }

  GetUserContext = (): ContextDTO => {

    let context = JSON.parse(sessionStorage.getItem('UserContext'));
    return context ? context.Context : null;
  }

  GetExpiryDate = (): Date => {
    if (this.decodedToken) {
      var d = new Date(this.decodedToken.exp * 1000);
      d.setHours(0, 0, 0, 0);
      return d;
    }
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  }

  PreAutheticate = (): Observable<string> => {
    //let request = new ClientRequestDTO();
    //request.MetaData.Action = "Autheticate";

    //return this.dataService.Post("Auth/Pre", request, null).map((response: ClientResponseDTO) => {
    //  let strToken = response.Data;
    //  //sessionStorage.setItem("UserToken", strToken);
    //  return strToken;
    //});
    return null;
  }

  AutheticateInternal = (path: string): Observable<ClientContext> => {
    var d = new Date();
    d.setHours(0, 0, 0, 0);

    if (this.GetExpiryDate() > d) {
      var context = JSON.parse(sessionStorage.getItem('UserContext'));
      this.userAutheticated.next(true);
      return Observable.of(context);
    }

    let request = new ClientRequestDTO();
    request.MetaData.Action = "Autheticate";

    return this.dataService.PostAnonymous(path, request, null).map((response: ClientResponseDTO) => {
      let UserContext = response.Data;
      let strContext = JSON.stringify(UserContext);
      
      sessionStorage.setItem("UserContext", strContext);
      this.DecodeUserTokenInterval();
      if (this.IsAuthenticated()) {
        this.userAutheticated.next(true);
      }
      return UserContext;
    });
  }

  Autheticate = (): Observable<ClientContext> => {
    return this.AutheticateInternal("Auth/Win");
  }

  AutheticateExternal = (credentials: UserCredentials): Observable<ClientContext> => {
    return this.AutheticateInternal("Auth/External");
  }


  IsInRole = (role: string): boolean => {
    if (this.decodedToken && this.decodedToken.role) {
      var inrole = this.decodedToken.role.filter(x => x === role).length > 0;
      return inrole;
    }
    return false;
    //return this.UserContext.Roles.filter(x => x === role).length > 0
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
    return this.decodedToken;
  }

  private DecodeUserTokenInterval = () => {
    var context = JSON.parse(sessionStorage.getItem('UserContext'));
    if (context && context.Token) {
      let base64Url = context.Token.split('.')[1];
      let base64 = base64Url.replace('-', '+').replace('_', '/');
      this.decodedToken = JSON.parse(this.window.nativeWindow.atob(base64));
    }
  }
}

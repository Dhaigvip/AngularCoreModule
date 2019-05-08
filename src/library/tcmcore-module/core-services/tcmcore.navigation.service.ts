/*
  Vipul Dhaigude        2017-01-01   Created
*/


import { Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationExtras } from '@angular/router';
import { Http, Response, Request, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RouteInfo } from '../tcmcore-objects/tcmcore.domain.objects';
import { INavigationService, ILogService } from '../tcmcore-objects/tcmcore.domain.interfaces';

@Injectable()
export class NavigationService implements INavigationService {

  private _routes: RouteInfo[] = [];
  constructor(
    @Inject('ILogService') private logger: ILogService
    , private router: Router
    , private route: ActivatedRoute) {
    this._routes = this.router.config;
  }

  GetPath(key: string): string {
    let y: RouteInfo = null;
    let path = '';
    for (let i = 0; i < this._routes.length; i++) {
      y = this.GetMatchingPath(key, this._routes[i])
      if (y) {
        return (y.id === this._routes[i].id) ? y.path : this._routes[i].path + '/' + y.path;
      }
    }
    return path;
  }

  GetMatchingPath(id: string, currentNode: RouteInfo) {
    var i, currentChild, result;

    if (id == currentNode.id) {
      return currentNode;
    } else {

      if (currentNode.children == null) return false;
      // Use a for loop instead of forEach to avoid nested functions
      // Otherwise "return" will not work properly
      for (i = 0; i < currentNode.children.length; i += 1) {
        currentChild = currentNode.children[i];

        // Search in the current child
        result = this.GetMatchingPath(id, currentChild);

        // Return the result if the node has been found
        if (result !== false) {
          return result;
        }
      }

      // The node has not been found and we have no more options
      return false;
    }
  }

  //private GenerateNavigationPath = (key: string) => {
  //  let path = '';
  //  let m = this._routes.filter(x => x.id === key).length > 0 ? 
  //  if (m) {
  //    let child = m.children.filter(y => y.id == key).pop();
  //    if (child)
  //      return child.path;
  //  }
  //  return path;
  //}
  public Navigate = (key: string) => {

    //let path = this.GenerateNavigationPath(key);
    let path = this.GetPath(key);

    this.logger.log("Navigating to " + path);

    this.router.navigate([path]).catch(
      (reason) => {
        this.logger.error(reason)
      });
  }

  public NavigateWithQueryParams = (key: string, params: any) => {

    //let path = this.GenerateNavigationPath(key);
    let path = this.GetPath(key);

    this.logger.log("Navigating to " + path);
    this.logger.log("Navigation data " + params);

    this.router.navigate([path], { queryParams: { data: JSON.stringify(params) } }).catch(
      (reason) => {
        this.logger.error(reason)
      });
  }
  public NavigateWithMandatoryParams = (key: string, params: any) => {

    let path = this.GetPath(key);

    this.logger.log("Navigating to " + path);
    this.logger.log("Navigation data " + params);

    this.router.navigate([path], params).catch(
      (reason) => {
        this.logger.error(reason)
      });
  }
  public NavigateWithExtras = (key: string, navigationExtras: NavigationExtras) => {

    let path = this.GetPath(key);

    this.logger.log("Navigating to " + path);
    this.logger.log("Navigation data " + navigationExtras);

    this.router.navigate([path], navigationExtras).catch(
      (reason) => {
        this.logger.error(reason)
      });
  }

}

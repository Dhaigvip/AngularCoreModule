//import { Injectable } from "@angular/core";
//import { Observable } from "rxjs";
//import {
//  Http, Headers, RequestOptionsArgs,
//  ResponseContentType, Response,
//  RequestOptions, URLSearchParams
//} from '@angular/http';
//import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from "@angular/common/http";

//@Injectable()
//export class TokenInterceptor implements HttpInterceptor {

//  constructor() {

//  }

//  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

//    let contenttype = 'application/json';
//    let accept = 'application/json'

//    if (request.responseType != "arraybuffer")// do not override
//      accept = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

   

//    const authReq = request.clone({
//      headers: new HttpHeaders({
//        'Content-Type': contenttype,
//        'Authorization': 'Bearer ' + sessionStorage.getItem('UserToken'),
//        'Accept': accept
//      }),
//      withCredentials: true      
//    });

//    return next.handle(request);
//  }
//}

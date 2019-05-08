// import { TestBed, inject } from '@angular/core/testing';
// import { AuthService } from "./tcmcore.auth.service";
// import { TCM_CORE_CONFIG, TCMCoreConfig } from '../tcmcore-objects/tcmcore.domain.objects'
// import { LogService, LogModule, ConsoleListener, ExtensionListener, LOG_LISTENER, ConsoleListenerConfig } from 'ng2-log-service';
// import { TCMCustomListener } from "./tcmcore.loglistener.object";
// import { WindowRef } from './tcmcore.windowref.service';
// import { DataService } from './tcmcore.data.service';
// import { LoaderService } from './tcmcore.loader.service';
// import { Injectable, Inject } from '@angular/core';
// import { HttpModule, Http, Headers, RequestOptionsArgs, ResponseContentType, Response, RequestOptions, URLSearchParams } from '@angular/http';
// import 'rxjs/Rx';
// import 'rxjs/add/operator/map'
// import { Observable } from "rxjs/Observable";

// describe('TestService', () => {
//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [HttpModule, LogModule],
//             providers:
//             [
//                 AuthService,
//                 {
//                     provide: TCM_CORE_CONFIG, useValue: { url: 'http://localhost:64790/api/' }
//                 },
//                 WindowRef,
//                 DataService,
//                 LoaderService,
//                 ConsoleListenerConfig,
//                 { provide: LOG_LISTENER, useClass: ConsoleListener, multi: true, deps: [ConsoleListenerConfig] },
//                 { provide: LOG_LISTENER, useClass: ExtensionListener, multi: true },
//                 { provide: LOG_LISTENER, useClass: TCMCustomListener, multi: true },
//                 LogService,
//             ]
//         });
//     });

//     it('Authetication Service compiles', inject([AuthService], (service: AuthService) => {
//         expect(service).toBeDefined();
//     }));
//     it('User Context', inject([AuthService], (service: AuthService) => {
//         let spy = spyOn(service, 'GetUserContext');
//         //.and.returnValue()


//         service.GetUserContext().subscribe((response) => {
//             let UserContext = response.Data;
//             expect(UserContext.RegUser).toEqual('Ap\Dhaigvip');
//         })
//     }));
// });

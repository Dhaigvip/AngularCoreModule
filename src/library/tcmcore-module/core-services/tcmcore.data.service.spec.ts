import {
  async,
  getTestBed,
  TestBed
} from '@angular/core/testing';
import { ClientRequestDTO } from '../tcmcore-objects/tcmcore.domain.objects'
import { DataService } from './tcmcore.data.service';
import { ConfigService } from './tcmcore.config.service';
import { LoaderService } from './tcmcore.loader.service';
import { TCMCacheService } from './tcmcore.cache.service';
import { CacheService } from 'ng2-cache-service';
import { HttpModule, Http, Headers, ResponseOptions, RequestOptionsArgs, ResponseContentType, Response, RequestOptions, URLSearchParams, BaseRequestOptions, XHRBackend } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Observable";
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';
import { LogService } from './tcmcore.log.service';
import { IConfigService, IDataService } from '../tcmcore-objects/tcmcore.domain.interfaces';
import { ThemeService } from './tcmcore.theme.service';
import { UserSettingsService } from './tcmcore.usersettings.service';
import { AuthService } from './tcmcore.auth.service';
import { NavigationService } from './tcmcore.navigation.service';
import { WindowRef } from './tcmcore.windowref.service';


describe('TestService', () => {
  let backend: MockBackend;
  let service: IDataService;
  let _config: IConfigService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],

      providers:
      [
        BaseRequestOptions,
        MockBackend,
        DataService, {
          deps: [
            MockBackend,
            BaseRequestOptions
          ],
          provide: Http,
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        },
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
    const testbed = getTestBed();
    backend = testbed.get(MockBackend);
    service = testbed.get('IDataService');
    _config = testbed.get('IConfigService');
  }));

  function setupConnections(backend: MockBackend, options: any) {
    backend.connections.subscribe((connection: MockConnection) => {
      if (connection.request.url === 'http://localhost:64790/api/Fund') {
        const responseOptions = new ResponseOptions(options);
        const response = new Response(responseOptions);

        connection.mockRespond(response);
      }
    });
  }

  it('should return the list of Funds from the server on success', async(() => {
    setupConnections(backend, {
      ok: 'true',
      status: 200,
      statustext: 'Ok',
      type: 2,
      url: "http://localhost:64790/api/Fund",
      headers: new Headers({ "authtoken": "Abc" }),
      body: {
        Data: {
          CriteriaType: "BySearch",
          TotalRecords: 1,
          FundList: [{
            Identity: {
              BaseCurrencyId: "USD", FundId: 380, FundLegalName: "Aberdeen Global Latin American Equity Fund",
              FundName: "XOM - Aberdeen Global Latin American", FundShortName: "XOM", Isin: "LU0476875785"
            }
          }]
        },
        Errors: [],
        Success: true
      }
    });
    _config.Init().subscribe((result) => {
      var request = new ClientRequestDTO();
      request.MetaData.Action = "OverviewFindAsync";
      request.Data = null;
      service.Post("Fund", request, null).subscribe((response) => {
        expect(response.Data.FundList.length).toBeGreaterThan(0);
        expect(response.Data.FundList[0].Identity.FundId).toBe(380);
      })
    });
  }));

  it('should log an error to the console on error', async(() => {
    setupConnections(backend, {
      ok: 'true',
      status: 200,
      statustext: 'Ok',
      type: 2,
      url: "http://localhost:64790/api/Fund",
      headers: new Headers({ "authtoken": "Abc" }),
      body: {
        Data: {
          CriteriaType: "BySearch",
          TotalRecords: 1,
          FundList: [{
            Identity: {
              BaseCurrencyId: "USD", FundId: 380, FundLegalName: "Aberdeen Global Latin American Equity Fund",
              FundName: "XOM - Aberdeen Global Latin American", FundShortName: "XOM", Isin: "LU0476875785"
            }
          }]
        },
        Errors: [],
        Success: true
      }
    });
    _config.Init().subscribe((result) => {
      var request = new ClientRequestDTO();
      request.MetaData.Action = "OverviewFindAsync";
      request.Data = null;
      service.Post("Fund", request, null).subscribe((response) => {
        expect(response.Data.FundList.length).toBeGreaterThan(0);
        expect(response.Data.FundList[0].Identity.FundId).toBe(380);
      })
    });
  }));
});


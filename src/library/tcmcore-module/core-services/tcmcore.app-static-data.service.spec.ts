import {
  async,
  getTestBed,
  TestBed
} from '@angular/core/testing';
import { LOCALE_ID } from '@angular/core';

import { StaticDataService } from './tcmcore.app-static-data.service';
import { HttpModule, Http, Headers, ResponseOptions, RequestOptionsArgs, ResponseContentType, Response, RequestOptions, URLSearchParams, BaseRequestOptions, XHRBackend } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Observable";
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';
import { LogService } from './tcmcore.log.service';


describe('TestStaticDataService', () => {
  let service: StaticDataService;
  let backend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers:
      [
        BaseRequestOptions,
        MockBackend,
        StaticDataService, {
          deps: [
            MockBackend,
            BaseRequestOptions
          ],
          provide: Http,
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        },
        { provide: LOCALE_ID, useValue: 'en-US' },
        LogService        
      ]
    });
    const testbed = getTestBed();
    backend = testbed.get(MockBackend);
    service = testbed.get(StaticDataService);
  }));



  it('should read the static data file form asset/data/staticdata-en-US.json ', async(() => {
    let x = 0;
    service.LoadStaticData().subscribe((result) => {
      console.log(result);
    })
  }));

  it('static data file has collection of data', async(() => {
    let x = 0;
    service.LoadStaticData().subscribe((result) => {
      expect(result.length).toBe(x => x > 0);
    })
  }));
  it('static data file has ACCOUNT_TYPE', async(() => {
    let x = 0;
    service.LoadStaticData().subscribe((result) => {
      let cahedData = service.GetStaticData('ACCOUNT_TYPE');
      expect(cahedData).not.toBeNull();
    })
  }));

  it('static data ACCOUNT_TYPE contains required items', async(() => {
    let x = 0;
    service.LoadStaticData().subscribe((result) => {
      let cahedData = service.GetStaticData('ACCOUNT_TYPE');
      expect(cahedData.Items[0].Code).toBe('ORD');
      expect(cahedData.Items[0].Text).toBe('Ordinary account');

      expect(cahedData.Items[0].Code).toBe('ADJ');
      expect(cahedData.Items[0].Text).toBe('Adjustment account');

      expect(cahedData.Items[0].Code).toBe('AGG');
      expect(cahedData.Items[0].Text).toBe('Aggregated account');

    })
  }));

  it('fetch more than one item from static data file', async(() => {
    let x = 0;
    service.LoadStaticData().subscribe((result) => {
      let list = service.GetStaticDataList(['ACCOUNT_TYPE', 'AGG_ORDER_TYPE']);
      expect(list.length).toEqual(2);
    })
  }))

});


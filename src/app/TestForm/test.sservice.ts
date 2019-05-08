import { Injectable, Inject } from '@angular/core';
import { CacheOption, IDataService, ClientRequestDTO } from '../../library/index';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TestService {

  constructor(
    @Inject('IDataService') private dataService: IDataService) { }
  //private dataService: DataService) {



  public ExternalGet(): Observable<any> {
    return this.dataService.Get('customer/v1', null, null, true);
  }
  public ExternalGetById(id): Observable<any> {
    //var param = { 'id': 1 };
    return this.dataService.Get('customer/v1/' + id, null, null, true);
  }
  public ExternalPost(input) {

    return this.dataService.Invoke('post', 'customer/v1', input, null, true);
  }
  public ExternalPut() {

  }
  public ExternalDelete() {

  }


  public Error(): Observable<any> {
    let request = new ClientRequestDTO();
    request.MetaData.Action = "GetMasterData";
    request.Data = 0;
    return this.dataService.Post("ErrorTest", request, null);
  }
  public Exception(): Observable<any> {
    let request = new ClientRequestDTO();
    request.MetaData.Action = "GetMasterData";
    request.Data = 1;
    return this.dataService.Post("ErrorTest", request, null);
  }
  public TestCache5mins(): Observable<any> {
    let request = new ClientRequestDTO();
    request.MetaData.Action = "GetMasterData";
    request.Data = 0;
    let c = new CacheOption();
    c.Cache = true;
    c.Key = "CaheTest1";
    c.Options = { maxAge: 5 * 60 }

    return this.dataService.Post("ErrorTest", request, c);
  }
  public TestCache(): Observable<any> {
    let request = new ClientRequestDTO();
    request.MetaData.Action = "GetMasterData";
    request.Data = 0;
    let c = new CacheOption();
    c.Cache = true;
    c.Key = "CaheTest1";
    return this.dataService.Post("ErrorTest", request, c);
  }
}


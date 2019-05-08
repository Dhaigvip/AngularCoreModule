/*
  Vipul Dhaigude        2017-03-22    Created
*/



import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { ClientRequestDTO, ContextDTO, CacheData, CacheObject } from '../tcmcore-objects/tcmcore.domain.objects';
import { IStaticDataService } from '../tcmcore-objects/tcmcore.domain.interfaces';


@Injectable()
export class StaticDataService implements IStaticDataService {

  private _cache: Array<CacheData> = [];
  public _filepath: string = './assets/data/staticdata-{}.json';


  constructor(
    @Inject(LOCALE_ID) private locale
    , private http: Http) {
    this._filepath = this._filepath.replace(/{}/g, locale);
  }


  public GetStaticDataItems = (key: string): CacheObject[] => {
    let cachedObject = this.GetStaticData(key);
    if (cachedObject) return cachedObject.Items;
    return null;
  }


  public GetStaticDataList = (keys: Array<string>): Array<CacheData> => {
    let cacheList = new Array<CacheData>();
    for (let i = 0; i < keys.length; i++) {
      cacheList.push(this.GetStaticData(keys[i]));
    }
    return cacheList;
  }

  public GetStaticData = (key: String): CacheData => {
    if (this._cache != null && this._cache.length > 0) {
      return this._cache.filter(x => x.GroupCode.trim() == key.trim())[0]
    }
    return null;
  }

  public LoadStaticData = () => {
    console.log("Loading static data");
    return this.http.get(this._filepath).map(
      (response) => {
        console.log("Loading static data-->Done");
        let result = response.json();
        this._cache = result;
        return result;
      });
  }
}

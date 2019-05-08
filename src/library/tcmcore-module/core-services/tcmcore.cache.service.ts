/*
  Vipul Dhaigude        2017-01-10    Created
*/


import { Injectable } from '@angular/core';
import { CacheService } from 'ng2-cache-service';

import { ICacheService } from '../tcmcore-objects/tcmcore.domain.interfaces';

declare var BUILD_VERSION: string;

@Injectable()
export class TCMCacheService implements ICacheService {
  BUILD_VERSION = 1.0;
  constructor(private _cacheService: CacheService) {
    this._cacheService.setGlobalPrefix("TCM");
  }

  //put some data to cache for 5 minutes (maxAge - in seconds)
  //this._cacheService.set('key', ['some data'], { maxAge: 5 * 60 });

  //put some data to cache for 1 hour (expires - timestamp with milliseconds)
  //this._cacheService.set('key', { 'some': 'data' }, { expires: Date.now() + 1000 * 60 * 60 });

  //put some data to cache with tag "tag"
  //this._cacheService.set('key', 'some data', { tag: 'tag' });

  //options: CacheOptionsInterface
  public Set(key: string, data: any, options?: any): boolean {
    return this._cacheService.set(key, data);
  }
  public Get(key: string): any {
    return this._cacheService.get(key);
  }
  public GetTagData(tag: string): any {
    return this._cacheService.getTagData(tag);
  }
  public Exists(key: string): boolean {
    return this._cacheService.exists(key);
  }
  public Remove(key: string): void {
    return this._cacheService.remove(key);
  }
  public RemoveTag(tag: string): void {
    return this._cacheService.removeTag(tag);
  }
  public RemoveAll(): void {
    return this._cacheService.removeAll();
  }
}

import {
  async,
  getTestBed,
  TestBed
} from '@angular/core/testing';

import { TCMCacheService } from './tcmcore.cache.service';
import { CacheService } from 'ng2-cache-service';

describe('TestTCMCacheService', () => {
  let service: TCMCacheService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:
      [
        TCMCacheService,
        CacheService

      ]
    });
    const testbed = getTestBed();
    service = testbed.get(TCMCacheService);
  }));


  it('set data in cache and read it back', () => {
    service.Set('TestData', { key: 'Test', Text: 'Test Data' });
    let cachedData = service.Get('TestData');
    expect(cachedData).not.toBeNull()
  });

  it('set data with Tag in cache and read it back', () => {
    service.Set('TestData', { key: 'Test', Text: 'Test Data' }, { tag: 'funnyTag' });
    let cachedData = service.GetTagData('funnyTag');
    expect(cachedData).not.toBeNull()
  });

  it('Check if data exists in the cache', () => {
    service.Set('TestData2', { key: 'Test', Text: 'Test Data' });
    let cachedData = service.Exists('TestData2');
    expect(cachedData).toBeTruthy();
  });

  it('Remove data from cache', () => {
    service.Set('TestData3', { key: 'Test', Text: 'Test Data' });

    service.Remove('TestData3');
    let cachedData = service.Exists('TestData3');
    expect(cachedData).not.toBeTruthy();
  });


  it('Set data with expiry', () => {
    service.Set('TestData4', { key: 'Test', Text: 'Test Data' }, { expires: Date.now() + 1000 * 60 * 60 });
    //How TO set time interval?
    //setTimeout(function () {
    //  let cachedData = service.Exists('TestData4');
    //  expect(cachedData).not.toBeTruthy();

    //}, 2000);
  });
});


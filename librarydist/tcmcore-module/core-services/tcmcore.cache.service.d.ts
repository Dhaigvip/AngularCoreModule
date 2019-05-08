import { CacheService } from 'ng2-cache-service';
import { ICacheService } from '../tcmcore-objects/tcmcore.domain.interfaces';
export declare class TCMCacheService implements ICacheService {
    private _cacheService;
    BUILD_VERSION: number;
    constructor(_cacheService: CacheService);
    Set(key: string, data: any, options?: any): boolean;
    Get(key: string): any;
    GetTagData(tag: string): any;
    Exists(key: string): boolean;
    Remove(key: string): void;
    RemoveTag(tag: string): void;
    RemoveAll(): void;
}

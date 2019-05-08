import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import { RouteInfo } from '../tcmcore-objects/tcmcore.domain.objects';
import { INavigationService, ILogService } from '../tcmcore-objects/tcmcore.domain.interfaces';
export declare class NavigationService implements INavigationService {
    private logger;
    private router;
    private route;
    private _routes;
    constructor(logger: ILogService, router: Router, route: ActivatedRoute);
    GetPath(key: string): string;
    GetMatchingPath(id: string, currentNode: RouteInfo): any;
    Navigate: (key: string) => void;
    NavigateWithQueryParams: (key: string, params: any) => void;
    NavigateWithMandatoryParams: (key: string, params: any) => void;
    NavigateWithExtras: (key: string, navigationExtras: NavigationExtras) => void;
}

import 'rxjs/add/operator/mergeMap';
import { TranslateService } from "ng2-translate";
import { IAppBootstrap, IAuthService, IStaticDataService, IThemeService, IWebSocketService, IConfigService, IUserSettingsService, ITCMWebSocketService } from '../tcmcore-objects/tcmcore.domain.interfaces';
export declare class AppBootstrapCore implements IAppBootstrap {
    private auth;
    private staticData;
    private themeService;
    private dashboardService;
    private configService;
    private userSettings;
    private _locale;
    private tcmMessageService;
    private translate;
    private ApplicationId;
    constructor(auth: IAuthService, staticData: IStaticDataService, themeService: IThemeService, dashboardService: IWebSocketService, configService: IConfigService, userSettings: IUserSettingsService, _locale: string, tcmMessageService: ITCMWebSocketService, translate: TranslateService);
    Bootstrap: (applicationId: string) => Promise<{}>;
    AfterAuthetication(): void;
}

/// <reference path="tcmcore.auth.service.d.ts" />
import { OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { PageSettings, UserSettings } from '../tcmcore-objects/tcmcore.domain.objects';
import { IDataService, IUserSettingsService, ILogService, IWindowRef, IConfigService } from '../tcmcore-objects/tcmcore.domain.interfaces';
export declare class UserSettingsService implements IUserSettingsService, OnInit {
    private logger;
    private dataService;
    private zone;
    private winRef;
    private coreConfig;
    private dirty;
    private UserSettings;
    private userId;
    private bucket;
    private router;
    constructor(logger: ILogService, dataService: IDataService, zone: NgZone, winRef: IWindowRef, coreConfig: IConfigService);
    ngOnInit(): void;
    UpdatePageSettings: (pageId: string, pageSettings: PageSettings) => void;
    GetUserSettingsForPage: (pageId: string) => PageSettings;
    private GetByObject;
    FetchUserSettings: (userSettings: UserSettings) => Observable<any>;
    private Update;
    SaveUserSettings: () => void;
}

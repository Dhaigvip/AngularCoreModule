import { NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IThemeService, IConfigService } from '../tcmcore-objects/tcmcore.domain.interfaces';
export declare class ThemeService implements IThemeService {
    private configService;
    private zone;
    theme: BehaviorSubject<string>;
    private _theme;
    constructor(configService: IConfigService, zone: NgZone);
    init: () => void;
    currenttheme: string;
    change: (value: string) => void;
}

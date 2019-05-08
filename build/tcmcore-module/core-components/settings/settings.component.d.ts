import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PageSettings } from '../../tcmcore-objects/tcmcore.domain.objects';
import { IUserSettingsService, IThemeService } from '../../tcmcore-objects/tcmcore.domain.interfaces';
export declare class SettingsComponent implements OnInit {
    private themeService;
    private userSettings;
    dialogRef: MatDialogRef<SettingsComponent>;
    data: any;
    globalSettings: PageSettings;
    selectedLang: string;
    selectedTheme: string;
    constructor(themeService: IThemeService, userSettings: IUserSettingsService, dialogRef: MatDialogRef<SettingsComponent>, data: any);
    changeLanguage(event: any): void;
    changeTheme(event: any): void;
    onClose(): void;
    ngOnInit(): void;
}

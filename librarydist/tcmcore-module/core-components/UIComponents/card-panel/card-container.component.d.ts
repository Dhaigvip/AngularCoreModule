import { OnInit } from "@angular/core";
import { CardContainer } from '../../../tcmcore-objects/tcmcore.domain.objects';
import { TranslateService } from 'ng2-translate';
import { IThemeService } from "../../../tcmcore-objects/tcmcore.domain.interfaces";
export declare class CardContainerComponent implements OnInit {
    private translate;
    private themeService;
    options: CardContainer;
    theme: any;
    color: string;
    constructor(translate: TranslateService, themeService: IThemeService);
    ngOnInit(): void;
    convertToColor(theme: any): void;
}

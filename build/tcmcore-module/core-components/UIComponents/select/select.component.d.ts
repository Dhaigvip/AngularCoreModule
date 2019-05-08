import { OnInit, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
import { CacheData, CacheObject, SelectControlOptions } from '../../../tcmcore-objects/tcmcore.domain.objects';
import { TranslateService } from 'ng2-translate';
import { IStaticDataService } from "../../../tcmcore-objects/tcmcore.domain.interfaces";
export declare class SelectComponent implements OnInit {
    private translate;
    private staticDataService;
    private validationMessages;
    options: SelectControlOptions;
    val: string;
    valueChange: EventEmitter<any>;
    private myOptions;
    ctrl: FormControl;
    constructor(translate: TranslateService, staticDataService: IStaticDataService);
    GetStaticData: (key: String) => CacheData;
    GetStaticDataList: (keys: string[]) => CacheData[];
    GetStaticDataItems: (key: string) => CacheObject[];
    ngOnInit(): void;
}

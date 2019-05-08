import { OnInit, EventEmitter, SimpleChanges } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { SearchRepository, ClientResponseDTO, AutoCompleteOptions } from '../../../tcmcore-objects/tcmcore.domain.objects';
import { TranslateService } from "ng2-translate";
export declare class AutoCompleteComponent implements OnInit {
    private translate;
    options: AutoCompleteOptions;
    disabled: boolean;
    selectedObject: any;
    selectedObjectChange: EventEmitter<{}>;
    getData: (postdata: SearchRepository) => Observable<ClientResponseDTO>;
    private errorMsgSearch;
    private objSearch;
    private ObjList;
    private bb;
    constructor(translate: TranslateService);
    clearObject: () => void;
    clearObjectInternal: () => void;
    ResetControl: () => void;
    ObjectSelected: ($event: any) => void;
    setObject: (obj: any) => void;
    displayObject: (obj: any) => any;
    ngOnChanges(changes: SimpleChanges): void;
    GetObjectValue: (obj: any, prop: string) => string;
    private GetNestedPropertyValue(obj, prop);
    ngOnInit(): void;
    search: (input: any) => Observable<any>;
    PrepareSearchRepository: (input: any) => SearchRepository;
}

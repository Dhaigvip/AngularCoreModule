import { OnInit, EventEmitter, ElementRef } from "@angular/core";
import { InputControlOptions } from '../../../tcmcore-objects/tcmcore.domain.objects';
import { TranslateService } from 'ng2-translate';
export declare class InputComponent implements OnInit {
    private translate;
    private el;
    private validationMessages;
    options: InputControlOptions;
    val: string;
    valueChange: EventEmitter<any>;
    private ctrl;
    constructor(translate: TranslateService, el: ElementRef);
    ngOnInit(): void;
}

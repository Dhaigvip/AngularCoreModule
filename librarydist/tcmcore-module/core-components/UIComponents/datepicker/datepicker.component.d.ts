import { OnInit, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
import { InputControlOptions } from '../../../tcmcore-objects/tcmcore.domain.objects';
import { TranslateService } from 'ng2-translate';
export declare class DateComponent implements OnInit {
    private translate;
    private validationMessages;
    options: InputControlOptions;
    val: string;
    valueChange: EventEmitter<any>;
    ctrl: FormControl;
    constructor(translate: TranslateService);
    ngOnInit(): void;
}

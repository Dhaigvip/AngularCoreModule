import { OnInit, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
import { InputControlOptions } from '../../../tcmcore-objects/tcmcore.domain.objects';
import { TranslateService } from 'ng2-translate';
export declare class CheckboxComponent implements OnInit {
    private translate;
    options: InputControlOptions;
    val: string;
    valueChange: EventEmitter<any>;
    ctrl: FormControl;
    constructor(translate: TranslateService);
    ngOnInit(): void;
}

import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { IDataService } from '../../tcmcore-objects/tcmcore.domain.interfaces';
import { SearchRepository } from '../../tcmcore-objects/tcmcore.domain.objects';
import { Observable } from 'rxjs/Observable';
export declare class VoiceSearch implements OnInit {
    private dataService;
    dialogRef: MatDialogRef<VoiceSearch>;
    data: any;
    private recognizing;
    private final_transcript;
    private ignore_onend;
    private start_timestamp;
    private info;
    private recognition;
    private interim_transcript;
    private status;
    private imagePath;
    private options;
    private searchObject;
    ngOnInit(): void;
    ShowSearchResult: () => void;
    updateSearch: () => void;
    triggerSearch: () => void;
    Find(searchRepository: SearchRepository): Observable<any>;
    SearchHolderByNameRepo(searchObject: any): SearchRepository;
    VipulCompare(searchString: string, baseString: string): {
        counter: number;
        option: string;
    };
    cleanData: () => void;
    startRecording: (event: any) => void;
    constructor(dataService: IDataService, dialogRef: MatDialogRef<VoiceSearch>, data: any);
    onClose(): void;
}

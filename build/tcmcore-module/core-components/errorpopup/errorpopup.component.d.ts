import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export declare class ErrorPopupComponent implements OnInit {
    dialogRef: MatDialogRef<ErrorPopupComponent>;
    Errors: any;
    constructor(dialogRef: MatDialogRef<ErrorPopupComponent>, Errors: any);
    ngOnInit(): void;
    private onClose(action);
}

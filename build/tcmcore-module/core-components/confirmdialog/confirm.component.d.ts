import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export declare class ConfirmComponent implements OnInit {
    dialogRef: MatDialogRef<ConfirmComponent>;
    data: any;
    constructor(dialogRef: MatDialogRef<ConfirmComponent>, data: any);
    ngOnInit(): void;
    private onClose(action);
}

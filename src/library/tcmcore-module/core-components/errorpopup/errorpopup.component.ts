/*
  Vipul Dhaigude        2018-01-01    Created
  Error page opens as a dialog.
*/


import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ErrorDTO } from '../../tcmcore-objects/tcmcore.domain.objects';
@Component({
  moduleId: module.id,
  selector: 'error-popup',
  templateUrl: 'errorpopup.component.html'
})
export class ErrorPopupComponent implements OnInit {
 

  constructor(
    public dialogRef: MatDialogRef<ErrorPopupComponent>
    , @Inject(MAT_DIALOG_DATA) public Errors: any) {   
  }

  ngOnInit() {
  }
  private onClose(action) {
    this.Errors = null;
    this.dialogRef.close(action);
  }
}

/*
  Vipul Dhaigude        2017-06-25    Created
  Shows YES / NO dialog. Returns the boolean result.
*/


import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  moduleId: module.id,
  selector: 'confirm-cmp',
  templateUrl: 'confirm.component.html'
})
export class ConfirmComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {

  }
  private onClose(action) {
    this.dialogRef.close(action);
  }
}

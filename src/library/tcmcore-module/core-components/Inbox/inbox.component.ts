/*
  Vipul Dhaigude        2017-01-01    Created
*/


import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, ViewChildren, ElementRef, SimpleChange, HostBinding } from "@angular/core";
import { Observable, Subject, AsyncSubject } from 'rxjs/Rx';
import { TranslateService } from 'ng2-translate';
import { MatDialog } from "@angular/material";

import { InboxList } from './inbox.list.component';

import { FormControl } from "@angular/forms";
import { ParamMap } from "@angular/router";
declare var _: any;

@Component({
  selector: 'inbox',
  styleUrls: ['inbox.component.css'],
  templateUrl: 'inbox.component.html'
})

export class Inbox {

  folds = [];
  labels = [];
  newLabel: any;
  inboxes = [];


  //@HostBinding('@routeAnimation') routeAnimation = true;
  //@HostBinding('style.display') display = 'block';
  //@HostBinding('style.position') position = 'absolute';

  constructor() {

  }
  ngOnInit() {
    this.Demodata();
  }
  Demodata() {


    this.folds = [
      { name: 'Order', filter: '', id: 1 },
      { name: 'Customer', filter: 'starred', id: 2 },
      { name: 'Fund', filter: 'sent', id: 3 },
      { name: 'Payment', filter: 'important', id: 4 },
      { name: 'Accounts', filter: 'draft', id: 5 },
      { name: 'Other', filter: 'trash', id: 6 }
    ];
    this.labels = [
      { name: 'New', filter: 'new', color: '#23b7e5' },
      { name: 'Approve', filter: 'approve', color: '#7266ba' },
      { name: 'Modify', filter: 'modify', color: '#fad733' },
      { name: 'Delete', filter: 'delete', color: '#27c24c' }
    ];
  }


  labelClass = (label) => {
    return {
      'b-l-info': label === 'New',
      'b-l-primary': label === 'Approve',
      'b-l-warning': label === 'Modify',
      'b-l-success': label === 'Delete'
    };
  };


  addLabel = () => {
    this.labels.push(
      {
        name: this.newLabel.name,
        filter: this.newLabel.name,
        color: '#ccc'
      }
    );
    this.newLabel.name = '';
  }

  ngOnChanges(change: SimpleChange) {

  }

  ngAfterViewInit() {

  }
  Save() {

  }
  CheckIfDirty() {
    return false;
  }

}

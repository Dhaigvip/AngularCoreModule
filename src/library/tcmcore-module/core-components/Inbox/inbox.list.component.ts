/*
  Vipul Dhaigude        2017-01-01    Created
*/


import {
  Component, OnInit, OnDestroy, ViewChild,
  ViewContainerRef, ViewChildren, ElementRef, SimpleChange, Input, Inject
} from "@angular/core";

import { Observable, Subject, AsyncSubject } from 'rxjs/Rx';
import { TranslateService } from 'ng2-translate';
import { MatDialog } from "@angular/material";

import { FormControl } from "@angular/forms";
import { ParamMap, Router, NavigationEnd, NavigationStart } from "@angular/router";
import { ITCMWebSocketService, INavigationService, CoreState } from "../../tcmcore-objects/tcmcore.domain.interfaces";
//import { CoreShareService } from "../../core-services/tcmcore.share.service";
import { Store, select } from "@ngrx/store";
import { getInboxItems } from '../../state/tcmcore.selectors';
import { SetCurrentInboxItem } from '../../state/tcmcore.actions';


declare var _: any;

@Component({
  selector: 'inbox_list',
  templateUrl: 'inbox.list.component.html'
})

export class InboxList {

  inboxes = null;
  splitdirection: string = 'horizontal';
  showlist: boolean = true;
  tasks = [];
  views = [];

  constructor(
    @Inject('ITCMWebSocketService') private messageService: ITCMWebSocketService
    , @Inject('INavigationService') private navigation: INavigationService
    , private router: Router
    //, private shared: CoreShareService
    , private store: Store<CoreState>

  ) {

    //this.router.events.subscribe((eventType) => {
    //  if (eventType instanceof NavigationStart) {
        
    //  }
    //});

    

    //this.messageService.newTCMMessage.subscribe((newMessage) => {
    //  let added = false;
    //  for (let i = 0; i < this.inboxes.length; i++) {
    //    if (this.inboxes[i].MessageId == newMessage.MessageId) {
    //      this.inboxes[i] = newMessage;
    //      added = true;
    //      break;
    //    }
    //  }
      

    //  if (!added) this.inboxes.push(newMessage);
    //})
  }
  ngOnInit() {
    this.inboxes = this.store.pipe(select(getInboxItems));
  }

  SetInboxData(obj: any) {
    obj.State = 1;
    this.store.dispatch(new SetCurrentInboxItem(obj));
  }

  DemoData() {

    this.tasks = [
      { value: 'newfund', viewValue: 'Create New Fund' },
      { value: 'newcustomer', viewValue: 'Create New Customer' },
      { value: 'newpit', viewValue: 'Create New Payment Instruction' }
    ];
    this.views = [
      { value: 'fundoverview', viewValue: 'Fund Overview' },
      { value: 'customeroverview', viewValue: 'Customer Overview' },
      { value: 'fundoverview', viewValue: 'Pending confirmation overview' }
    ];
    this.inboxes = [
      {
        "id": 10,
        "subject": "Place a new subscription order",
        "from": "james@gmail.com",
        "avatar": "assets/img/a10.jpg",
        "to": [
          { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
        ],
        "content": "Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper Neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat.",
        "attach": [
          { "name": "c1.jpg", "url": "assets/img/c1.jpg" },
          { "name": "c3.jpg", "url": "assets/img/c3.jpg" }
        ],
        "date": "12:20 7/23/2014",
        "label": "New Order",
        "fold": "important",
        "target": "orderentry"
      },
      {
        "id": 9,
        "subject": "Place a new subscription order",
        "from": "james@gmail.com",
        "avatar": "assets/img/a9.jpg",
        "to": [
          { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
        ],
        "content": "Retur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper Neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat.",
        "date": "12:20 7/23/2014",
        "label": "New Order",
        "fold": "important",
        "target": "orderentry"
      },
      {
        "id": 8,
        "subject": "Cancel order number 12805",
        "from": "jessica@gmail.com",
        "avatar": "assets/img/a1.jpg",
        "to": [
          { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
        ],
        "content": "Neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat.",
        "attach": [
          { "name": "c0.jpg", "url": "images/c0.jpg" }
        ],
        "date": "16:20 7/22/2014",
        "label": "Cancel Order",
        "fold": "important",
        "target": "ordercancel"
      },
      {
        "id": 7,
        "subject": "Approve new Payment Instruction",
        "from": "lucy@hotmail.com",
        "avatar": "assets/img/a2.jpg",
        "to": [
          { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
        ],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend condimentum nisl eu consectetur. Integer eleifend, nisl venenatis consequat iaculis, lectus arcu malesuada sem, dapibus porta quam lacus eu neque.",
        "date": "10:20 7/22/2014",
        "label": "Approve",
        "fold": "sent",
        "state": "unread",
        "target": "paymentapprove"
      },
      {
        "id": 6,
        "subject": "Check all the orders for cut-off",
        "from": "Jobs@jobhunter.com",
        "avatar": "assets/img/a3.jpg",
        "to": [
          { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
        ],
        "content": "Duis non malesuada est, quis congue nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend",
        "date": "3:20 7/22/2014",
        "label": "Check",
        "fold": "starred",
        "state": "unread",
        "target": "ordercancel"
      },
      {
        "id": 6,
        "subject": "Check all the orders for cut-off",
        "from": "Jobs@jobhunter.com",
        "avatar": "assets/img/a3.jpg",
        "to": [
          { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
        ],
        "content": "Duis non malesuada est, quis congue nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend",
        "date": "3:20 7/22/2014",
        "label": "Check",
        "fold": "starred",
        "state": "unread",
        "target": "ordercancel"
      },
      {
        "id": 6,
        "subject": "Check all the orders for cut-off",
        "from": "Jobs@jobhunter.com",
        "avatar": "assets/img/a3.jpg",
        "to": [
          { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
        ],
        "content": "Duis non malesuada est, quis congue nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend",
        "date": "3:20 7/22/2014",
        "label": "Check",
        "fold": "starred",
        "state": "unread",
        "target": "ordercancel"
      },
      {
        "id": 6,
        "subject": "Check all the orders for cut-off",
        "from": "Jobs@jobhunter.com",
        "avatar": "assets/img/a3.jpg",
        "to": [
          { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
        ],
        "content": "Duis non malesuada est, quis congue nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend",
        "date": "3:20 7/22/2014",
        "label": "Check",
        "fold": "starred",
        "state": "unread",
        "target": "ordercancel"
      }, {
        "id": 6,
        "subject": "Check all the orders for cut-off",
        "from": "Jobs@jobhunter.com",
        "avatar": "assets/img/a3.jpg",
        "to": [
          { "name": "Mogen", "email": "mogen.abc@hotmail.com" }
        ],
        "content": "Duis non malesuada est, quis congue nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend",
        "date": "3:20 7/22/2014",
        "label": "Check",
        "fold": "starred",
        "state": "unread",
        "target": "ordercancel"
      }
    ]
  }

  labelClass = (label) => {
    return {
      'b-l-info': label === 'New Order',
      'b-l-primary': label === 'Cancel Order',
      'b-l-warning': label === 'Approve',
      'b-l-danger': label === 'Check'
    };
  };

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

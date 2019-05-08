import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ServiceLocator } from '../../app.serviceLocator';
import { ModuleBaseComponent } from '../../../library/index';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
})
export class PageHomeComponent extends ModuleBaseComponent {

  constructor() {
    super("ProfileForm", "TestModule", ServiceLocator);    
  }
  CheckIfDirty() {
    return false;
  }
  Save() {

  }
  ngOnInit() {
    super.ngOnInit();
  }

}

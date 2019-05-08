/*
  Vipul Dhaigude        2017-01-01    Created
*/


import { OnChanges, Component, OnInit, OnDestroy, AfterViewInit, Input, Output, EventEmitter, ViewEncapsulation, forwardRef, ViewChild, Inject } from "@angular/core";
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor, NgForm, ControlContainer } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { SearchRepository, Options, ClientResponseDTO, AutoCompleteOptions, InputControlOptions, CardContainer } from '../../../tcmcore-objects/tcmcore.domain.objects';

import { TranslateService } from 'ng2-translate';
import { IThemeService } from "../../../tcmcore-objects/tcmcore.domain.interfaces";

@Component({
  selector: 'tcm-card',
  exportAs: 'tcm-card',
  templateUrl: 'card-container.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  encapsulation: ViewEncapsulation.None
})
export class CardContainerComponent implements OnInit {
  @Input() options: CardContainer = null;
  theme;
  color = 'purple';
  constructor(
    private translate: TranslateService
    , @Inject('IThemeService') private themeService: IThemeService) {
  }

  // <mat-option value = "primary" >
  //Purple
  //< /mat-option>
  //< mat - option value = "info" >
  //  Blue
  //  < /mat-option>
  //  < mat - option value = "success" >
  //    Green
  //    < /mat-option>
  //    < mat - option value = "warning" >
  //      Orange
  //      < /mat-option>
  //      < mat - option value = "danger" >
  //        Red
  //        < /mat-option>

  ngOnInit() {
    //this.themeService.theme.subscribe((val) => {
    //  if (val === '') {
    //    val = 'primary';
    //  }
    //  this.convertToColor(val);
    //});
    //this.convertToColor(this.themeService.currenttheme);

    this.themeService.theme.subscribe((val) => {
      this.theme = val;
      this.convertToColor(this.theme);
      console.log('navbar theme - ' + this.theme);
    });
    this.theme = this.themeService.currenttheme;
    this.convertToColor(this.theme);
  }
  convertToColor(theme) {
    switch (theme) {
      case "primary":
        this.color = 'purple';
        break;
      case "info":
        this.color = 'blue';
        break;
      case "warning":
        this.color = 'orange';
        break;
      case "success":
        this.color = 'green';
        break;
      case "danger":
        this.color = 'red';
        break;
      default:
        this.color = 'purple';
    }
  }
  
} 

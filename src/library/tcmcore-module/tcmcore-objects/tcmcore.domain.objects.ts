import { InjectionToken, LOCALE_ID } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { RouterModule, Route, NavigationEnd, Router } from '@angular/router';



export class ClientContext {
  constructor() {
    this.Roles = new Array<string>();
    this.IsAutheticated = false;
  }
  IsAutheticated: boolean;
  Context: ContextDTO;
  Token: string;
  Roles: Array<string>
}


export class UserCredentials {
  UserName: string;
  Password: string;
  RememberMe: boolean;
}

//export class Configuration {
//  WebApiUrl: string;
//  SignalRUrl: string;
//}


export class CacheData {
  GroupCode: string;
  Items: Array<CacheObject>;
}

export class MasterData {
  Key: string;
  Items: Array<CacheObject>;

}
export class CacheObject {
  Code: string;
  Text: string;
}

export interface RouteInfo extends Route {
  //constructor() {
  //  this.submenu = new Array<any>();
  //}
  path?: string;
  id?: string;
  ordinal?: number;
  title?: string;
  icon?: string;
  class?: string;
  display?: boolean;
  children?: RouteInfo[];
  //submenu: Array<any>;
}
export class UserSettings {
  constructor() {
    this.Value = new Array<PageSettings>();
  }
  Bucket: string; //App Id
  Key: string; //UserId
  Value: any;//Data

}
export enum DashboardViewType {
  TextBox,
  List,
  Table,
  PieChart,
  BarChart,
  LineChart,
  SimplePie
}

export class DashboardData {
  QueryId: string;
  Data: string;
  DashboardViewType: DashboardViewType
}

//export class TCMMessageData {
//  MessageId: string;
//  Data: string;
//}


export class PageSettings {
  constructor() {
    this.PageData = new Array<ControlSettings>();
  }
  PageId: string;
  PageData: Array<ControlSettings>;
}

export class ControlSettings {
  ControlId: string;
  ControlData: any;
}


export interface TCMCoreConfig {
  url: string
}

export class ContactDetails {
  Name: string;
  Email: string;
}

export enum MessageState {
  Unread,
  Read
}
export class MessageAttachment {
  Name: string;
  Url: string;
}

export class MessageWrapper {
  MessageId: string;
  Subject: string;
  From: string;
  To: Array<ContactDetails>;
  Avatar: string;
  Content: string;
  Date: Date;
  Label: string;
  Fold: string;
  State: MessageState;
  Target: string;
  Attach: Array<MessageAttachment>;
  Context: ContextDTO;
  Message: any;
}

export interface ContextDTO {
  ClientRowVersion?: string;
  CreatedDate?: any;
  ExtChannelId: string;
  ExtId: string;
  ExtPosReference?: string;
  ExtUser: string;
  LanguageId: string;
  RegDate?: string;
  RegInterface: string;
  RegToken: number;
  RegUser: string;
}

export interface GridObject {
  records: number;
  total: number;
  sEcho: string;
  rows: any;
  page?: number;
}

export class ExportInput {
  Columns: Array<ExportColumn>;
  Repository: SearchRepository;
  ExportName: string;
}

export class ExportColumn {
  IsDate: boolean;
  HeaderText: string;
  PropertyName: string;
}



export class KeyRequest {
  constructor() {
    this.names = new Array<string>();
  }
  names: Array<string>;
}

export interface MetaDataDTO {
  Domain: string;
  Action: string;
  Command: string;
  obj: Object;
}

export class CacheOption {
  constructor() {
    this.Cache = false;
  }
  Cache: boolean;
  Key: string;
  Options: any;
}

export class ClientRequestDTO {
  constructor() {
    this.MetaData = <MetaDataDTO>{};
    this.Context = <ContextDTO>{};
  }
  Data: any;
  MetaData: MetaDataDTO;
  Context: ContextDTO;
}

export class ErrorDTO {
  ErrorMessage: string;
  ErrorCode: string;
  ExtErrorPosReference: string;
  SystemErrorMessage: string;
}

export class ClientResponseDTO {
  constructor() {
  }
  Success: boolean;
  Data: any;
  ErrorList: Array<ErrorDTO>
}


export interface Options {
  ShowActive?: boolean;
  ShowInactive?: boolean;
  BrowseFrom?: number;
  BrowseTo?: number;
  SortField: string;
  SortOrder: string;
  CaseSensitive?: boolean;
}




//  <tcm-panel[options]="{id:'panel-1', title:'Fund Information'}" >
export enum ThemeColors {
  Primary = "purple",
  info = "blue",
  success = "green",
  warning = "orange",
  danger = "red",
}

export class CardContainer {
  title?: string;
  subtitle?: string;
  color?: ThemeColors
}
export class PanelContainer {
  title?: string;
  subtitle?: string;
  id?: string
}


export class AutoCompleteOptions {
  constructor() {
    this.searchCriteria = [];
    this.required = false;
    this.disabled = false;
    this.separator = '/ ';
  }
  id: string;
  separator?: string;
  disabled?: boolean;
  focus?: boolean;
  helpText?: string;
  class?: string;
  label?: string;
  required?: boolean;
  hintLabel?: string;
  hintProp?: string;
  tooltipProp?: string;
  displayProp: string;
  displayProp2?: string;
  searchCriteria: Array<any>
}

export class InputControlOptions {
  placeholder?: string;
  focus?: boolean;
  class?: string;
  helpText?: string;
  hintLabel?: string;
  hintText?: string;
  minlength?: number;
  maxlength?: number;
  id: string;
  isRequired?: boolean;
}
export class SelectControlOptions {
  placeholder?: string;
  class?: string;
  id: string;
  isRequired?: boolean;
  ItemName: string;
  ismultiple?: boolean;
  isDisabled?: boolean;
}

export interface GeneralCriterion {
  SearchConcatenatorId: string;
  SearchFieldId: string;
  SearchOperatorId: string;
  SearchValue: string;
  ExtPosReference: string;

}

export interface SimpleCriterion {
  SearchFieldId: string;
  SearchValue: string;
  ExtPosReference: string;
}


export class SearchRepository {
  constructor() {
    this.SearchCriteria = new Array<GeneralCriterion>();
    this.ListCriteria = new Array<SimpleCriterion>();
    this.Options = <Options>{};
  }
  Options: Options;
  SearchCriteria: Array<GeneralCriterion>;
  ListCriteria: Array<SimpleCriterion>;
  CriteriaType: string;
  TotalRecords: number;
}

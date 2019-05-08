import { Route } from '@angular/router';
export declare class ClientContext {
    constructor();
    IsAutheticated: boolean;
    Context: ContextDTO;
    Token: string;
    Roles: Array<string>;
}
export declare class UserCredentials {
    UserName: string;
    Password: string;
    RememberMe: boolean;
}
export declare class CacheData {
    GroupCode: string;
    Items: Array<CacheObject>;
}
export declare class MasterData {
    Key: string;
    Items: Array<CacheObject>;
}
export declare class CacheObject {
    Code: string;
    Text: string;
}
export interface RouteInfo extends Route {
    path?: string;
    id?: string;
    ordinal?: number;
    title?: string;
    icon?: string;
    class?: string;
    display?: boolean;
    children?: RouteInfo[];
}
export declare class UserSettings {
    constructor();
    Bucket: string;
    Key: string;
    Value: any;
}
export declare enum DashboardViewType {
    TextBox = 0,
    List = 1,
    Table = 2,
    PieChart = 3,
    BarChart = 4,
    LineChart = 5,
    SimplePie = 6,
}
export declare class DashboardData {
    QueryId: string;
    Data: string;
    DashboardViewType: DashboardViewType;
}
export declare class PageSettings {
    constructor();
    PageId: string;
    PageData: Array<ControlSettings>;
}
export declare class ControlSettings {
    ControlId: string;
    ControlData: any;
}
export interface TCMCoreConfig {
    url: string;
}
export declare class ContactDetails {
    Name: string;
    Email: string;
}
export declare enum MessageState {
    Unread = 0,
    Read = 1,
}
export declare class MessageAttachment {
    Name: string;
    Url: string;
}
export declare class MessageWrapper {
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
export declare class ExportInput {
    Columns: Array<ExportColumn>;
    Repository: SearchRepository;
    ExportName: string;
}
export declare class ExportColumn {
    IsDate: boolean;
    HeaderText: string;
    PropertyName: string;
}
export declare class KeyRequest {
    constructor();
    names: Array<string>;
}
export interface MetaDataDTO {
    Domain: string;
    Action: string;
    Command: string;
    obj: Object;
}
export declare class CacheOption {
    constructor();
    Cache: boolean;
    Key: string;
    Options: any;
}
export declare class ClientRequestDTO {
    constructor();
    Data: any;
    MetaData: MetaDataDTO;
    Context: ContextDTO;
}
export declare class ErrorDTO {
    ErrorMessage: string;
    ErrorCode: string;
    ExtErrorPosReference: string;
    SystemErrorMessage: string;
}
export declare class ClientResponseDTO {
    constructor();
    Success: boolean;
    Data: any;
    ErrorList: Array<ErrorDTO>;
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
export declare enum ThemeColors {
    Primary = "purple",
    info = "blue",
    success = "green",
    warning = "orange",
    danger = "red",
}
export declare class CardContainer {
    title?: string;
    subtitle?: string;
    color?: ThemeColors;
}
export declare class PanelContainer {
    title?: string;
    subtitle?: string;
    id?: string;
}
export declare class AutoCompleteOptions {
    constructor();
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
    searchCriteria: Array<any>;
}
export declare class InputControlOptions {
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
export declare class SelectControlOptions {
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
export declare class SearchRepository {
    constructor();
    Options: Options;
    SearchCriteria: Array<GeneralCriterion>;
    ListCriteria: Array<SimpleCriterion>;
    CriteriaType: string;
    TotalRecords: number;
}

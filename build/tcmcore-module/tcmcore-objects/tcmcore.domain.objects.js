/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ClientContext = /** @class */ (function () {
    function ClientContext() {
        this.Roles = new Array();
        this.IsAutheticated = false;
    }
    return ClientContext;
}());
export { ClientContext };
function ClientContext_tsickle_Closure_declarations() {
    /** @type {?} */
    ClientContext.prototype.IsAutheticated;
    /** @type {?} */
    ClientContext.prototype.Context;
    /** @type {?} */
    ClientContext.prototype.Token;
    /** @type {?} */
    ClientContext.prototype.Roles;
}
var UserCredentials = /** @class */ (function () {
    function UserCredentials() {
    }
    return UserCredentials;
}());
export { UserCredentials };
function UserCredentials_tsickle_Closure_declarations() {
    /** @type {?} */
    UserCredentials.prototype.UserName;
    /** @type {?} */
    UserCredentials.prototype.Password;
    /** @type {?} */
    UserCredentials.prototype.RememberMe;
}
var CacheData = /** @class */ (function () {
    function CacheData() {
    }
    return CacheData;
}());
export { CacheData };
function CacheData_tsickle_Closure_declarations() {
    /** @type {?} */
    CacheData.prototype.GroupCode;
    /** @type {?} */
    CacheData.prototype.Items;
}
var MasterData = /** @class */ (function () {
    function MasterData() {
    }
    return MasterData;
}());
export { MasterData };
function MasterData_tsickle_Closure_declarations() {
    /** @type {?} */
    MasterData.prototype.Key;
    /** @type {?} */
    MasterData.prototype.Items;
}
var CacheObject = /** @class */ (function () {
    function CacheObject() {
    }
    return CacheObject;
}());
export { CacheObject };
function CacheObject_tsickle_Closure_declarations() {
    /** @type {?} */
    CacheObject.prototype.Code;
    /** @type {?} */
    CacheObject.prototype.Text;
}
/**
 * @record
 */
export function RouteInfo() { }
function RouteInfo_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    RouteInfo.prototype.path;
    /** @type {?|undefined} */
    RouteInfo.prototype.id;
    /** @type {?|undefined} */
    RouteInfo.prototype.ordinal;
    /** @type {?|undefined} */
    RouteInfo.prototype.title;
    /** @type {?|undefined} */
    RouteInfo.prototype.icon;
    /** @type {?|undefined} */
    RouteInfo.prototype.class;
    /** @type {?|undefined} */
    RouteInfo.prototype.display;
    /** @type {?|undefined} */
    RouteInfo.prototype.children;
}
var UserSettings = /** @class */ (function () {
    function UserSettings() {
        this.Value = new Array();
    }
    return UserSettings;
}());
export { UserSettings };
function UserSettings_tsickle_Closure_declarations() {
    /** @type {?} */
    UserSettings.prototype.Bucket;
    /** @type {?} */
    UserSettings.prototype.Key;
    /** @type {?} */
    UserSettings.prototype.Value;
}
/** @enum {number} */
var DashboardViewType = {
    TextBox: 0,
    List: 1,
    Table: 2,
    PieChart: 3,
    BarChart: 4,
    LineChart: 5,
    SimplePie: 6,
};
export { DashboardViewType };
DashboardViewType[DashboardViewType.TextBox] = "TextBox";
DashboardViewType[DashboardViewType.List] = "List";
DashboardViewType[DashboardViewType.Table] = "Table";
DashboardViewType[DashboardViewType.PieChart] = "PieChart";
DashboardViewType[DashboardViewType.BarChart] = "BarChart";
DashboardViewType[DashboardViewType.LineChart] = "LineChart";
DashboardViewType[DashboardViewType.SimplePie] = "SimplePie";
var DashboardData = /** @class */ (function () {
    function DashboardData() {
    }
    return DashboardData;
}());
export { DashboardData };
function DashboardData_tsickle_Closure_declarations() {
    /** @type {?} */
    DashboardData.prototype.QueryId;
    /** @type {?} */
    DashboardData.prototype.Data;
    /** @type {?} */
    DashboardData.prototype.DashboardViewType;
}
var PageSettings = /** @class */ (function () {
    function PageSettings() {
        this.PageData = new Array();
    }
    return PageSettings;
}());
export { PageSettings };
function PageSettings_tsickle_Closure_declarations() {
    /** @type {?} */
    PageSettings.prototype.PageId;
    /** @type {?} */
    PageSettings.prototype.PageData;
}
var ControlSettings = /** @class */ (function () {
    function ControlSettings() {
    }
    return ControlSettings;
}());
export { ControlSettings };
function ControlSettings_tsickle_Closure_declarations() {
    /** @type {?} */
    ControlSettings.prototype.ControlId;
    /** @type {?} */
    ControlSettings.prototype.ControlData;
}
/**
 * @record
 */
export function TCMCoreConfig() { }
function TCMCoreConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    TCMCoreConfig.prototype.url;
}
var ContactDetails = /** @class */ (function () {
    function ContactDetails() {
    }
    return ContactDetails;
}());
export { ContactDetails };
function ContactDetails_tsickle_Closure_declarations() {
    /** @type {?} */
    ContactDetails.prototype.Name;
    /** @type {?} */
    ContactDetails.prototype.Email;
}
/** @enum {number} */
var MessageState = {
    Unread: 0,
    Read: 1,
};
export { MessageState };
MessageState[MessageState.Unread] = "Unread";
MessageState[MessageState.Read] = "Read";
var MessageAttachment = /** @class */ (function () {
    function MessageAttachment() {
    }
    return MessageAttachment;
}());
export { MessageAttachment };
function MessageAttachment_tsickle_Closure_declarations() {
    /** @type {?} */
    MessageAttachment.prototype.Name;
    /** @type {?} */
    MessageAttachment.prototype.Url;
}
var MessageWrapper = /** @class */ (function () {
    function MessageWrapper() {
    }
    return MessageWrapper;
}());
export { MessageWrapper };
function MessageWrapper_tsickle_Closure_declarations() {
    /** @type {?} */
    MessageWrapper.prototype.MessageId;
    /** @type {?} */
    MessageWrapper.prototype.Subject;
    /** @type {?} */
    MessageWrapper.prototype.From;
    /** @type {?} */
    MessageWrapper.prototype.To;
    /** @type {?} */
    MessageWrapper.prototype.Avatar;
    /** @type {?} */
    MessageWrapper.prototype.Content;
    /** @type {?} */
    MessageWrapper.prototype.Date;
    /** @type {?} */
    MessageWrapper.prototype.Label;
    /** @type {?} */
    MessageWrapper.prototype.Fold;
    /** @type {?} */
    MessageWrapper.prototype.State;
    /** @type {?} */
    MessageWrapper.prototype.Target;
    /** @type {?} */
    MessageWrapper.prototype.Attach;
    /** @type {?} */
    MessageWrapper.prototype.Context;
    /** @type {?} */
    MessageWrapper.prototype.Message;
}
/**
 * @record
 */
export function ContextDTO() { }
function ContextDTO_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    ContextDTO.prototype.ClientRowVersion;
    /** @type {?|undefined} */
    ContextDTO.prototype.CreatedDate;
    /** @type {?} */
    ContextDTO.prototype.ExtChannelId;
    /** @type {?} */
    ContextDTO.prototype.ExtId;
    /** @type {?|undefined} */
    ContextDTO.prototype.ExtPosReference;
    /** @type {?} */
    ContextDTO.prototype.ExtUser;
    /** @type {?} */
    ContextDTO.prototype.LanguageId;
    /** @type {?|undefined} */
    ContextDTO.prototype.RegDate;
    /** @type {?} */
    ContextDTO.prototype.RegInterface;
    /** @type {?} */
    ContextDTO.prototype.RegToken;
    /** @type {?} */
    ContextDTO.prototype.RegUser;
}
/**
 * @record
 */
export function GridObject() { }
function GridObject_tsickle_Closure_declarations() {
    /** @type {?} */
    GridObject.prototype.records;
    /** @type {?} */
    GridObject.prototype.total;
    /** @type {?} */
    GridObject.prototype.sEcho;
    /** @type {?} */
    GridObject.prototype.rows;
    /** @type {?|undefined} */
    GridObject.prototype.page;
}
var ExportInput = /** @class */ (function () {
    function ExportInput() {
    }
    return ExportInput;
}());
export { ExportInput };
function ExportInput_tsickle_Closure_declarations() {
    /** @type {?} */
    ExportInput.prototype.Columns;
    /** @type {?} */
    ExportInput.prototype.Repository;
    /** @type {?} */
    ExportInput.prototype.ExportName;
}
var ExportColumn = /** @class */ (function () {
    function ExportColumn() {
    }
    return ExportColumn;
}());
export { ExportColumn };
function ExportColumn_tsickle_Closure_declarations() {
    /** @type {?} */
    ExportColumn.prototype.IsDate;
    /** @type {?} */
    ExportColumn.prototype.HeaderText;
    /** @type {?} */
    ExportColumn.prototype.PropertyName;
}
var KeyRequest = /** @class */ (function () {
    function KeyRequest() {
        this.names = new Array();
    }
    return KeyRequest;
}());
export { KeyRequest };
function KeyRequest_tsickle_Closure_declarations() {
    /** @type {?} */
    KeyRequest.prototype.names;
}
/**
 * @record
 */
export function MetaDataDTO() { }
function MetaDataDTO_tsickle_Closure_declarations() {
    /** @type {?} */
    MetaDataDTO.prototype.Domain;
    /** @type {?} */
    MetaDataDTO.prototype.Action;
    /** @type {?} */
    MetaDataDTO.prototype.Command;
    /** @type {?} */
    MetaDataDTO.prototype.obj;
}
var CacheOption = /** @class */ (function () {
    function CacheOption() {
        this.Cache = false;
    }
    return CacheOption;
}());
export { CacheOption };
function CacheOption_tsickle_Closure_declarations() {
    /** @type {?} */
    CacheOption.prototype.Cache;
    /** @type {?} */
    CacheOption.prototype.Key;
    /** @type {?} */
    CacheOption.prototype.Options;
}
var ClientRequestDTO = /** @class */ (function () {
    function ClientRequestDTO() {
        this.MetaData = /** @type {?} */ ({});
        this.Context = /** @type {?} */ ({});
    }
    return ClientRequestDTO;
}());
export { ClientRequestDTO };
function ClientRequestDTO_tsickle_Closure_declarations() {
    /** @type {?} */
    ClientRequestDTO.prototype.Data;
    /** @type {?} */
    ClientRequestDTO.prototype.MetaData;
    /** @type {?} */
    ClientRequestDTO.prototype.Context;
}
var ErrorDTO = /** @class */ (function () {
    function ErrorDTO() {
    }
    return ErrorDTO;
}());
export { ErrorDTO };
function ErrorDTO_tsickle_Closure_declarations() {
    /** @type {?} */
    ErrorDTO.prototype.ErrorMessage;
    /** @type {?} */
    ErrorDTO.prototype.ErrorCode;
    /** @type {?} */
    ErrorDTO.prototype.ExtErrorPosReference;
    /** @type {?} */
    ErrorDTO.prototype.SystemErrorMessage;
}
var ClientResponseDTO = /** @class */ (function () {
    function ClientResponseDTO() {
    }
    return ClientResponseDTO;
}());
export { ClientResponseDTO };
function ClientResponseDTO_tsickle_Closure_declarations() {
    /** @type {?} */
    ClientResponseDTO.prototype.Success;
    /** @type {?} */
    ClientResponseDTO.prototype.Data;
    /** @type {?} */
    ClientResponseDTO.prototype.ErrorList;
}
/**
 * @record
 */
export function Options() { }
function Options_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    Options.prototype.ShowActive;
    /** @type {?|undefined} */
    Options.prototype.ShowInactive;
    /** @type {?|undefined} */
    Options.prototype.BrowseFrom;
    /** @type {?|undefined} */
    Options.prototype.BrowseTo;
    /** @type {?} */
    Options.prototype.SortField;
    /** @type {?} */
    Options.prototype.SortOrder;
    /** @type {?|undefined} */
    Options.prototype.CaseSensitive;
}
/** @enum {string} */
var ThemeColors = {
    Primary: "purple",
    info: "blue",
    success: "green",
    warning: "orange",
    danger: "red",
};
export { ThemeColors };
var CardContainer = /** @class */ (function () {
    function CardContainer() {
    }
    return CardContainer;
}());
export { CardContainer };
function CardContainer_tsickle_Closure_declarations() {
    /** @type {?} */
    CardContainer.prototype.title;
    /** @type {?} */
    CardContainer.prototype.subtitle;
    /** @type {?} */
    CardContainer.prototype.color;
}
var PanelContainer = /** @class */ (function () {
    function PanelContainer() {
    }
    return PanelContainer;
}());
export { PanelContainer };
function PanelContainer_tsickle_Closure_declarations() {
    /** @type {?} */
    PanelContainer.prototype.title;
    /** @type {?} */
    PanelContainer.prototype.subtitle;
    /** @type {?} */
    PanelContainer.prototype.id;
}
var AutoCompleteOptions = /** @class */ (function () {
    function AutoCompleteOptions() {
        this.searchCriteria = [];
        this.required = false;
        this.disabled = false;
        this.separator = '/ ';
    }
    return AutoCompleteOptions;
}());
export { AutoCompleteOptions };
function AutoCompleteOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    AutoCompleteOptions.prototype.id;
    /** @type {?} */
    AutoCompleteOptions.prototype.separator;
    /** @type {?} */
    AutoCompleteOptions.prototype.disabled;
    /** @type {?} */
    AutoCompleteOptions.prototype.focus;
    /** @type {?} */
    AutoCompleteOptions.prototype.helpText;
    /** @type {?} */
    AutoCompleteOptions.prototype.class;
    /** @type {?} */
    AutoCompleteOptions.prototype.label;
    /** @type {?} */
    AutoCompleteOptions.prototype.required;
    /** @type {?} */
    AutoCompleteOptions.prototype.hintLabel;
    /** @type {?} */
    AutoCompleteOptions.prototype.hintProp;
    /** @type {?} */
    AutoCompleteOptions.prototype.tooltipProp;
    /** @type {?} */
    AutoCompleteOptions.prototype.displayProp;
    /** @type {?} */
    AutoCompleteOptions.prototype.displayProp2;
    /** @type {?} */
    AutoCompleteOptions.prototype.searchCriteria;
}
var InputControlOptions = /** @class */ (function () {
    function InputControlOptions() {
    }
    return InputControlOptions;
}());
export { InputControlOptions };
function InputControlOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    InputControlOptions.prototype.placeholder;
    /** @type {?} */
    InputControlOptions.prototype.focus;
    /** @type {?} */
    InputControlOptions.prototype.class;
    /** @type {?} */
    InputControlOptions.prototype.helpText;
    /** @type {?} */
    InputControlOptions.prototype.hintLabel;
    /** @type {?} */
    InputControlOptions.prototype.hintText;
    /** @type {?} */
    InputControlOptions.prototype.minlength;
    /** @type {?} */
    InputControlOptions.prototype.maxlength;
    /** @type {?} */
    InputControlOptions.prototype.id;
    /** @type {?} */
    InputControlOptions.prototype.isRequired;
}
var SelectControlOptions = /** @class */ (function () {
    function SelectControlOptions() {
    }
    return SelectControlOptions;
}());
export { SelectControlOptions };
function SelectControlOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    SelectControlOptions.prototype.placeholder;
    /** @type {?} */
    SelectControlOptions.prototype.class;
    /** @type {?} */
    SelectControlOptions.prototype.id;
    /** @type {?} */
    SelectControlOptions.prototype.isRequired;
    /** @type {?} */
    SelectControlOptions.prototype.ItemName;
    /** @type {?} */
    SelectControlOptions.prototype.ismultiple;
    /** @type {?} */
    SelectControlOptions.prototype.isDisabled;
}
/**
 * @record
 */
export function GeneralCriterion() { }
function GeneralCriterion_tsickle_Closure_declarations() {
    /** @type {?} */
    GeneralCriterion.prototype.SearchConcatenatorId;
    /** @type {?} */
    GeneralCriterion.prototype.SearchFieldId;
    /** @type {?} */
    GeneralCriterion.prototype.SearchOperatorId;
    /** @type {?} */
    GeneralCriterion.prototype.SearchValue;
    /** @type {?} */
    GeneralCriterion.prototype.ExtPosReference;
}
/**
 * @record
 */
export function SimpleCriterion() { }
function SimpleCriterion_tsickle_Closure_declarations() {
    /** @type {?} */
    SimpleCriterion.prototype.SearchFieldId;
    /** @type {?} */
    SimpleCriterion.prototype.SearchValue;
    /** @type {?} */
    SimpleCriterion.prototype.ExtPosReference;
}
var SearchRepository = /** @class */ (function () {
    function SearchRepository() {
        this.SearchCriteria = new Array();
        this.ListCriteria = new Array();
        this.Options = /** @type {?} */ ({});
    }
    return SearchRepository;
}());
export { SearchRepository };
function SearchRepository_tsickle_Closure_declarations() {
    /** @type {?} */
    SearchRepository.prototype.Options;
    /** @type {?} */
    SearchRepository.prototype.SearchCriteria;
    /** @type {?} */
    SearchRepository.prototype.ListCriteria;
    /** @type {?} */
    SearchRepository.prototype.CriteriaType;
    /** @type {?} */
    SearchRepository.prototype.TotalRecords;
}

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/http'), require('@angular/common/http'), require('@angular/router'), require('ng2-charts'), require('@angular/material'), require('@ngrx/store'), require('ng2-translate'), require('@angular/material/form-field'), require('ng2-cache-service'), require('ngx-toastr'), require('angular-split'), require('rxjs/Observable'), require('rxjs/BehaviorSubject'), require('rxjs/Rx'), require('rxjs/add/operator/map'), require('file-saver'), require('@dharapvj/ngx-signalr'), require('rxjs/observable/timer'), require('rxjs/add/operator/mergeMap'), require('rxjs/observable/forkJoin'), require('@aspnet/signalr'), require('@ngrx/effects'), require('rxjs/operators')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/http', '@angular/common/http', '@angular/router', 'ng2-charts', '@angular/material', '@ngrx/store', 'ng2-translate', '@angular/material/form-field', 'ng2-cache-service', 'ngx-toastr', 'angular-split', 'rxjs/Observable', 'rxjs/BehaviorSubject', 'rxjs/Rx', 'rxjs/add/operator/map', 'file-saver', '@dharapvj/ngx-signalr', 'rxjs/observable/timer', 'rxjs/add/operator/mergeMap', 'rxjs/observable/forkJoin', '@aspnet/signalr', '@ngrx/effects', 'rxjs/operators'], factory) :
	(factory((global['tcm-base-module'] = {}),global.core,global.common,global.forms,global.http,global.http$1,global.router,global.ng2Charts,global.material,global.store,global.ng2Translate,global.formField,global.ng2CacheService,global.ngxToastr,global.angularSplit,global.Observable,global.BehaviorSubject,global.Rx,null,global.FileSaver,global.ngxSignalr,global.timer,null,global.forkJoin,global.signalR,global.effects,global.operators));
}(this, (function (exports,core,common,forms,http,http$1,router,ng2Charts,material,store,ng2Translate,formField,ng2CacheService,ngxToastr,angularSplit,Observable,BehaviorSubject,Rx,map,FileSaver,ngxSignalr,timer,mergeMap,forkJoin,signalR,effects,operators) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'footer-cmp',
                    template: "<footer class=\"footer\"> <div class=\"container\"> <nav class=\"pull-left\"> <ul> <li> <ng-content select=\"[app-name]\"></ng-content> </li> <li> <ng-content select=\"[app-about]\"></ng-content> </li> <li> <ng-content select=\"[app-license]\"></ng-content> </li> </ul> </nav> <div class=\"copyright pull-right\"> <ng-content select=\"[app-copyright]\"></ng-content>       </div> </div> </footer> "
                },] },
    ];
    return FooterComponent;
}());

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
var UserCredentials = /** @class */ (function () {
    function UserCredentials() {
    }
    return UserCredentials;
}());
var CacheData = /** @class */ (function () {
    function CacheData() {
    }
    return CacheData;
}());
var MasterData = /** @class */ (function () {
    function MasterData() {
    }
    return MasterData;
}());
var CacheObject = /** @class */ (function () {
    function CacheObject() {
    }
    return CacheObject;
}());
/**
 * @record
 */

var UserSettings = /** @class */ (function () {
    function UserSettings() {
        this.Value = new Array();
    }
    return UserSettings;
}());
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
var PageSettings = /** @class */ (function () {
    function PageSettings() {
        this.PageData = new Array();
    }
    return PageSettings;
}());
var ControlSettings = /** @class */ (function () {
    function ControlSettings() {
    }
    return ControlSettings;
}());
/**
 * @record
 */

var ContactDetails = /** @class */ (function () {
    function ContactDetails() {
    }
    return ContactDetails;
}());
/** @enum {number} */
var MessageState = {
    Unread: 0,
    Read: 1,
};
MessageState[MessageState.Unread] = "Unread";
MessageState[MessageState.Read] = "Read";
var MessageAttachment = /** @class */ (function () {
    function MessageAttachment() {
    }
    return MessageAttachment;
}());
var MessageWrapper = /** @class */ (function () {
    function MessageWrapper() {
    }
    return MessageWrapper;
}());
/**
 * @record
 */

/**
 * @record
 */

var ExportInput = /** @class */ (function () {
    function ExportInput() {
    }
    return ExportInput;
}());
var ExportColumn = /** @class */ (function () {
    function ExportColumn() {
    }
    return ExportColumn;
}());
var KeyRequest = /** @class */ (function () {
    function KeyRequest() {
        this.names = new Array();
    }
    return KeyRequest;
}());
/**
 * @record
 */

var CacheOption = /** @class */ (function () {
    function CacheOption() {
        this.Cache = false;
    }
    return CacheOption;
}());
var ClientRequestDTO = /** @class */ (function () {
    function ClientRequestDTO() {
        this.MetaData = /** @type {?} */ ({});
        this.Context = /** @type {?} */ ({});
    }
    return ClientRequestDTO;
}());
var ErrorDTO = /** @class */ (function () {
    function ErrorDTO() {
    }
    return ErrorDTO;
}());
var ClientResponseDTO = /** @class */ (function () {
    function ClientResponseDTO() {
    }
    return ClientResponseDTO;
}());
/**
 * @record
 */

/** @enum {string} */
var ThemeColors = {
    Primary: "purple",
    info: "blue",
    success: "green",
    warning: "orange",
    danger: "red",
};
var CardContainer = /** @class */ (function () {
    function CardContainer() {
    }
    return CardContainer;
}());
var PanelContainer = /** @class */ (function () {
    function PanelContainer() {
    }
    return PanelContainer;
}());
var AutoCompleteOptions = /** @class */ (function () {
    function AutoCompleteOptions() {
        this.searchCriteria = [];
        this.required = false;
        this.disabled = false;
        this.separator = '/ ';
    }
    return AutoCompleteOptions;
}());
var InputControlOptions = /** @class */ (function () {
    function InputControlOptions() {
    }
    return InputControlOptions;
}());
var SelectControlOptions = /** @class */ (function () {
    function SelectControlOptions() {
    }
    return SelectControlOptions;
}());
/**
 * @record
 */

/**
 * @record
 */

var SearchRepository = /** @class */ (function () {
    function SearchRepository() {
        this.SearchCriteria = new Array();
        this.ListCriteria = new Array();
        this.Options = /** @type {?} */ ({});
    }
    return SearchRepository;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(themeService, userSettings, dialogRef, data) {
        this.themeService = themeService;
        this.userSettings = userSettings;
        this.dialogRef = dialogRef;
        this.data = data;
        this.globalSettings = null;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SettingsComponent.prototype.changeLanguage = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.globalSettings.PageData.filter((function (ctrl) { return ctrl.ControlId === 'Lang'; }))[0].ControlData = this.selectedLang;
        this.userSettings.UpdatePageSettings("Global", this.globalSettings);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SettingsComponent.prototype.changeTheme = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.globalSettings.PageData.filter((function (ctrl) { return ctrl.ControlId === 'Theme'; }))[0].ControlData = event.value;
        this.userSettings.UpdatePageSettings("Global", this.globalSettings);
        this.themeService.change(event.value);
    };
    /**
     * @return {?}
     */
    SettingsComponent.prototype.onClose = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @return {?}
     */
    SettingsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selectedLang = 'sv-SE';
        this.selectedTheme = 'primary';
        this.globalSettings = this.userSettings.GetUserSettingsForPage("Global");
        if (!this.globalSettings) {
            this.globalSettings = new PageSettings();
            this.globalSettings.PageId = 'Global';
        }
        var /** @type {?} */ lang = this.globalSettings.PageData.filter(function (ctrl) { return ctrl.ControlId === 'Lang'; })[0];
        if (lang) {
            this.selectedLang = lang.ControlData;
        }
        else {
            this.globalSettings.PageData.push({ ControlId: 'Lang', ControlData: this.selectedLang });
            this.userSettings.UpdatePageSettings("Global", this.globalSettings);
        }
        
        var /** @type {?} */ theme = this.globalSettings.PageData.filter(function (ctrl) { return ctrl.ControlId === 'Theme'; })[0];
        if (theme) {
            this.selectedTheme = theme.ControlData;
        }
        else {
            this.globalSettings.PageData.push({ ControlId: 'Theme', ControlData: this.selectedTheme });
            this.userSettings.UpdatePageSettings("Global", this.globalSettings);
        }
    };
    SettingsComponent.decorators = [
        { type: core.Component, args: [{ selector: 'settings-cmp',
                    template: "<div mat-dialog-title>Settings</div> <mat-dialog-content> <div class=\"p-md\"> <div class=\"row text-center\"> <div class=\"col-md-3\"> <mat-form-field> <mat-select (change)=\"changeTheme($event)\" placeholder=\"{{'Themes'}}\" [(value)]=\"selectedTheme\" name=\"theme\"> <mat-option value=\"primary\"> Purple </mat-option> <mat-option value=\"info\"> Blue </mat-option> <mat-option value=\"success\"> Green </mat-option> <mat-option value=\"warning\"> Orange </mat-option> <mat-option value=\"danger\"> Red </mat-option> </mat-select> </mat-form-field> </div> <div class=\"col-md-3\"> <button mat-button>Clear cache</button> </div> </div> </div> </mat-dialog-content> <div class=\"dialog-bottom\"> <button class=\"btn-dialog\" (click)=\"onClose()\">Close</button> </div> "
                },] },
    ];
    /** @nocollapse */
    SettingsComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['IThemeService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IUserSettingsService',] },] },
        { type: material.MatDialogRef, },
        { type: undefined, decorators: [{ type: core.Inject, args: [material.MAT_DIALOG_DATA,] },] },
    ]; };
    return SettingsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var getCoreState = store.createFeatureSelector('core');
var getInboxItems = store.createSelector(getCoreState, function (state) { return state.TCMMessages; });
var getSelectedInboxItem = store.createSelector(getCoreState, function (state) { return state.CurrentInboxItem; });
var getDashboardItems = store.createSelector(getCoreState, function (state) { return state.DashboardMessages; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created - Experimental
*/
var VoiceSearch = /** @class */ (function () {
    function VoiceSearch(dataService, dialogRef, data) {
        var _this = this;
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.recognizing = false;
        this.final_transcript = '';
        this.info = '';
        this.recognition = null;
        this.interim_transcript = '';
        this.status = 0;
        this.imagePath = "assets/img/mic.gif";
        this.options = [];
        this.searchObject = [];
        this.ShowSearchResult = function () {
            var /** @type {?} */ result = _this.final_transcript.slice(0, -1);
            _this.searchObject = [];
            var /** @type {?} */ split_Result = result.trim().toLowerCase().split('and');
            for (var /** @type {?} */ i = 0; i < split_Result.length; i++) {
                var /** @type {?} */ t = (split_Result[i].trim()[0] == '|') ? split_Result[i].trim().slice(1) : split_Result[i].trim();
                var /** @type {?} */ searchString = t.split('|');
                var /** @type {?} */ temp = searchString[0];
                var /** @type {?} */ ss1 = [];
                for (var /** @type {?} */ j = 0; j < _this.options.length; j++) {
                    if (!temp.startsWith(_this.options[j].substring(0, 3).trim().toLowerCase()))
                        continue;
                    console.log(temp);
                    console.log(_this.options[j]);
                    ss1.push(_this.VipulCompare(temp, _this.options[j]));
                }
                if (ss1.length > 0) {
                    ss1.sort(function (a, b) { return (a.counter > b.counter) ? 1 : ((b.counter > a.counter) ? -1 : 0); });
                    _this.searchObject.push({ 'SearchFieldId': ss1[ss1.length - 1].option, 'SearchValue': searchString[1] });
                }
            }
        };
        this.updateSearch = function () {
            _this.ShowSearchResult();
        };
        this.triggerSearch = function () {
            //this.ShowSearchResult();
            var /** @type {?} */ repo = _this.SearchHolderByNameRepo(_this.searchObject);
            _this.Find(repo).subscribe(function (result) {
            });
        };
        this.cleanData = function () {
            _this.interim_transcript = '';
            _this.final_transcript = '';
        };
        this.startRecording = function (event) {
            if (_this.recognizing) {
                _this.recognition.stop();
                return;
            }
            _this.final_transcript = '';
            _this.recognition.lang = 'en-IN';
            _this.recognition.start();
            _this.ignore_onend = false;
            _this.final_transcript = '';
            _this.interim_transcript = '';
            _this.imagePath = 'assets/img/mic-slash.gif';
            _this.status = 5;
            //showButtons('none');
            //showButtons('none');
            _this.start_timestamp = event.timeStamp;
        };
    }
    /**
     * @return {?}
     */
    VoiceSearch.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.options = ['FirstName', 'LastName', 'IdentificationId', 'NationalRegistrationId'];
        if (!('webkitSpeechRecognition' in window)) {
            //upgrade();
        }
        else {
            //start_button.style.display = 'inline-block';
            var /** @type {?} */ self = this;
            //var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
            //var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
            //var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
            var _a = /** @type {?} */ (window), webkitSpeechRecognition = _a.webkitSpeechRecognition, webkitSpeechGrammarList = _a.webkitSpeechGrammarList;
            this.recognition = new webkitSpeechRecognition();
            //var speechRecognitionList = new webkitSpeechGrammarList();
            //speechRecognitionList.addFromString(this.grammar, 1);
            //this.recognition.grammars = speechRecognitionList;
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.recognition.maxAlternatives = 1;
            this.recognition.onaudioend = function () {
                console.log('onaudioend');
                console.log(event);
            }, this.recognition.onaudiostart = function () {
                    console.log('onaudiostart');
                    console.log(event);
                }, this.recognition.onnomatch = function () {
                    console.log('onnomatch');
                    console.log(event);
                }, this.recognition.onsounded = function () {
                    console.log('onsounded');
                    console.log(event);
                }, this.recognition.onsoundstart = function () {
                    console.log('onsoundstart');
                    console.log(event);
                }, this.recognition.onspeechend = function () {
                    console.log('onspeechend');
                    console.log(event);
                }, this.recognition.onspeechstart = function () {
                    console.log('onspeechstart');
                    console.log(event);
                }, this.recognition.onstart = function () {
                    console.log('onstart');
                    console.log(event);
                    self.recognizing = true;
                    self.status = 1;
                    self.imagePath = 'assets/img/mic-animate.gif';
                };
            this.recognition.onerror = function (event) {
                console.log('onerror');
                console.log(event);
                if (event.error === 'no-speech') {
                    _this.imagePath = 'assets/img/mic.gif';
                    //showInfo('info_no_speech');
                    //showInfo('info_no_speech');
                    _this.status = 2;
                    _this.ignore_onend = true;
                }
                if (event.error === 'audio-capture') {
                    _this.imagePath = 'assets/img/mic.gif';
                    //showInfo('info_no_microphone');
                    //showInfo('info_no_microphone');
                    _this.status = 3;
                    _this.ignore_onend = true;
                }
                if (event.error === 'not-allowed') {
                    if (event.timeStamp - _this.start_timestamp < 100) {
                        //showInfo('info_blocked');
                        //showInfo('info_blocked');
                        _this.status = 7;
                    }
                    else {
                        //showInfo('info_denied');
                        //showInfo('info_denied');
                        _this.status = 6;
                    }
                    _this.ignore_onend = true;
                }
            };
            this.recognition.onend = function () {
                console.log('onspeechstart');
                console.log(event);
                self.recognizing = false;
                if (self.ignore_onend) {
                    return;
                }
                self.imagePath = 'assets/img/mic.gif';
                if (!self.final_transcript) {
                    //showInfo('info_start');
                    self.status = 1;
                    return;
                }
                //showInfo('');
                self.status = 0;
            };
            this.recognition.onresult = function (event) {
                console.log('onresult');
                console.log(event);
                console.log(event.results[event.results.length - 1][0].transcript + ' ' + event.results[event.results.length - 1][0].confidence);
                self.interim_transcript = '';
                for (var /** @type {?} */ i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        if (event.results[i][0].transcript.trim().toLowerCase() === 'done' && event.results[i][0].confidence > 0.8) {
                            self.ShowSearchResult();
                            return;
                        }
                        self.final_transcript += event.results[i][0].transcript + '|';
                    }
                    else {
                        self.interim_transcript += event.results[i][0].transcript;
                    }
                }
            };
        }
    };
    /**
     * @param {?} searchRepository
     * @return {?}
     */
    VoiceSearch.prototype.Find = /**
     * @param {?} searchRepository
     * @return {?}
     */
    function (searchRepository) {
        var /** @type {?} */ request = new ClientRequestDTO();
        request.MetaData.Action = "FindAsync";
        request.Data = searchRepository;
        return this.dataService.Post("NLuxHolder", request, null);
    };
    /**
     * @param {?} searchObject
     * @return {?}
     */
    VoiceSearch.prototype.SearchHolderByNameRepo = /**
     * @param {?} searchObject
     * @return {?}
     */
    function (searchObject) {
        var /** @type {?} */ repository = new SearchRepository();
        repository.CriteriaType = 'BySearch';
        repository.Options = /** @type {?} */ ({});
        repository.Options.BrowseFrom = 1;
        repository.Options.BrowseTo = 100;
        repository.Options.CaseSensitive = false;
        repository.Options.ShowActive = true;
        repository.Options.ShowInactive = true;
        repository.Options.SortOrder = 'A';
        repository.Options.SortField = 'HolderId';
        repository.SearchCriteria = [];
        for (var /** @type {?} */ i = 0; i < searchObject.length; i++) {
            repository.SearchCriteria.push({
                SearchConcatenatorId: 'OR',
                SearchFieldId: searchObject[i].SearchFieldId,
                SearchOperatorId: 'BEGINS',
                SearchValue: searchObject[i].SearchValue,
                ExtPosReference: null
            });
        }
        return repository;
    };
    /**
     * @param {?} searchString
     * @param {?} baseString
     * @return {?}
     */
    VoiceSearch.prototype.VipulCompare = /**
     * @param {?} searchString
     * @param {?} baseString
     * @return {?}
     */
    function (searchString, baseString) {
        var /** @type {?} */ matchCounter = 0;
        var /** @type {?} */ temp;
        searchString = searchString.trim().toLowerCase().replace(/\s/g, '');
        temp = baseString.trim().toLowerCase().replace(/\s/g, '');
        for (var /** @type {?} */ i = 0; i < baseString.length; i++) {
            if (searchString[i]) {
                if (searchString[i] === baseString[i])
                    matchCounter++;
                else
                    matchCounter--;
            }
        }
        return { counter: matchCounter, option: baseString };
    };
    /**
     * @return {?}
     */
    VoiceSearch.prototype.onClose = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    VoiceSearch.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'voice-search',
                    template: "<mat-dialog-content> <div id=\"info\"> <p *ngIf=\"status == 1\" id=\"info_start\">Click on the microphone icon and begin speaking.</p> <p *ngIf=\"status == 2\" id=\"info_speak_now\">Speak now.</p> <p *ngIf=\"status == 3\" id=\"info_no_speech\"> No speech was detected. You may need to adjust your <a href=\"//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892\"> microphone settings </a>. </p> <p *ngIf=\"status == 4\" id=\"info_no_microphone\" style=\"display:none\"> No microphone was found. Ensure that a microphone is installed and that <a href=\"//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892\"> microphone settings </a> are configured correctly. </p> <p *ngIf=\"status == 5\" id=\"info_allow\">Click the \"Allow\" button above to enable your microphone.</p> <p *ngIf=\"status == 6\" id=\"info_denied\">Permission to use microphone was denied.</p> <p *ngIf=\"status == 7\" id=\"info_blocked\"> Permission to use microphone is blocked. To change, go to chrome://settings/contentExceptions#media-stream </p> <p *ngIf=\"status == 8\" id=\"info_upgrade\"> Web Speech API is not supported by this browser. Upgrade to <a href=\"//www.google.com/chrome\">Chrome</a> version 25 or later. </p> </div> <div class=\"right\"> <button id=\"start_button\" (click)=\"startRecording($event)\"> <img id=\"start_img\" [src]=\"imagePath\" alt=\"Start\"> </button> <button id=\"start_button\" (click)=\"cleanData($event)\"> X </button> </div> <div id=\"results\"> <div *ngFor=\"let item of searchObject; let i = index\"> <select [(ngModel)]=\"item.SearchFieldId\"> <option *ngFor=\"let c of options\" [ngValue]=\"c\">{{c}}</option> </select> <input type=\"text\" [(ngModel)]=\"item.SearchValue\" /> <br /> </div> </div> <div id=\"results\"> <textarea rows=\"10\" style=\"width: 100%; border: none;\" id=\"final_span\" [innerHtml]=\"final_transcript\"></textarea> <span id=\"interim_span\" [innerHtml]=\"interim_transcript\" class=\"interim\"></span> <p> </div> <div class=\"right\"> <button class=\"btn btn-addon\" (click)=\"updateSearch($event)\">Update</button> <button class=\"btn btn-accent\" (click)=\"triggerSearch($event)\">Search</button> </div> <div> </div> </mat-dialog-content> ",
                    styles: ["* { font-family: Verdana, Arial, sans-serif; } a:link { color: #000; text-decoration: none; } a:visited { color: #000; } a:hover { color: #33F; } .button { background: -webkit-linear-gradient(top,#008dfd 0,#0370ea 100%); border: 1px solid #076bd2; border-radius: 3px; color: #fff; display: none; font-size: 13px; font-weight: bold; line-height: 1.3; padding: 8px 25px; text-align: center; text-shadow: 1px 1px 1px #076bd2; letter-spacing: normal; } .center { padding: 10px; text-align: center; } .final { color: black; padding-right: 3px; } .interim { color: gray; } .info { font-size: 14px; text-align: center; color: #777; display: none; } .right { float: right; } .sidebyside { display: inline-block; width: 45%; min-height: 40px; text-align: left; vertical-align: top; } #headline { font-size: 40px; font-weight: 300; } #info { font-size: 20px; text-align: center; color: #777; /*visibility: hidden;*/ } #results { font-size: 14px; font-weight: bold; border: 1px solid #ddd; padding: 15px; text-align: left; min-height: 150px; } #start_button { border: 0; background-color: transparent; padding: 0; } "],
                    encapsulation: core.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    VoiceSearch.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['IDataService',] },] },
        { type: material.MatDialogRef, },
        { type: undefined, decorators: [{ type: core.Inject, args: [material.MAT_DIALOG_DATA,] },] },
    ]; };
    return VoiceSearch;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router$$1, config, location, translate, messageService, themeService, userSettings, dialog, auth, store$$1) {
        var _this = this;
        this.router = router$$1;
        this.config = config;
        this.location = location;
        this.translate = translate;
        this.messageService = messageService;
        this.themeService = themeService;
        this.userSettings = userSettings;
        this.dialog = dialog;
        this.auth = auth;
        this.store = store$$1;
        this.menuItem = /** @type {?} */ ({});
        this.notification = new core.EventEmitter();
        this.pendingMessages = 0;
        this.isAutheticated = false;
        this.inboxItems = null;
        this.isCollapsed = true;
        this.showSettings = false;
        this.showVoiceSearch = false;
        this.showNotification = false;
        this.convertCharCodes = function (stringToFormat) {
            return stringToFormat.replace(/&#(\d+);/g, function (match, number) { return String.fromCharCode(number); });
        };
        this.stickNavbarOntop = function () {
            var /** @type {?} */ scroll = $(window).scrollTop();
            if (scroll >= 260) {
                if (!$('.navbar-fixed-on-scroll').hasClass('navbar-fixed-top'))
                    $('.navbar-fixed-on-scroll').addClass('navbar-fixed-top');
            }
            else {
                if ($('.navbar-fixed-on-scroll').hasClass('navbar-fixed-top'))
                    $('.navbar-fixed-on-scroll').removeClass('navbar-fixed-top');
            }
        };
        this.setUserName = function (name) {
            _this.userName = name;
        };
        //, @Inject('INavigationService') private navService: INavigationService
        this.location = location;
        this.Routes = this.router.config;
        //messageService.newTCMMessage.subscribe((m) => {
        //  this.pendingMessages = this.messageService.GetMessages().length;
        //})
        this.router.events.subscribe(function (eventType) {
            if (eventType instanceof router.NavigationEnd) {
                _this.processSelection(eventType);
            }
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    NavbarComponent.prototype.processSelection = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _loop_1 = function (i) {
            var /** @type {?} */ path = item.url.split("/")[1];
            if (path.trim() === "") {
                var /** @type {?} */ temp = item.urlAfterRedirects;
                if (temp.charAt(0) === '/')
                    temp = temp.substr(1);
                var /** @type {?} */ m_1 = temp.split("/")[0];
                this_1.menuItem = this_1.listTitles.find(function (x) { return x.path === m_1; });
                if (this_1.menuItem.children)
                    this_1.menuItem.children.sort(function (a, b) { return a.ordinal - b.ordinal; });
                return "break";
            }
            else if (this_1.listTitles[i].path === path) {
                this_1.menuItem = this_1.listTitles[i];
                if (this_1.menuItem.children)
                    this_1.menuItem.children.sort(function (a, b) { return a.ordinal - b.ordinal; });
                return "break";
            }
        };
        var this_1 = this;
        for (var /** @type {?} */ i = 0; i < this.listTitles.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
    };
    /**
     * @param {?} text
     * @return {?}
     */
    NavbarComponent.prototype.translateDecode = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return this.convertCharCodes(this.translate.instant(text));
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.openNotification = /**
     * @return {?}
     */
    function () {
        this.notification.next();
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ dialogRef = this.dialog.open(SettingsComponent, {
            width: '1000px',
            data: { theme: this.theme }
        });
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.openDialogVoice = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ dialogRef = this.dialog.open(VoiceSearch, {
            width: '1000px',
            data: { theme: this.theme }
        });
    };
    /**
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    NavbarComponent.prototype.CombinePaths = /**
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    function (parent, child) {
        return parent + '/' + child;
    };
    /**
     * @param {?} mainMenuItem
     * @return {?}
     */
    NavbarComponent.prototype.MainMenuSelect = /**
     * @param {?} mainMenuItem
     * @return {?}
     */
    function (mainMenuItem) {
        this.menuItem = mainMenuItem;
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        //this.navService.Init(this.Routes);
        this.homePath = "pagenotfound";
        this.listTitles = this.Routes.filter(function (listTitle) { return listTitle; });
        //Sort
        this.listTitles.sort(function (a, b) { return a.ordinal - b.ordinal; });
        if (this.listTitles) {
            var /** @type {?} */ homePathRoute = this.listTitles.find(function (element) { return element.path === ''; });
            this.homePath = homePathRoute ? homePathRoute.redirectTo : "pagenotfound";
        }
        //this.auth.onContext.subscribe((val: any) => {
        //  if (val)
        //    this.userName = val.RegUser;
        //});
        this.inboxItems = this.store.pipe(store.select(getInboxItems));
        var /** @type {?} */ context = this.auth.GetUserContext();
        this.userName = context ? context.RegUser : ''; // this.auth.GetUserContext().RegUser;
        //  .subscribe(items =>
        //  this.pendingMessages = items.length
        //);
        this.auth.userAutheticated.subscribe(function (result) {
            if (result) {
                _this.userName = _this.auth.GetUserContext().RegUser;
                _this.isAutheticated = _this.auth.IsAuthenticated();
            }
        });
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            var /** @type {?} */ globalSettings = _this.userSettings.GetUserSettingsForPage("Global");
            (globalSettings) ? _this.theme = globalSettings.PageData.filter(function (ctrl) { return ctrl.ControlId === 'Theme'; })[0].ControlData : _this.theme = 'primary';
        });
        this.themeService.theme.subscribe(function (val) {
            _this.theme = val;
            console.log('navbar theme - ' + _this.theme);
        });
        this.theme = this.themeService.currenttheme;
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    NavbarComponent.prototype.changeTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.themeService.change(theme);
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.getTitle = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var /** @type {?} */ item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'navbar-cmp',
                    template: "<div id=\"mainNav\" class=\"navbar\" [ngClass]=\"'navbar-'+ theme\" style=\"margin-bottom:0px\"> <div class=\"container\" style=\"float:left !important\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" aria-expanded=\"false\" aria-controls=\"navmenu\" (click)=\"isCollapsed=!isCollapsed\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> <a class=\"navbar-brand pull-left\" target=\"_blank\" [routerLink]=\"homePath\" style=\"margin-right: 50px;\"> <img style=\"max-height: 36px;\" alt=\".\" src=\"assets/img/Tieto_logo_white.png\"> </a> </div> <div class=\"navbar-collapse\" [ngClass]=\"{'collapse':isCollapsed}\" id=\"navmenu\"> <ul class=\"nav navbar-nav\"> <li *ngFor=\"let menuItem of listTitles\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\"> <a [routerLink]=\"[menuItem.path]\" *ngIf=\"menuItem.display\"> <p>{{translateDecode(menuItem.title)}}</p> </a> </li> </ul> <ul class=\"nav navbar-nav navbar-right\"> <li *ngIf=\"showVoiceSearch\"> <a (click)=\"openDialogVoice()\"> <i class=\"material-icons\">settings_voice</i> </a> </li> <li *ngIf=\"showNotification\"> <a routerLink=\"inbox\"> <i class=\"material-icons\">add_alert</i> <b class=\"badge bg-danger up\">{{(inboxItems | async)?.length}}</b> </a> </li> <li style =\"cursor: default;\">  <span style=\"margin-right:20px\"> <i class=\"material-icons\" >account_circle</i> {{userName}} </span> </li> <li *ngIf=\"showSettings\"> <a (click)=\"openDialog()\"> <i class=\"material-icons\">settings</i> </a> </li> </ul> </div> </div> </div> <div class=\"box-cell md-whiteframe-z1 no-radius\" id=\"subnav\"> <ul class=\"subNav\"> <!-- ngRepeat: n in nav --> <li routerLinkActive=\"active\" class=\"{{submenuItem.class}}\" *ngFor=\"let submenuItem of menuItem.children\"> <a routerLink=\"{{menuItem.path}}/{{submenuItem.path}}\" *ngIf=\"submenuItem.display\"> {{translateDecode(submenuItem.title)}} </a> </li> </ul> </div> "
                },] },
    ];
    /** @nocollapse */
    NavbarComponent.ctorParameters = function () { return [
        { type: router.Router, },
        { type: undefined, decorators: [{ type: core.Inject, args: [router.ROUTER_CONFIGURATION,] },] },
        { type: common.Location, },
        { type: ng2Translate.TranslateService, },
        { type: undefined, decorators: [{ type: core.Inject, args: ['ITCMWebSocketService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IThemeService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IUserSettingsService',] },] },
        { type: material.MatDialog, },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IAuthService',] },] },
        { type: store.Store, },
    ]; };
    NavbarComponent.propDecorators = {
        "showSettings": [{ type: core.Input },],
        "showVoiceSearch": [{ type: core.Input },],
        "showNotification": [{ type: core.Input },],
    };
    return NavbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var VerticleNavbarComponent = /** @class */ (function () {
    function VerticleNavbarComponent() {
    }
    /**
     * @param {?} id
     * @return {?}
     */
    VerticleNavbarComponent.prototype.onClick = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var /** @type {?} */ ele = document.querySelector("#" + id);
        if (ele) {
            ele.scrollIntoView();
            window.scrollBy(0, -130);
        }
    };
    /**
     * @return {?}
     */
    VerticleNavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    VerticleNavbarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'verticle-navbar-cmp',
                    template: "<nav id=\"cd-vertical-nav\"> <ul> <li *ngFor=\"let item of VeticleRoutes, let idx = index\"> <a (click)=\"onClick(item.id)\"> <span class=\"cd-dot\"></span> <span class=\"cd-label\">{{item.text}}</span> </a> </li> </ul> </nav> "
                },] },
    ];
    /** @nocollapse */
    VerticleNavbarComponent.ctorParameters = function () { return []; };
    VerticleNavbarComponent.propDecorators = {
        "VeticleRoutes": [{ type: core.Input },],
    };
    return VerticleNavbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-01    Created
  Displays error on the top of the page.
  This component takes list of ERRORDTO as parameters.
*/
var ErrorDivComponent = /** @class */ (function () {
    function ErrorDivComponent() {
        var _this = this;
        this.errordivclosed = new core.EventEmitter();
        this.close = function () {
            _this.Errors = null;
            _this.errordivclosed.next();
        };
    }
    ErrorDivComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'error-div',
                    template: "<div class=\"alert alert-danger\" *ngIf=\"Errors\"> <div class=\"container-fluid\"> <div class=\"alert-icon\"> <i class=\"material-icons\">error_outline</i> </div> <button (click)=\"close()\" type=\"button\" class=\"close\" aria-label=\"Close\"> <span aria-hidden=\"true\"><i class=\"material-icons\">clear</i></span> </button> <b>Error Alert:</b> <ul type=\"disc\"> <li *ngFor=\"let err of Errors\"> {{err.ErrorMessage}} </li> </ul> </div> </div> ",
                },] },
    ];
    /** @nocollapse */
    ErrorDivComponent.ctorParameters = function () { return []; };
    ErrorDivComponent.propDecorators = {
        "Errors": [{ type: core.Input },],
    };
    return ErrorDivComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-25    Created
  Adjust the height of the division based on the screen height.
*/
var AutoHeightDirective = /** @class */ (function () {
    function AutoHeightDirective(element) {
        var _this = this;
        this.element = element;
        this.calculateElementHeight = function () {
            var /** @type {?} */ etop = $(_this.element.nativeElement).offset().top;
            var /** @type {?} */ actual_top = etop - $(window).scrollTop();
            var /** @type {?} */ windowHeight = $(window).height();
            _this.element.nativeElement.style.maxHeight = ((windowHeight - actual_top)) + "px";
            
            _this.element.nativeElement.style.overflow = "hidden";
            _this.element.nativeElement.style.minHeight = ((windowHeight - actual_top)) + "px";
            
        };
    }
    /**
     * @return {?}
     */
    AutoHeightDirective.prototype.onMouseOver = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ part = this.element.nativeElement.style.overflow = "auto";
    };
    /**
     * @return {?}
     */
    AutoHeightDirective.prototype.onMouseOut = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ part = this.element.nativeElement.style.overflow = "hidden";
    };
    /**
     * @return {?}
     */
    AutoHeightDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.calculateElementHeight();
        $(window).resize(this.calculateElementHeight);
    };
    AutoHeightDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[auto-height]'
                },] },
    ];
    /** @nocollapse */
    AutoHeightDirective.ctorParameters = function () { return [
        { type: core.ElementRef, },
    ]; };
    AutoHeightDirective.propDecorators = {
        "onMouseOver": [{ type: core.HostListener, args: ['mouseover',] },],
        "onMouseOut": [{ type: core.HostListener, args: ['mouseout',] },],
    };
    return AutoHeightDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-01    Created
    Page shows error text-.
*/
var Errorpage = /** @class */ (function () {
    function Errorpage() {
        this.test = new Date();
    }
    Errorpage.decorators = [
        { type: core.Component, args: [{
                    selector: 'errorpage-cmp',
                    template: "<div class=\"tcm-container\"> <div class=\"deep-purple-700 bg-big\"> <div class=\"text-center\"> <h1 class=\"text-shadow no-margin text-white text-4x p-v-lg\"> <span class=\"text-2x font-bold m-t-lg block\">505</span> </h1> <h2 class=\"h1 m-v-lg\">OUCH!</h2> <p class=\"h4 m-v-lg text-u-c font-bold\">Don't worry, we will fix it soon.</p> <div class=\"p-v-lg\"> Thanks! </div> </div> </div> </div> "
                },] },
    ];
    return Errorpage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var PagenotFoundComponent = /** @class */ (function () {
    function PagenotFoundComponent() {
        this.test = new Date();
    }
    PagenotFoundComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'pagenotfound-cmp',
                    template: "<div class=\"tcm-container\"> <div class=\"\"> <div class=\"text-center\"> <h1 class=\"text-shadow no-margin text-white text-4x p-v-lg\"> <span class=\"text-2x font-bold m-t-lg block\">404</span> </h1> <h2 class=\"h1 m-v-lg text-black\">OOPS!</h2> <p class=\"h4 m-v-lg text-u-c font-bold text-black\">Sorry! the page you are looking for doesn't exist.</p> </div> </div> </div> "
                },] },
    ];
    return PagenotFoundComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var SignInComponent = /** @class */ (function () {
    function SignInComponent(auth, router$$1, route) {
        var _this = this;
        this.auth = auth;
        this.router = router$$1;
        this.route = route;
        this.credentials = new UserCredentials();
        this.errors = null;
        this.paramSub = null;
        this.SignIn = function () {
            _this.errors = null;
            _this.auth.AutheticateExternal(_this.credentials).subscribe(function (result) {
                if (_this.auth.IsAuthenticated()) {
                    //this.router.navigateByUrl(this.redirectURL);
                    //this.router.navigateByUrl(this.redirectURL);
                    _this.router.navigateByUrl("/");
                }
                else {
                    _this.errors = result.ErrorList;
                }
            });
        };
    }
    /**
     * @return {?}
     */
    SignInComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        //this.redirectURL = this.route.snapshot.paramMap.get('redirectURL');
        this.paramSub = this.route.queryParamMap.switchMap(function (params) {
            _this.redirectURL = params.get('redirectURL');
            return _this.redirectURL;
        });
    };
    /**
     * @return {?}
     */
    SignInComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        //if (this.paramSub) this.paramSub.unsubscribe();
    };
    SignInComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'signin-cmp',
                    template: "<div class=\"center-block w-xxl w-auto-xs p-v-md\"> <error-div [Errors]=\"errors\"></error-div> <div class=\"p-lg panel md-whiteframe-z1 text-color m\"> <div class=\"m-b text-sm\"> Sign in with your User name and Password. </div> <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\"> <div class=\"md-form-group float-label\"> <input type=\"email\" class=\"md-input\" name=\"UserName\" [(ngModel)]=\"credentials.UserName\" required> <label>User name</label> </div> <div class=\"md-form-group float-label\"> <input type=\"password\" class=\"md-input\" name=\"Password\" [(ngModel)]=\"credentials.Password\" required> <label>Password</label> </div> <div class=\"m-b-md\"> <label class=\"md-check\"> <input type=\"checkbox\" name=\"RememberMe\" [(ngModel)]=\"credentials.RememberMe\"><i class=\"indigo\"></i> Keep me signed in </label> </div> <button type=\"submit\" (click)=\"SignIn()\" class=\"md-btn md-raised purple btn-block p-h-md\">Sign in</button> </form> </div> <div class=\"p-v-lg text-center\"> <div class=\"m-b\"><button class=\"md-btn\">Forgot password?</button></div> <div>Do not have an account? <button class=\"md-btn\">Create an account</button></div> </div> </div> "
                },] },
    ];
    /** @nocollapse */
    SignInComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['IAuthService',] },] },
        { type: router.Router, },
        { type: router.ActivatedRoute, },
    ]; };
    return SignInComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
        this.test = new Date();
    }
    SignUpComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'signup-cmp',
                    template: "<div class=\"center-block w-xxl w-auto-xs p-v-md\"> <div class=\"p-lg panel md-whiteframe-z1 text-color m\"> <div class=\"m-b text-sm\"> Sign up to your ################### Account </div> <form name=\"form\"> <div class=\"md-form-group\"> <input type=\"text\" class=\"md-input\"  required> <label>Name</label> </div> <div class=\"md-form-group\"> <input type=\"email\" class=\"md-input\"  required> <label>Email</label> </div> <div class=\"md-form-group\"> <input type=\"password\" class=\"md-input\"  required> <label>Password</label> </div> <div class=\"m-b-md\"> <label class=\"md-check\"> <input type=\"checkbox\"  required><i class=\"indigo\"></i> Agree the <a href>terms and policy</a> </label> </div> <button md-ink-ripple type=\"submit\" class=\"md-btn md-raised pink btn-block p-h-md\">Sign up</button> </form> </div> <div class=\"p-v-lg text-center\"> <div>Already have an account? <button ui-sref=\"access.signin\" class=\"md-btn\">Sign in</button></div> </div> </div> "
                },] },
    ];
    return SignUpComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var myCustomTooltipDefaults = {
    showDelay: 1000,
    hideDelay: 500,
    touchendHideDelay: 500
};
var TCMMaterialModule = /** @class */ (function () {
    function TCMMaterialModule() {
    }
    TCMMaterialModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        material.MatAutocompleteModule,
                        material.MatButtonModule,
                        material.MatButtonToggleModule,
                        material.MatCardModule,
                        material.MatCheckboxModule,
                        material.MatChipsModule,
                        material.MatDatepickerModule,
                        material.MatDialogModule,
                        material.MatExpansionModule,
                        material.MatGridListModule,
                        material.MatIconModule,
                        material.MatInputModule,
                        material.MatListModule,
                        material.MatMenuModule,
                        material.MatNativeDateModule,
                        material.MatPaginatorModule,
                        material.MatProgressBarModule,
                        material.MatProgressSpinnerModule,
                        material.MatRadioModule,
                        material.MatRippleModule,
                        material.MatSelectModule,
                        material.MatSidenavModule,
                        material.MatSliderModule,
                        material.MatSlideToggleModule,
                        material.MatSnackBarModule,
                        material.MatSortModule,
                        material.MatTableModule,
                        material.MatTabsModule,
                        material.MatToolbarModule,
                        material.MatTooltipModule,
                        material.MatStepperModule,
                        formField.MatFormFieldModule
                    ],
                    providers: [
                        { provide: material.ErrorStateMatcher, useClass: material.ShowOnDirtyErrorStateMatcher },
                        { provide: material.MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
                    ],
                    exports: [
                        material.MatAutocompleteModule,
                        material.MatButtonModule,
                        material.MatButtonToggleModule,
                        material.MatCardModule,
                        material.MatCheckboxModule,
                        material.MatChipsModule,
                        material.MatDatepickerModule,
                        material.MatDialogModule,
                        material.MatExpansionModule,
                        material.MatGridListModule,
                        material.MatIconModule,
                        material.MatInputModule,
                        material.MatListModule,
                        material.MatMenuModule,
                        material.MatNativeDateModule,
                        material.MatPaginatorModule,
                        material.MatProgressBarModule,
                        material.MatProgressSpinnerModule,
                        material.MatRadioModule,
                        material.MatRippleModule,
                        material.MatSelectModule,
                        material.MatSidenavModule,
                        material.MatSliderModule,
                        material.MatSlideToggleModule,
                        material.MatSnackBarModule,
                        material.MatSortModule,
                        material.MatTableModule,
                        material.MatTabsModule,
                        material.MatToolbarModule,
                        material.MatTooltipModule,
                        material.MatStepperModule,
                        formField.MatFormFieldModule
                    ]
                },] },
    ];
    return TCMMaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-06-25    Created
  Shows YES / NO dialog. Returns the boolean result.
*/
var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        dialogRef.disableClose = true;
    }
    /**
     * @return {?}
     */
    ConfirmComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} action
     * @return {?}
     */
    ConfirmComponent.prototype.onClose = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.dialogRef.close(action);
    };
    ConfirmComponent.decorators = [
        { type: core.Component, args: [{ selector: 'confirm-cmp',
                    template: "<div mat-dialog-title>Confirm</div> <mat-dialog-content> <p>{{data.message}}</p> </mat-dialog-content> <div class=\"dialog-bottom\"> <div class=\" pull-right\"> <button class=\"btn-dialog\" type=\"button\" (click)=\"onClose(true)\"> Yes </button> <button class=\"btn-dialog\" type=\"button\" (click)=\"onClose(false)\"> No </button> </div> </div> "
                },] },
    ];
    /** @nocollapse */
    ConfirmComponent.ctorParameters = function () { return [
        { type: material.MatDialogRef, },
        { type: undefined, decorators: [{ type: core.Inject, args: [material.MAT_DIALOG_DATA,] },] },
    ]; };
    return ConfirmComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-01    Created
  Error page opens as a dialog.
*/
var ErrorPopupComponent = /** @class */ (function () {
    function ErrorPopupComponent(dialogRef, Errors) {
        this.dialogRef = dialogRef;
        this.Errors = Errors;
    }
    /**
     * @return {?}
     */
    ErrorPopupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} action
     * @return {?}
     */
    ErrorPopupComponent.prototype.onClose = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.Errors = null;
        this.dialogRef.close(action);
    };
    ErrorPopupComponent.decorators = [
        { type: core.Component, args: [{ selector: 'error-popup',
                    template: "<div mat-dialog-title>Error</div> <mat-dialog-content> <div class=\"alert alert-danger\" *ngIf=\"Errors\"> <div class=\"container-fluid\"> <div class=\"alert-icon\"> <i class=\"material-icons\">error_outline</i> </div> <button (click)=\"close()\" type=\"button\" class=\"close\" aria-label=\"Close\"> <span aria-hidden=\"true\"><i class=\"material-icons\">clear</i></span> </button> <b>Error Alert:</b> <ul type=\"disc\"> <li *ngFor=\"let err of Errors\"> {{err.ErrorMessage}} </li> </ul> </div> </div> </mat-dialog-content> <div class=\"dialog-bottom\">  <button class=\"btn-dialog\" type=\"button\" (click)=\"onClose(false)\"> Close </button> </div> "
                },] },
    ];
    /** @nocollapse */
    ErrorPopupComponent.ctorParameters = function () { return [
        { type: material.MatDialogRef, },
        { type: undefined, decorators: [{ type: core.Inject, args: [material.MAT_DIALOG_DATA,] },] },
    ]; };
    return ErrorPopupComponent;
}());

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var AutoCompleteComponent = /** @class */ (function () {
    function AutoCompleteComponent(translate) {
        var _this = this;
        this.translate = translate;
        this.options = null;
        this.disabled = false;
        this.selectedObject = null;
        this.selectedObjectChange = new core.EventEmitter();
        this.errorMsgSearch = '';
        this.objSearch = null;
        this.ObjList = [];
        this.bb = new forms.FormControl();
        this.clearObject = function () {
            _this.clearObjectInternal();
            _this.selectedObjectChange.emit(null);
        };
        this.clearObjectInternal = function () {
            _this.bb.setValue('');
            _this.objSearch = '';
            _this.ObjList = [];
            _this.selectedObject = null;
        };
        this.ResetControl = function () {
            _this.clearObjectInternal();
            _this.bb.markAsPristine();
            _this.bb.markAsUntouched();
            _this.errorMsgSearch = '';
        };
        this.ObjectSelected = function ($event) {
            console.log($event.option.value);
            _this.setObject($event.option.value);
            _this.selectedObjectChange.emit(_this.selectedObject);
        };
        this.setObject = function (obj) {
            _this.selectedObject = obj;
            _this.objSearch = _this.GetObjectValue(obj, _this.options.displayProp);
            _this.ObjList = [];
        };
        this.displayObject = function (obj) {
            if (obj && typeof obj === 'object') {
                return obj ? _this.GetObjectValue(obj, _this.options.displayProp) : "Search object not found";
            }
            return obj;
        };
        this.GetObjectValue = function (obj, prop) {
            if (!_this.options.separator)
                _this.options['separator'] = '/ ';
            var /** @type {?} */ rstr = '';
            if (obj && prop) {
                var /** @type {?} */ multi = prop.split(',');
                if (multi.length > 0) {
                    for (var /** @type {?} */ i = 0; i < multi.length; i++) {
                        rstr += _this.GetNestedPropertyValue(obj, multi[i]) + _this.options.separator;
                    }
                }
                else {
                    rstr = _this.GetNestedPropertyValue(obj, prop);
                }
            }
            rstr = rstr.replace(/\/\s*$/, "");
            return rstr;
        };
        //GetObjProps = () => {
        //  if (this.selectedObject) {
        //    var x = Object.getOwnPropertySymbols(this.selectedObject);
        //    x.forEach(t => {
        //      console.log(t);
        //    });§
        //  }
        //}
        this.search = function (input) {
            var /** @type {?} */ checkTypeOfInput = input, /** @type {?} */ type = typeof checkTypeOfInput;
            if (type === 'object' && type != null) {
                console.log('input is an Object');
                return Observable.Observable.of(null);
            }
            else {
                console.log('inside Accounts');
                var /** @type {?} */ repository = _this.PrepareSearchRepository(input.trim());
                return _this.getData(repository).map(function (result) {
                    return result;
                });
            }
        };
        this.PrepareSearchRepository = function (input) {
            var /** @type {?} */ repository = new SearchRepository();
            repository.CriteriaType = 'BySearch';
            repository.Options = /** @type {?} */ ({});
            repository.Options.BrowseFrom = 1;
            repository.Options.BrowseTo = 100;
            repository.Options.CaseSensitive = false;
            repository.Options.ShowActive = true;
            repository.Options.ShowInactive = true;
            repository.SearchCriteria = [];
            _this.options.searchCriteria.forEach(function (item) {
                repository.SearchCriteria.push({
                    SearchConcatenatorId: 'OR',
                    SearchFieldId: item.SearchFieldId,
                    SearchOperatorId: item.SearchOperatorId,
                    SearchValue: item.SearchValue ? item.SearchValue : input,
                    ExtPosReference: null
                });
            });
            return repository;
        };
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AutoCompleteComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["selectedObject"]) {
            if (changes["selectedObject"].currentValue == null) {
                this.clearObjectInternal();
            }
            else {
                this.setObject(__assign({}, changes["selectedObject"].currentValue));
            }
        }
        if (changes["disabled"]) {
            (changes["disabled"].currentValue) ? this.bb.disable() : this.bb.enable();
        }
    };
    /**
     * @param {?} obj
     * @param {?} prop
     * @return {?}
     */
    AutoCompleteComponent.prototype.GetNestedPropertyValue = /**
     * @param {?} obj
     * @param {?} prop
     * @return {?}
     */
    function (obj, prop) {
        var /** @type {?} */ a = prop.split('.');
        for (var /** @type {?} */ i = 0, /** @type {?} */ n = a.length; i < n; ++i) {
            var /** @type {?} */ k = a[i];
            if (k in obj) {
                obj = obj[k];
            }
        }
        return typeof obj == 'string' ? obj : '';
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        (this.disabled) ? this.bb.disable() : this.bb.enable();
        this.bb.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .filter(function (input) {
            if (!input) {
                _this.clearObject();
                return false;
            }
            if (_this.objSearch) {
                if (typeof _this.objSearch != 'object' && (_this.objSearch.trim() === input.trim())) {
                    return false;
                }
            }
            var /** @type {?} */ checkTypeOfInput = input, /** @type {?} */ type = typeof checkTypeOfInput;
            if (type === 'object')
                return false;
            return true;
        })
            .subscribe(function (model) {
            _this.errorMsgSearch = '';
            return _this.search(model).subscribe(function (result) {
                if (result && result.ErrorList && result.ErrorList.length > 0) {
                    _this.errorMsgSearch = result.ErrorList[0].ErrorMessage;
                    _this.clearObject();
                    return;
                }
                if (result != null && result.Success == true && result.Data != null) {
                    var /** @type {?} */ keyNames = Object.keys(result.Data);
                    for (var /** @type {?} */ i in keyNames) {
                        if (keyNames[i].toLowerCase().indexOf('list') !== -1) {
                            _this.ObjList = result.Data[keyNames[i]];
                            break;
                        }
                    }
                    if (_this.ObjList && _this.ObjList.length == 1) {
                        _this.ObjectSelected({ option: { value: _this.ObjList[0] } });
                    }
                    else if (_this.ObjList && _this.ObjList.length == 0) {
                        _this.errorMsgSearch = _this.translate.instant('no_matching_records');
                        _this.clearObjectInternal();
                    }
                    if (!_this.ObjList)
                        _this.clearObject();
                }
                else {
                    _this.clearObject();
                }
            });
        });
    };
    AutoCompleteComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'auto-complete',
                    exportAs: 'auto-complete',
                    styles: ["\n    .default-text {\n        color: inherit;\n    }\n    .mat-autocomplete-panel {\n      min-width: 400px;\n    }\n    .mat-hint {\n        color: rgba(9, 47, 247, 0.98);\n    }\n    .error-text {\n        color: red;\n    }"],
                    viewProviders: [{ provide: forms.ControlContainer, useExisting: forms.NgForm }],
                    encapsulation: core.ViewEncapsulation.None,
                    template: "<mat-form-field class=\"full-width\" [ngClass]=\"[options.class? options.class : 'full-width',errorMsgSearch ? 'error-text':'default-text']\"> <mat-icon *ngIf=\"selectedObject == null\" matPrefix>search</mat-icon> <mat-icon *ngIf=\"selectedObject != null\" matPrefix style=\"color: green;font-weight: bolder;font-size: 24px;\">check</mat-icon> <mat-hint align=\"end\" [ngClass]=\"{'default-text': errorMsgSearch === '', 'error-text': errorMsgSearch !== ''}\"> <strong>{{errorMsgSearch ? errorMsgSearch : (selectedObject ? GetObjectValue(selectedObject, options.hintProp):'')}}</strong> </mat-hint> <mat-hint align=\"start\"> {{options.hintLabel ? options.hintLabel : ''}} </mat-hint>  <button type=\"button\" *ngIf=\"selectedObject != null\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearObject()\"> <mat-icon>close</mat-icon> </button> <!--<button matSuffix mat-icon-button aria-label=\"settings\" (click)=\"GetObjProps()\"> <mat-icon>settings</mat-icon> </button>--> <i *ngIf=\"options?.helpText != null\" matSuffix style=\"cursor:help; color: #FB8C00;\" matTooltip=\"{{options.helpText}}\" matTooltipClass=\"tooltip-x\" class=\"material-icons md-light\">help</i> <mat-label>{{options.label}}</mat-label> <input matTooltip=\"{{selectedObject ? GetObjectValue(selectedObject, options.tooltipProp):''}}\" matInput name=\"{{options.id}}\" id=\"{{options.id}}\" [matAutocomplete]=\"auto\" [formControl]=\"bb\" [ngModel]=\"objSearch\" [errorStateMatcher]=\"matcher\" [required]=\"options.required\" [disabled]=\"options.required\" /> <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayObject\" panelWidth=\"400px\" (optionSelected)=\"ObjectSelected($event)\"> <mat-option *ngFor=\"let obj of ObjList\" [value]=\"obj\"> <span class=\"small\">{{GetObjectValue(obj, options.displayProp)}}</span> </mat-option> </mat-autocomplete> </mat-form-field> "
                },] },
    ];
    /** @nocollapse */
    AutoCompleteComponent.ctorParameters = function () { return [
        { type: ng2Translate.TranslateService, },
    ]; };
    AutoCompleteComponent.propDecorators = {
        "options": [{ type: core.Input },],
        "disabled": [{ type: core.Input },],
        "selectedObject": [{ type: core.Input },],
        "selectedObjectChange": [{ type: core.Output },],
        "getData": [{ type: core.Input },],
    };
    return AutoCompleteComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-06    Created
*/
var PagenotAutheticatedComponent = /** @class */ (function () {
    function PagenotAutheticatedComponent() {
        this.test = new Date();
    }
    PagenotAutheticatedComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'pagenotautheticated-cmp',
                    template: "<div class=\"tcm-container\"> <div> <div class=\"text-center\"> <h1 class=\"text-shadow no-margin text-white text-4x p-v-lg\"> <span class=\"text-2x font-bold m-t-lg block\">401</span> </h1> <h2 class=\"h1 m-v-lg text-black\">OOPS!</h2> <p class=\"h4 m-v-lg text-u-c font-bold text-black\">Sorry! you are not autheticated to use this application.</p> </div> </div> </div> "
                },] },
    ];
    return PagenotAutheticatedComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var InputComponent = /** @class */ (function () {
    function InputComponent(translate, el) {
        this.translate = translate;
        this.el = el;
        this.validationMessages = {
            required: this.translate.instant("required"),
            minlength: this.translate.instant("minlength"),
            maxlength: this.translate.instant("maxlength")
        };
        this.options = null;
        this.val = null;
        this.valueChange = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ctrl.valueChanges.subscribe(function (result) {
            _this.valueChange.emit(result);
        });
        if (this.options.focus)
            this.el.nativeElement.focus();
    };
    InputComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'tcm-input',
                    exportAs: 'tcm-input',
                    template: "<mat-form-field class=\"mat-focused\" [ngClass]=\"options.class? options.class : 'full-width-90'\"> <mat-hint align=\"end\"> <strong>{{options?.hintText ? (options.hintText | translate) : ''}}</strong> </mat-hint> <mat-hint align=\"start\"> {{options?.hintLabel ? (options.hintLabel | translate) : ''}} </mat-hint> <button *ngIf=\"val && !options?.isDisabled\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"val=''\"> <mat-icon>close</mat-icon> </button> <i *ngIf=\"options?.helpText != null\" matSuffix style=\"cursor:help; color: #FB8C00;\" matTooltip=\"{{options?.helpText}}\" matTooltipClass=\"tooltip-x\" class=\"material-icons md-light\">help</i> <input matInput placeholder=\"{{ options?.placeholder | translate}}\"         [type]=\"options?.type? options.type: text\" [ngModel]=\"val\"         [minlength]=\"options?.minlength ? options.minlength : 0\" [maxlength]=\"options?.maxlength ? options.maxlength : 1000\" id=\"{{options?.id}}\" name=\"{{options?.id}}\" #ctrl=\"ngModel\" [errorStateMatcher]=\"matcher\" [required]=\"options?.isRequired\" [disabled]=\"options?.isDisabled\"> <mat-error *ngIf=\"ctrl.hasError('required')\"> <strong>{{ options?.placeholder | translate}} {{validationMessages.required}}</strong> </mat-error> <mat-error *ngIf=\"ctrl.hasError('minlength')\"> <strong> {{options?.minlength}} {{validationMessages.minlength}}</strong> </mat-error> <mat-error *ngIf=\"ctrl.hasError('maxlength')\"> <strong> {{options?.maxlength}} {{validationMessages.maxlength}}</strong> </mat-error> </mat-form-field> ",
                    viewProviders: [{ provide: forms.ControlContainer, useExisting: forms.NgForm }],
                    styles: ["\n    .mat-hint {\n        color: rgba(9, 47, 247, 0.98);\n    }\n    .error-text {\n        color: red;\n    }"],
                    encapsulation: core.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return [
        { type: ng2Translate.TranslateService, },
        { type: core.ElementRef, },
    ]; };
    InputComponent.propDecorators = {
        "options": [{ type: core.Input },],
        "val": [{ type: core.Input },],
        "valueChange": [{ type: core.Output },],
        "ctrl": [{ type: core.ViewChild, args: ['ctrl',] },],
    };
    return InputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var formatter = {
    integer: { thousandsSeparator: ",", defaultValue: '0' },
    number: { decimalSeparator: ".", thousandsSeparator: ",", decimalPlaces: 6, defaultValue: '0.00' },
    currency: { decimalSeparator: ".", thousandsSeparator: ",", decimalPlaces: 6, prefix: "", suffix: "", defaultValue: '0.00' },
    date: {
        dayNames: [
            "Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        monthNames: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ],
        AmPm: ["am", "pm", "AM", "PM"],
        srcformat: 'Y-m-d',
        newformat: 'n/j/Y',
        parseRe: /[#%\\\/:_;.,\t\s-]/,
        masks: {
            // see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
            // and see http://docs.jquery.com/UI/Datepicker/formatDate
            // and https://github.com/jquery/globalize#dates for alternative formats used frequently
            // one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
            // information about date, time, numbers and currency formats used in different countries
            // one should just convert the information in PHP format
            ISO8601Long: "Y-m-d H:i:s",
            ISO8601Short: "Y-m-d",
            // short date:
            //    n - Numeric representation of a month, without leading zeros
            //    j - Day of the month without leading zeros
            //    Y - A full numeric representation of a year, 4 digits
            // example: 3/1/2012 which means 1 March 2012
            ShortDate: "n/j/Y",
            // in jQuery UI Datepicker: "M/d/yyyy"
            // long date:
            //    l - A full textual representation of the day of the week
            //    F - A full textual representation of a month
            //    d - Day of the month, 2 digits with leading zeros
            //    Y - A full numeric representation of a year, 4 digits
            LongDate: "l, F d, Y",
            // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
            // long date with long time:
            //    l - A full textual representation of the day of the week
            //    F - A full textual representation of a month
            //    d - Day of the month, 2 digits with leading zeros
            //    Y - A full numeric representation of a year, 4 digits
            //    g - 12-hour format of an hour without leading zeros
            //    i - Minutes with leading zeros
            //    s - Seconds, with leading zeros
            //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
            FullDateTime: "l, F d, Y g:i:s A",
            // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
            // month day:
            //    F - A full textual representation of a month
            //    d - Day of the month, 2 digits with leading zeros
            MonthDay: "F d",
            // in jQuery UI Datepicker: "MMMM dd"
            // short time (without seconds)
            //    g - 12-hour format of an hour without leading zeros
            //    i - Minutes with leading zeros
            //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
            ShortTime: "g:i A",
            // in jQuery UI Datepicker: "h:mm tt"
            // long time (with seconds)
            //    g - 12-hour format of an hour without leading zeros
            //    i - Minutes with leading zeros
            //    s - Seconds, with leading zeros
            //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
            LongTime: "g:i:s A",
            // in jQuery UI Datepicker: "h:mm:ss tt"
            SortableDateTime: "Y-m-d\\TH:i:s",
            UniversalSortableDateTime: "Y-m-d H:i:sO",
            // month with year
            //    Y - A full numeric representation of a year, 4 digits
            //    F - A full textual representation of a month
            YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
        },
        reformatAfterEdit: false,
        userLocalTime: false
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var formatter$1 = {
    integer: { thousandsSeparator: " ", defaultValue: '0' },
    number: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 6, defaultValue: '0,00' },
    currency: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 6, prefix: "", suffix: "Kr", defaultValue: '0,00' },
    date: {
        dayNames: [
            "Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör",
            "Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"
        ],
        monthNames: [
            "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec",
            "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
        ],
        AmPm: ["fm", "em", "FM", "EM"],
        srcformat: 'Y-m-d',
        newformat: 'Y-m-d',
        parseRe: /[#%\\\/:_;.,\t\s-]/,
        masks: {
            ISO8601Long: "Y-m-d H:i:s",
            ISO8601Short: "Y-m-d",
            ShortDate: "n/j/Y",
            LongDate: "l, F d, Y",
            FullDateTime: "l, F d, Y g:i:s A",
            MonthDay: "F d",
            ShortTime: "g:i A",
            LongTime: "g:i:s A",
            SortableDateTime: "Y-m-d\\TH:i:s",
            UniversalSortableDateTime: "Y-m-d H:i:sO",
            YearMonth: "F, Y"
        },
        reformatAfterEdit: false,
        userLocalTime: false
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Utilities = /** @class */ (function () {
    function Utilities() {
        var _this = this;
        this.FormatNumber = function (val, locale, decimalPlaces) {
            if (decimalPlaces === void 0) { decimalPlaces = '6'; }
            var /** @type {?} */ opts = null;
            if (!val)
                return '';
            switch (locale) {
                case 'sv-SE':
                    opts = formatter$1.number;
                    break;
                case 'en-US':
                    opts = formatter.number;
                    break;
                default:
                    opts = formatter.number;
            }
            if (decimalPlaces && _this.isNumber(decimalPlaces)) {
                opts.decimalPlaces = decimalPlaces;
            }
            //try converting to real number first
            val = Number(_this.UnFormatNumber(val, locale, decimalPlaces));
            if (!_this.isNumber(val)) {
                val *= 1;
            }
            if (_this.isNumber(val)) {
                var /** @type {?} */ bNegative = (val < 0);
                var /** @type {?} */ sOutput = String(Number(val).toFixed(opts.decimalPlaces));
                var /** @type {?} */ sDecimalSeparator = opts.decimalSeparator || ".";
                var /** @type {?} */ nDotIndex;
                if (_this.isNumber(opts.decimalPlaces)) {
                    // Round to the correct decimal place
                    var /** @type {?} */ nDecimalPlaces = opts.decimalPlaces;
                    nDotIndex = sOutput.lastIndexOf(".");
                    if (nDecimalPlaces > 0) {
                        // Add the decimal separator
                        if (nDotIndex < 0) {
                            sOutput += sDecimalSeparator;
                            nDotIndex = sOutput.length - 1;
                        }
                        else if (sDecimalSeparator !== ".") {
                            sOutput = sOutput.replace(".", sDecimalSeparator);
                        }
                        // Add missing zeros
                        while ((sOutput.length - 1 - nDotIndex) < nDecimalPlaces) {
                            sOutput += "0";
                        }
                    }
                }
                if (opts.thousandsSeparator) {
                    var /** @type {?} */ sThousandsSeparator = opts.thousandsSeparator;
                    nDotIndex = sOutput.lastIndexOf(sDecimalSeparator);
                    nDotIndex = (nDotIndex > -1) ? nDotIndex : sOutput.length;
                    var /** @type {?} */ sNewOutput = sOutput.substring(nDotIndex);
                    var /** @type {?} */ nCount = -1, /** @type {?} */ i;
                    for (i = nDotIndex; i > 0; i--) {
                        nCount++;
                        if ((nCount % 3 === 0) && (i !== nDotIndex) && (!bNegative || (i > 1))) {
                            sNewOutput = sThousandsSeparator + sNewOutput;
                        }
                        sNewOutput = sOutput.charAt(i - 1) + sNewOutput;
                    }
                    sOutput = sNewOutput;
                }
                // Prepend prefix
                sOutput = (opts.prefix) ? opts.prefix + sOutput : sOutput;
                // Append suffix
                sOutput = (opts.suffix) ? sOutput + opts.suffix : sOutput;
                return sOutput;
            }
            return val;
        };
        this.UnFormatNumber = function (val, locale, decimalPlaces) {
            if (decimalPlaces === void 0) { decimalPlaces = '6'; }
            if (!val)
                return '';
            var /** @type {?} */ re = /([\.\*\_\'\(\)\{\}\+\?\\])/g;
            var /** @type {?} */ opts = null;
            switch (locale) {
                case 'sv-SE':
                    opts = formatter$1.number;
                    break;
                case 'en-US':
                    opts = formatter.number;
                    break;
                default:
                    opts = formatter.number;
            }
            if (decimalPlaces && _this.isNumber(decimalPlaces)) {
                opts.decimalPlaces = decimalPlaces;
            }
            var /** @type {?} */ sep = opts.thousandsSeparator.replace(re, "\\$1");
            var /** @type {?} */ stripTag = new RegExp(sep, "g");
            var /** @type {?} */ ret = val.toString().replace(stripTag, "").replace(opts.decimalSeparator, '.');
            var /** @type {?} */ sOutput = String(Number(ret).toFixed(opts.decimalPlaces));
            return sOutput;
        };
        this.isNumber = function (o) {
            o = Number(o);
            return typeof o === 'number' && isFinite(o);
        };
        this.isBoolean = function (o) {
            return typeof o === 'boolean';
        };
        this.isObject = function (o) {
            return (o && (typeof o === 'object' || $.isFunction(o))) || false;
        };
        this.isString = function (o) {
            return typeof o === 'string';
        };
        this.isValue = function (o) {
            return (_this.isObject(o) || _this.isString(o) || _this.isNumber(o) || _this.isBoolean(o));
        };
        this.isEmpty = function (o) {
            if (!_this.isString(o) && _this.isValue(o)) {
                return false;
            }
            if (!_this.isValue(o)) {
                return true;
            }
            o = $.trim(o).replace(/\&nbsp\;/ig, '').replace(/\&#160\;/ig, '');
            return o === "";
        };
    }
    Utilities.decorators = [
        { type: core.Injectable },
    ];
    return Utilities;
}());
var StringConverter = function (value) {
    if (value === null || value === undefined || typeof value === "string")
        return value;
    return value.toString();
};
var BooleanConverter = function (value) {
    if (value === null || value === undefined || typeof value === "boolean")
        return value;
    return value.toString() === "true";
};
var NumberConverter = function (value) {
    if (value === null || value === undefined || typeof value === "number")
        return value;
    return parseFloat(value.toString());
};
/**
 * @param {?=} converter
 * @return {?}
 */
function InputConverter(converter) {
    return function (target, key) {
        if (converter === undefined) {
            var /** @type {?} */ metadata = (/** @type {?} */ (Reflect)).getMetadata("design:type", target, key);
            if (metadata === undefined || metadata === null)
                throw new Error("The reflection metadata could not be found.");
            if (metadata.name === "String")
                converter = StringConverter;
            else if (metadata.name === "Boolean")
                converter = BooleanConverter;
            else if (metadata.name === "Number")
                converter = NumberConverter;
            else
                throw new Error("There is no converter for the given property type '" + metadata.name + "'.");
        }
        var /** @type {?} */ definition = Object.getOwnPropertyDescriptor(target, key);
        if (definition) {
            Object.defineProperty(target, key, {
                get: definition.get,
                set: function (newValue) {
                    definition.set(converter(newValue));
                },
                enumerable: true,
                configurable: true
            });
        }
        else {
            Object.defineProperty(target, key, {
                get: function () {
                    return this["__" + key];
                },
                set: function (newValue) {
                    this["__" + key] = converter(newValue);
                },
                enumerable: true,
                configurable: true
            });
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var tcmnumber = /** @class */ (function () {
    function tcmnumber(utilities) {
        this.utilities = utilities;
    }
    /**
     * @param {?} value
     * @param {?} locale
     * @param {?} decimalPlaces
     * @return {?}
     */
    tcmnumber.prototype.transform = /**
     * @param {?} value
     * @param {?} locale
     * @param {?} decimalPlaces
     * @return {?}
     */
    function (value, locale, decimalPlaces) {
        return this.utilities.FormatNumber(value, locale, decimalPlaces);
    };
    /**
     * @param {?} value
     * @param {?} locale
     * @param {?} decimalPlaces
     * @return {?}
     */
    tcmnumber.prototype.parse = /**
     * @param {?} value
     * @param {?} locale
     * @param {?} decimalPlaces
     * @return {?}
     */
    function (value, locale, decimalPlaces) {
        return this.utilities.UnFormatNumber(value, locale, decimalPlaces);
    };
    tcmnumber.decorators = [
        { type: core.Injectable },
        { type: core.Pipe, args: [{ name: 'tcmnumber', pure: true },] },
    ];
    /** @nocollapse */
    tcmnumber.ctorParameters = function () { return [
        { type: Utilities, },
    ]; };
    return tcmnumber;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var NumberComponent = /** @class */ (function () {
    function NumberComponent(locale, elementRef, tcmpipe) {
        this.locale = locale;
        this.elementRef = elementRef;
        this.tcmpipe = tcmpipe;
        this.ngModelChange = new core.EventEmitter();
        this.decimalPlaces = '6';
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NumberComponent.prototype.onFocus = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.el.value = this.tcmpipe.parse(value, this.locale, this.decimalPlaces); // opossite of transform
        this.ngModelChange.emit(this.el.value);
        //var val = this.tcmpipe.transform(value, this.locale, this.decimalPlaces);
        //val ? this.el.value = val.toString() : '';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NumberComponent.prototype.onBlur = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ val = this.tcmpipe.transform(value, this.locale, this.decimalPlaces);
        val ? this.el.value = val.toString() : '';
    };
    /**
     * @return {?}
     */
    NumberComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ formattedValue = this.tcmpipe.transform(this.el.getAttribute('ng-reflect-model'), this.locale, this.decimalPlaces);
        this.updateDisplay();
    };
    /**
     * @return {?}
     */
    NumberComponent.prototype.updateDisplay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.onFocus(_this.el.value);
        }, 10);
        setTimeout(function () {
            _this.onBlur(_this.el.value);
        }, 15);
    };
    NumberComponent.decorators = [
        { type: core.Directive, args: [{
                    selector: "[tcm-number]"
                },] },
    ];
    //ngAfterViewInit(): void {
    //  var formattedValue = this.tcmpipe.transform(this.el.getAttribute('ng-reflect-model'), this.locale, this.decimalPlaces);
    //   formattedValue ? this.el.value = formattedValue.toString() : this.el.value = '';
    //}
    /** @nocollapse */
    NumberComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
        { type: core.ElementRef, },
        { type: tcmnumber, },
    ]; };
    NumberComponent.propDecorators = {
        "ngModelChange": [{ type: core.Output },],
        "decimalPlaces": [{ type: core.Input },],
        "onFocus": [{ type: core.HostListener, args: ["focus", ["$event.target.value"],] },],
        "onBlur": [{ type: core.HostListener, args: ["blur", ["$event.target.value"],] },],
    };
    return NumberComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var ScrollSpyDirective = /** @class */ (function () {
    function ScrollSpyDirective(_el) {
        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new core.EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ScrollSpyDirective.prototype.onScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ currentSection;
        var /** @type {?} */ children = this._el.nativeElement.children;
        var /** @type {?} */ scrollTop = event.target.scrollTop;
        var /** @type {?} */ parentOffset = event.target.offsetTop;
        var _loop_1 = function (i) {
            var /** @type {?} */ element = children[i];
            if (this_1.spiedTags.some(function (spiedTag) { return spiedTag === element.tagName; })) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        };
        var this_1 = this;
        for (var /** @type {?} */ i = 0; i < children.length; i++) {
            _loop_1(i);
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    };
    ScrollSpyDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[scrollSpy]'
                },] },
    ];
    /** @nocollapse */
    ScrollSpyDirective.ctorParameters = function () { return [
        { type: core.ElementRef, },
    ]; };
    ScrollSpyDirective.propDecorators = {
        "spiedTags": [{ type: core.Input },],
        "sectionChange": [{ type: core.Output },],
        "onScroll": [{ type: core.HostListener, args: ['window:scroll', ['$event'],] },],
    };
    return ScrollSpyDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var SelectComponent = /** @class */ (function () {
    function SelectComponent(translate, staticDataService) {
        var _this = this;
        this.translate = translate;
        this.staticDataService = staticDataService;
        this.validationMessages = {
            requiredselection: this.translate.instant("requiredselection"),
        };
        this.options = null;
        this.val = null;
        this.valueChange = new core.EventEmitter();
        this.myOptions = null;
        this.GetStaticData = function (key) {
            return _this.staticDataService.GetStaticData(key);
        };
        this.GetStaticDataList = function (keys) {
            return _this.staticDataService.GetStaticDataList(keys);
        };
        this.GetStaticDataItems = function (key) {
            return _this.staticDataService.GetStaticDataItems(key);
        };
    }
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ctrl.valueChanges.subscribe(function (result) {
            _this.valueChange.emit(result);
        });
    };
    SelectComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'tcm-select',
                    exportAs: 'tcm-select',
                    template: "<mat-form-field [ngClass]=\"options.class? options.class : 'full-width-90'\"> <mat-select placeholder=\"{{ options?.placeholder | translate}}\" [ngModel]=\"val\" id=\"{{options?.id}}\" name=\"{{options?.id}}\" #ctrl=\"ngModel\" [multiple]=\"options?.ismultiple\" [errorStateMatcher]=\"matcher\" [required]=\"options?.isRequired\" [disabled]=\"options?.isDisabled\"> <mat-option [value]=\"null\"> --- </mat-option> <mat-option *ngFor=\"let option of GetStaticDataItems(options?.ItemName)\" [value]=\"option.Code\"> {{ option.Text | translate}} </mat-option> </mat-select> <mat-error *ngIf=\"ctrl.hasError('required')\"> <strong>{{validationMessages.requiredselection}}</strong> </mat-error> </mat-form-field> ",
                    viewProviders: [{ provide: forms.ControlContainer, useExisting: forms.NgForm }],
                    styles: ["\n    .mat-hint {\n        color: rgba(9, 47, 247, 0.98);\n    }\n    .error-text {\n        color: red;\n    }"],
                    encapsulation: core.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: ng2Translate.TranslateService, },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IStaticDataService',] },] },
    ]; };
    SelectComponent.propDecorators = {
        "options": [{ type: core.Input },],
        "val": [{ type: core.Input },],
        "valueChange": [{ type: core.Output },],
        "ctrl": [{ type: core.ViewChild, args: ['ctrl',] },],
    };
    return SelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(translate) {
        this.translate = translate;
        this.options = null;
        this.val = null;
        this.valueChange = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ctrl.valueChanges.subscribe(function (result) {
            _this.valueChange.emit(result);
        });
    };
    CheckboxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'tcm-check',
                    exportAs: 'tcm-check',
                    template: "  <mat-checkbox [ngClass]=\"options.class? options.class : 'full-width-90'\" [ngModel]=\"val\" id=\"{{options?.id}}\" name=\"{{options?.id}}\" #ctrl=\"ngModel\"> {{ options?.placeholder | translate}} </mat-checkbox> ",
                    viewProviders: [{ provide: forms.ControlContainer, useExisting: forms.NgForm }],
                    styles: [],
                    encapsulation: core.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return [
        { type: ng2Translate.TranslateService, },
    ]; };
    CheckboxComponent.propDecorators = {
        "options": [{ type: core.Input },],
        "val": [{ type: core.Input },],
        "valueChange": [{ type: core.Output },],
        "ctrl": [{ type: core.ViewChild, args: ['ctrl',] },],
    };
    return CheckboxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var DateComponent = /** @class */ (function () {
    function DateComponent(translate) {
        this.translate = translate;
        this.validationMessages = {
            required: this.translate.instant("required"),
            minlength: this.translate.instant("minlength"),
            maxlength: this.translate.instant("maxlength")
        };
        //var txt = '{"name":"John", "age":30, "city":"New York"}'
        this.options = null;
        this.val = null;
        this.valueChange = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    DateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ctrl.valueChanges.subscribe(function (result) {
            _this.valueChange.emit(result);
        });
    };
    DateComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'tcm-date',
                    exportAs: 'tcm-date',
                    template: "<mat-form-field [ngClass]=\"options.class? options.class : 'full-width'\"> <mat-hint align=\"end\"> <strong>{{options?.hintText ? (options.hintText | translate) : ''}}</strong> </mat-hint> <mat-hint align=\"start\"> {{options?.hintLabel ? (options.hintLabel | translate) : ''}} </mat-hint> <button type=\"button\" matSuffix mat-icon-button  aria-label=\"Clear\" (click)=\"val=''\"> <mat-icon>close</mat-icon> </button> <i *ngIf=\"options?.helpText != null\" matSuffix style=\"cursor:help; color: #FB8C00;\" matTooltip=\"{{options?.helpText}}\" matTooltipClass=\"tooltip-x\" class=\"material-icons md-light\">help</i> <input matInput placeholder=\"{{ options?.placeholder | translate}}\" [matDatepicker]=\"dp\" [ngModel]=\"val\" id=\"{{options?.id}}\" name=\"{{options?.id}}\" #ctrl=\"ngModel\" [errorStateMatcher]=\"matcher\" [required]=\"options?.isRequired\"> <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle> <mat-datepicker #dp></mat-datepicker> <mat-error *ngIf=\"ctrl.hasError('required')\"> <strong>{{ options?.placeholder | translate}} {{validationMessages.required}}</strong> </mat-error> </mat-form-field> ",
                    viewProviders: [{ provide: forms.ControlContainer, useExisting: forms.NgForm }],
                    encapsulation: core.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    DateComponent.ctorParameters = function () { return [
        { type: ng2Translate.TranslateService, },
    ]; };
    DateComponent.propDecorators = {
        "options": [{ type: core.Input },],
        "val": [{ type: core.Input },],
        "valueChange": [{ type: core.Output },],
        "ctrl": [{ type: core.ViewChild, args: ['ctrl',] },],
    };
    return DateComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var PanelContainerComponent = /** @class */ (function () {
    function PanelContainerComponent(translate) {
        this.translate = translate;
        this.options = null;
    }
    PanelContainerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'tcm-panel',
                    exportAs: 'tcm-panel',
                    template: "<div class=\"panel\"> <div class=\"panel-heading font-bold\"> <a id=\"{{options?.id}}\" name=\"{{options?.id}}\"></a> {{options?.title | translate}} </div> <div class=\"panel-body\"> <div class=\"row\"> <ng-content></ng-content> </div> </div> </div> ",
                    viewProviders: [{ provide: forms.ControlContainer, useExisting: forms.NgForm }],
                    encapsulation: core.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    PanelContainerComponent.ctorParameters = function () { return [
        { type: ng2Translate.TranslateService, },
    ]; };
    PanelContainerComponent.propDecorators = {
        "options": [{ type: core.Input },],
    };
    return PanelContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var CardContainerComponent = /** @class */ (function () {
    function CardContainerComponent(translate, themeService) {
        this.translate = translate;
        this.themeService = themeService;
        this.options = null;
        this.color = 'purple';
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
    /**
     * @return {?}
     */
    CardContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        //this.themeService.theme.subscribe((val) => {
        //  if (val === '') {
        //    val = 'primary';
        //  }
        //  this.convertToColor(val);
        //});
        //this.convertToColor(this.themeService.currenttheme);
        this.themeService.theme.subscribe(function (val) {
            _this.theme = val;
            _this.convertToColor(_this.theme);
            console.log('navbar theme - ' + _this.theme);
        });
        this.theme = this.themeService.currenttheme;
        this.convertToColor(this.theme);
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    CardContainerComponent.prototype.convertToColor = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
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
    };
    CardContainerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'tcm-card',
                    exportAs: 'tcm-card',
                    template: "<div class=\"card\"> <div class=\"card-header\" [attr.data-background-color]=\"options?.color ? options.color : color\"> <h4 class=\"title\" *ngIf=\"options?.title\">{{options?.title | translate}}</h4> <p class=\"category\" *ngIf=\"options?.subtitle\">{{options?.subtitle | translate}}</p> </div> <div class=\"card-content\"> <ng-content></ng-content> </div> </div> ",
                    viewProviders: [{ provide: forms.ControlContainer, useExisting: forms.NgForm }],
                    encapsulation: core.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    CardContainerComponent.ctorParameters = function () { return [
        { type: ng2Translate.TranslateService, },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IThemeService',] },] },
    ]; };
    CardContainerComponent.propDecorators = {
        "options": [{ type: core.Input },],
    };
    return CardContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var ResponsiveDivComponent = /** @class */ (function () {
    function ResponsiveDivComponent(translate) {
        this.translate = translate;
        this.options = null;
    }
    ResponsiveDivComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'responsive-div',
                    exportAs: 'responsive-div',
                    template: "<div class=\"col-md-3 col-lg-five col-sm-4 col-xs-12\"> <ng-content></ng-content> </div> ",
                    viewProviders: [{ provide: forms.ControlContainer, useExisting: forms.NgForm }],
                    encapsulation: core.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    ResponsiveDivComponent.ctorParameters = function () { return [
        { type: ng2Translate.TranslateService, },
    ]; };
    ResponsiveDivComponent.propDecorators = {
        "options": [{ type: core.Input },],
    };
    return ResponsiveDivComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimePickerComponent = /** @class */ (function () {
    function TimePickerComponent(locale, elementRef) {
        var _this = this;
        this.locale = locale;
        this.elementRef = elementRef;
        this.ngModelChange = new core.EventEmitter();
        this.el = this.elementRef.nativeElement;
        this.timeoptions = {
            format: 'H:i',
            datepicker: false,
            step: 30,
            onSelectTime: function (dateText) {
                var /** @type {?} */ d = new Date(dateText);
                var /** @type {?} */ dateStr = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
                //dateStr = this.parse(dateStr);
                //dateStr = this.parse(dateStr);
                _this.ngModelChange.emit(dateStr);
            }
        };
    }
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        $(this.elementRef.nativeElement).datetimepicker(this.timeoptions);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    TimePickerComponent.prototype.parse = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val) {
            var /** @type {?} */ arr = val.trim().split(':');
            var /** @type {?} */ hr = arr[0], /** @type {?} */ min = arr[1], /** @type {?} */ sec = arr[2];
            if (hr) {
                var /** @type {?} */ temp = Number(hr);
                if (temp < 1)
                    temp = 1;
                if (temp > 23)
                    temp = 23;
                hr = temp.toString();
            }
            if (min) {
                var /** @type {?} */ temp = Number(min);
                if (temp > 59) {
                    temp = 0;
                    (Number(hr) != 23) ? hr += 1 : hr;
                }
                min = temp.toString();
            }
            return hr + ':' + min + ':' + sec;
        }
        return '';
    };
    TimePickerComponent.decorators = [
        { type: core.Directive, args: [{
                    selector: "[tcm-time]"
                },] },
    ];
    /** @nocollapse */
    TimePickerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
        { type: core.ElementRef, },
    ]; };
    TimePickerComponent.propDecorators = {
        "ngModelChange": [{ type: core.Output },],
    };
    return TimePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-25    Created
*/
var GlobalErrorHandler = /** @class */ (function () {
    function GlobalErrorHandler(logger) {
        this.logger = logger;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    GlobalErrorHandler.prototype.handleError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.logger.error(error);
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        //throw error;
    };
    GlobalErrorHandler.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    GlobalErrorHandler.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['ILogService',] },] },
    ]; };
    return GlobalErrorHandler;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-25    Created
*/
var LoaderService = /** @class */ (function () {
    function LoaderService() {
        var _this = this;
        this.status = new BehaviorSubject.BehaviorSubject(false);
        this.display = function (value) {
            _this.status.next(value);
        };
    }
    LoaderService.decorators = [
        { type: core.Injectable },
    ];
    return LoaderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-25    Created
*/
var ThemeService = /** @class */ (function () {
    function ThemeService(configService, zone) {
        var _this = this;
        this.configService = configService;
        this.zone = zone;
        this.theme = new BehaviorSubject.BehaviorSubject("");
        this._theme = 'primary';
        this.init = function () {
            if (_this.configService.Config.theme)
                _this.currenttheme = _this.configService.Config.theme;
            setTimeout(function () {
                _this.change(_this.currenttheme);
            }, 500);
        };
        this.change = function (value) {
            console.log('theme service - ' + value);
            _this.theme.next(value);
        };
    }
    Object.defineProperty(ThemeService.prototype, "currenttheme", {
        get: /**
         * @return {?}
         */
        function () {
            return this._theme;
        },
        set: /**
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            this._theme = theme;
        },
        enumerable: true,
        configurable: true
    });
    ThemeService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ThemeService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['IConfigService',] },] },
        { type: core.NgZone, },
    ]; };
    return ThemeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
/**
 *
 */
var DataService = /** @class */ (function () {
    function DataService(http$$1, loaderService, coreConfig, logger, _cache) {
        var _this = this;
        this.http = http$$1;
        this.loaderService = loaderService;
        this.coreConfig = coreConfig;
        this.logger = logger;
        this._cache = _cache;
        this.AddContextToRequest = function (request) {
            request.Context = JSON.parse(sessionStorage.getItem('UserContext'));
            return request;
        };
        this.PrepareRequestOptions = function () {
            var /** @type {?} */ headers = new http.Headers({
                'AuthToken': sessionStorage.getItem('UserToken'),
                'Content-Type': 'application/json'
            });
            var /** @type {?} */ options = new http.RequestOptions({
                headers: headers,
                withCredentials: true
            });
            return options;
        };
        this.ParseJson = function (response) {
            var /** @type {?} */ token = response.headers.get("AuthToken");
            if (token)
                sessionStorage.setItem('UserToken', JSON.stringify(token));
            _this.loaderService.display(false);
            var /** @type {?} */ json = response.json();
            return json;
        };
        this.HandleExceptions = function (error, origin) {
            _this.loaderService.display(false);
            var /** @type {?} */ strError = error.json();
            //this.toastrService.error(strError.ExceptionMessage, "Fatal Error");
            //this.toastrService.error(strError.ExceptionMessage, "Fatal Error");
            _this.logger.error(strError.ExceptionMessage);
            var /** @type {?} */ tcmResponse = {
                Data: null,
                ErrorList: [{
                        ErrorMessage: strError.ExceptionMessage,
                        ErrorCode: "0000",
                        ExtErrorPosReference: null,
                        SystemErrorMessage: strError.StackTrace
                    }],
                Success: false
            };
            return Rx.Observable.of(tcmResponse);
        };
        /**
         * Get by simple parameters
         * @param domain
         * @param cache
         */
        this.Get = function (domain, params_in, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            var /** @type {?} */ c = _this.GetFromCache(cache);
            if (c)
                return Rx.Observable.of(c);
            _this.ValidateInput("Get", domain, params_in);
            _this.loaderService.display(showLoadIndicator);
            _this.logger.log("Get - " + url);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            var /** @type {?} */ params = new http.URLSearchParams();
            for (var /** @type {?} */ key in params_in) {
                if (params_in.hasOwnProperty(key)) {
                    var /** @type {?} */ val = params_in[key];
                    params.set(key, val);
                }
            }
            var /** @type {?} */ headers = new http.Headers({ 'Content-Type': 'application/json', 'AuthToken': sessionStorage.getItem('UserToken') });
            var /** @type {?} */ options = new http.RequestOptions({ headers: headers, withCredentials: true, search: params });
            return _this.http.get(url)
                .map(function (response) {
                var /** @type {?} */ resObj = _this.ParseJson(response);
                _this.AddToCache(resObj, cache);
                return resObj;
            }).catch(function (error) {
                //Handle Error
                return _this.HandleExceptions(error, url);
            });
        };
        /**
         *
         * @param domain
         * @param Data
         */
        this.ExportToExcel = function (domain, request, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            _this.ValidateInput("Get", domain, request);
            _this.loaderService.display(showLoadIndicator);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            request = _this.AddContextToRequest(request);
            _this.logger.logObject("ExportToExcel - " + url, request);
            var /** @type {?} */ headers = new http.Headers({ 'Content-Type': 'application/json', 'AuthToken': sessionStorage.getItem('UserToken'), 'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            var /** @type {?} */ options = new http.RequestOptions({ headers: headers, withCredentials: true, responseType: http.ResponseContentType.ArrayBuffer });
            //'arraybuffer'
            //'arraybuffer'
            _this.http.post(url, request, options)
                .subscribe(function (result) {
                _this.loaderService.display(false);
                var /** @type {?} */ token = result.headers.get("AuthToken");
                if (token)
                    sessionStorage.setItem('UserToken', token);
                var /** @type {?} */ file = new Blob([(/** @type {?} */ (result))._body], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                var /** @type {?} */ dateSuffix = new Date(Date.now()).toLocaleDateString();
                FileSaver.saveAs(file, request.Data.ExportName + "-" + dateSuffix + '.xlsx');
            }, function (error) {
                return _this.HandleExceptions(error, url);
            });
        };
        this.Invoke = function (methodName, domain, Data, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            return null;
        };
        /**
         * Use to Get Resouce with complex parameters
         * @param domain
         * @param Data
         * @param cache
         */
        this.Post = function (domain, Data, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            var /** @type {?} */ c = _this.GetFromCache(cache);
            if (c)
                return Rx.Observable.of(c);
            _this.ValidateInput("Get", domain, Data);
            _this.loaderService.display(showLoadIndicator);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            _this.logger.logObject("Post - " + url, Data);
            Data = _this.AddContextToRequest(Data);
            var /** @type {?} */ options = _this.PrepareRequestOptions();
            return _this.http.post(url, Data, options)
                .map(function (response) {
                var /** @type {?} */ resObj = _this.ParseJson(response);
                _this.AddToCache(resObj, cache);
                return resObj;
            }).catch(function (error) {
                return _this.HandleExceptions(error, url);
            });
        };
        this.PostAnonymous = function (domain, Data, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            return null;
        };
        /**
         *
         * @param domain - Name of the Domain
         * @param id - Unique Id for search
         * @param field - Search Field
         * @param cache -
         */
        this.GetById = function (domain, id, field, cache) {
            var /** @type {?} */ clientRequest = new ClientRequestDTO();
            clientRequest.MetaData.Action = "FindAsync";
            var /** @type {?} */ search_criteria = {
                CriteriaType: 'BySearch',
                Options: { BrowseFrom: 1, BrowseTo: 10, CaseSensitive: false, ShowActive: true, ShowInactive: true, SortField: field, SortOrder: 'A' },
                SearchCriteria: []
            };
            var /** @type {?} */ general_criteria = { SearchConcatenatorId: 'AND', SearchFieldId: field, SearchOperatorId: '=', SearchValue: id.toString() };
            search_criteria.SearchCriteria.push(general_criteria);
            clientRequest.Data = search_criteria;
            return _this.Post(domain, clientRequest, cache);
        };
        /**
         * Create
         * @param domain
         * @param Data
         * @param cache
         */
        this.Put = function (domain, Data, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            _this.ValidateInput("Get", domain, Data);
            _this.loaderService.display(showLoadIndicator);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            Data = _this.AddContextToRequest(Data);
            var /** @type {?} */ options = _this.PrepareRequestOptions();
            _this.logger.logObject("Put - " + url, Data);
            return _this.http.put(url, Data, options)
                .map(function (response) {
                var /** @type {?} */ resObj = _this.ParseJson(response);
                return resObj;
            }).catch(function (error) {
                return _this.HandleExceptions(error, url);
            });
        };
        /**
         * Modify / Update
         * @param domain
         * @param Data
         * @param cache
         */
        this.Patch = function (domain, Data, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            _this.ValidateInput("Get", domain, Data);
            _this.loaderService.display(showLoadIndicator);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            Data = _this.AddContextToRequest(Data);
            var /** @type {?} */ options = _this.PrepareRequestOptions();
            _this.logger.logObject("Patch - " + url, Data);
            return _this.http.patch(url, Data, options)
                .map(function (response) {
                var /** @type {?} */ resObj = _this.ParseJson(response);
                return resObj;
            }).catch(function (error) {
                return _this.HandleExceptions(error, url);
            });
        };
        /**
         *
         * @param domain
         * @param Data
         * @param cache
         */
        this.Delete = function (domain, Data, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            _this.ValidateInput("Get", domain, Data);
            _this.loaderService.display(showLoadIndicator);
            // this.logger.log("Delete - " + url, Data, LogLevel.Info);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            Data = _this.AddContextToRequest(Data);
            var /** @type {?} */ options = _this.PrepareRequestOptions();
            return _this.http.delete(url, options)
                .map(function (response) {
                var /** @type {?} */ resObj = _this.ParseJson(response);
                return resObj;
            }).catch(function (error) {
                return _this.HandleExceptions(error, url);
            });
        };
    }
    /**
     * @param {?} options
     * @return {?}
     */
    DataService.prototype.GetFromCache = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (options && options.Cache) {
            return this._cache.Get(options.Key);
        }
        return null;
    };
    /**
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    DataService.prototype.AddToCache = /**
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (data, options) {
        if (options && options.Cache) {
            return this._cache.Set(options.Key, data, options.Options);
        }
    };
    /**
     * @param {?} func
     * @param {?} domain
     * @param {?} Data
     * @return {?}
     */
    DataService.prototype.ValidateInput = /**
     * @param {?} func
     * @param {?} domain
     * @param {?} Data
     * @return {?}
     */
    function (func, domain, Data) {
        if (!domain) {
            throw 'Validation failed for ' + func + 'domain name missing';
        }
        
        if (Data == null) {
            throw 'Validation failed for ' + func + 'input data missing';
        }
        
    };
    DataService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    DataService.ctorParameters = function () { return [
        { type: http.Http, },
        { type: LoaderService, },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IConfigService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['ILogService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['ICacheService',] },] },
    ]; };
    return DataService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var CoreActionTypes = {
    TCMMessageReceived: '[Core] TCMMessageReceived',
    DashboardMessageReceived: '[Core] DashboardMessageReceived',
    SetCurrentInboxItem: '[Core] Set Inbox Item',
};
var TCMMessageReceived = /** @class */ (function () {
    function TCMMessageReceived(payload) {
        this.payload = payload;
        this.type = CoreActionTypes.TCMMessageReceived;
    }
    return TCMMessageReceived;
}());
var DashboardMessageReceived = /** @class */ (function () {
    function DashboardMessageReceived(payload) {
        this.payload = payload;
        this.type = CoreActionTypes.DashboardMessageReceived;
    }
    return DashboardMessageReceived;
}());
var SetCurrentInboxItem = /** @class */ (function () {
    function SetCurrentInboxItem(payload) {
        this.payload = payload;
        this.type = CoreActionTypes.SetCurrentInboxItem;
    }
    return SetCurrentInboxItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-25    Created
*/
var DashboardService = /** @class */ (function () {
    //private messages: Array<DashboardData> = new Array<DashboardData>();
    //public newMessage: Subject<DashboardData> = new Subject<DashboardData>();
    function DashboardService(_signalR, store$$1, coreConfig) {
        var _this = this;
        this._signalR = _signalR;
        this.store = store$$1;
        this.coreConfig = coreConfig;
        this.Init = function (hubName, userContext, options) {
            console.log("Dashboard Serive Init-->Start");
            var /** @type {?} */ conf = {
                hubName: hubName,
                qs: userContext.RegUser,
                url: _this.coreConfig.Config.SignalRUrl,
                jsonp: true
            };
            var /** @type {?} */ conx = _this._signalR.createConnection(conf);
            console.log(conf);
            conx.status.subscribe(function (s) { return console.warn("Signalr connection status-->" + s.name); });
            conx.start().then(function (c) {
                var /** @type {?} */ listener = c.listenFor('newMessage');
                listener.subscribe(function (message) {
                    console.log('received ' + message);
                    //Convert string to JSON.
                    message.Data = JSON.parse(message.Data);
                    _this.store.dispatch(new DashboardMessageReceived(message));
                    //this.AddMessagesToCollection(message);
                    //this.newMessage.next(message);
                });
                // invoke a server side method, with parameters
                c.invoke('RegisterUser', userContext).then(function (result) {
                    //return result;
                });
            });
            return Rx.Observable.of(true);
        };
    }
    DashboardService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    DashboardService.ctorParameters = function () { return [
        { type: ngxSignalr.SignalR, },
        { type: store.Store, },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IConfigService',] },] },
    ]; };
    return DashboardService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-25    Created
*/
var MessageService = /** @class */ (function () {
    function MessageService(_signalR, coreConfig, auth, store$$1) {
        var _this = this;
        this._signalR = _signalR;
        this.coreConfig = coreConfig;
        this.auth = auth;
        this.store = store$$1;
        this.messages = new Array();
        this.newTCMMessage = new Rx.Subject();
        this.conx = null;
        this.counter = 0;
        this.Init = function (hubName, userContext, options) {
            console.log("TCM Message Serive Init-->Start");
            var /** @type {?} */ conf = {
                hubName: hubName,
                qs: userContext.RegUser,
                url: _this.coreConfig.Config.SignalRUrl,
                jsonp: true
            };
            _this.conx = _this._signalR.createConnection(conf);
            console.log(conf);
            _this.conx.status.subscribe(function (s) { return console.warn("Signalr connection status-->" + s.name); });
            _this.conx.start().then(function (c) {
                var /** @type {?} */ listener = c.listenFor('newTCMMessage');
                listener.subscribe(function (message) {
                    console.log('received ' + message);
                    //Convert string to JSON.
                    var /** @type {?} */ m = JSON.parse(message);
                    _this.store.dispatch(new TCMMessageReceived(m));
                    //this.AddMessagesToCollection(m);
                    //this.newTCMMessage.next(m);
                });
                // invoke a server side method, with parameters
                c.invoke('RegisterUser', userContext).then(function (result) {
                    //return result;
                });
            });
            return Rx.Observable.of(true);
        };
    }
    /**
     * @param {?} message
     * @param {?} target
     * @param {?} messageId
     * @return {?}
     */
    MessageService.prototype.SendMessage = /**
     * @param {?} message
     * @param {?} target
     * @param {?} messageId
     * @return {?}
     */
    function (message, target, messageId) {
        if (!messageId) {
            messageId = (this.counter).toString();
            this.counter++;
        }
        var /** @type {?} */ m = new MessageWrapper();
        m.Target = target;
        m.Context = this.auth.GetUserContext();
        m.Message = message;
        m.MessageId = messageId;
        this.conx.status.subscribe(function (s) { return console.warn("Signalr connection status-->" + s.name); });
        var /** @type {?} */ r = this.conx.start().then(function (c) {
            return Rx.Observable.fromPromise(c.invoke('ReceiveClientMessage', m));
        });
        return r;
    };
    MessageService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    MessageService.ctorParameters = function () { return [
        { type: ngxSignalr.SignalR, },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IConfigService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IAuthService',] },] },
        { type: store.Store, },
    ]; };
    return MessageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-12    Created
*/
var AuthService = /** @class */ (function () {
    //public onContext: Subject<ContextDTO> = new Subject<ContextDTO>();
    function AuthService(window, dataService) {
        var _this = this;
        this.window = window;
        this.dataService = dataService;
        this.isAutheticated = false;
        this.IsAuthenticated = function () {
            return _this.UserContext ? _this.UserContext.IsAutheticated : false;
        };
        this.AutheticateExternal = function (credentials) {
            return null;
        };
        this.PreAutheticate = function () {
            return null;
        };
        this.GetExpiryDate = function () {
            return null;
        };
        this.Autheticate = function () {
            var /** @type {?} */ request = new ClientRequestDTO();
            request.MetaData.Action = "Autheticate";
            return _this.dataService.Post("Auth", request, null).map(function (response) {
                _this.UserContext = response.Data;
                var /** @type {?} */ strContext = JSON.stringify(_this.UserContext.Context);
                var /** @type {?} */ strToken = _this.UserContext.Token;
                sessionStorage.setItem("UserToken", strToken);
                sessionStorage.setItem("UserContext", strContext);
                return _this.UserContext;
            });
        };
        this.IsInRole = function (role) {
            return _this.UserContext.Roles.filter(function (x) { return x === role; }).length > 0;
        };
        this.IsAuthorisedForUpdate = function (roles) {
            return true;
            //var found = roles.some(r => this.UserContext.Roles.includes(r))
            //return found;
        };
        this.IsAuthorisedForCreate = function (roles) {
            return true;
            //var found = roles.some(r => this.UserContext.Roles.includes(r))
            //return found;
        };
        this.DecodeUserToken = function () {
            if (_this.UserContext.Token) {
                var /** @type {?} */ base64Url = _this.UserContext.Token.split('.')[1];
                var /** @type {?} */ base64 = base64Url.replace('-', '+').replace('_', '/');
                return JSON.parse(_this.window.nativeWindow.atob(base64));
            }
            return null;
        };
    }
    /**
     * @return {?}
     */
    AuthService.prototype.GetUserContext = /**
     * @return {?}
     */
    function () {
        return this.UserContext ? this.UserContext.Context : null;
    };
    AuthService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['IWindowRef',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IDataService',] },] },
    ]; };
    return AuthService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-08    Created
*/
/**
 * @return {?}
 */
function _window() {
    return window;
}
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    WindowRef.ctorParameters = function () { return []; };
    return WindowRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-05-16    Created
*/
var UserSettingsService = /** @class */ (function () {
    function UserSettingsService(logger, dataService, zone, winRef, coreConfig) {
        var _this = this;
        this.logger = logger;
        this.dataService = dataService;
        this.zone = zone;
        this.winRef = winRef;
        this.coreConfig = coreConfig;
        this.dirty = false;
        this.bucket = "XFM";
        this.UpdatePageSettings = function (pageId, pageSettings) {
            var /** @type {?} */ existing = false;
            if (_this.UserSettings == null)
                _this.UserSettings = { Key: _this.userId, Bucket: _this.bucket, Value: [] };
            if (_this.UserSettings.Value == null)
                _this.UserSettings.Value = [];
            for (var /** @type {?} */ i = 0; i < _this.UserSettings.Value.length; i++) {
                if (_this.UserSettings.Value[i].PageId == pageId) {
                    _this.dirty = existing = true;
                    _this.UserSettings.Value[i].PageData = pageSettings.PageData;
                    break;
                }
            }
            if (!existing) {
                _this.dirty = !existing;
                _this.UserSettings.Value.push(pageSettings);
            }
        };
        this.GetUserSettingsForPage = function (pageId) {
            if (_this.UserSettings != null && _this.UserSettings.Value != null) {
                for (var /** @type {?} */ i = 0; i < _this.UserSettings.Value.length; i++) {
                    if (_this.UserSettings.Value[i].PageId == pageId) {
                        return _this.UserSettings.Value[i];
                    }
                }
            }
        };
        this.GetByObject = function (userSettings) {
            var /** @type {?} */ request = new ClientRequestDTO();
            request.MetaData.Action = "FindAsync";
            request.Data = userSettings;
            return _this.dataService.Post("UserSettings", request, null, false);
        };
        this.FetchUserSettings = function (userSettings) {
            console.log("Fetching user settings");
            _this.userId = userSettings.Key;
            _this.bucket = userSettings.Bucket;
            return _this.GetByObject(userSettings).map(function (result) {
                if (result.Success) {
                    console.log("Fetching user settings--->Done");
                    var /** @type {?} */ setting = result.Data;
                    _this.UserSettings = setting;
                    _this.UserSettings.Value = JSON.parse(setting.Value);
                    var /** @type {?} */ globalSettings = _this.GetUserSettingsForPage("Global");
                    if (!globalSettings) {
                        globalSettings = new PageSettings();
                        globalSettings.PageId = 'Global';
                        globalSettings.PageData.push({ ControlId: 'Lang', ControlData: 'sv-SE' });
                        globalSettings.PageData.push({ ControlId: 'Theme', ControlData: 'primary' });
                        _this.UpdatePageSettings('Global', globalSettings);
                    }
                    return _this.UserSettings;
                }
                console.log("Fetching user settings--->Error");
                console.log(result.ErrorList);
                return null;
            });
        };
        this.Update = function (obj) {
            var /** @type {?} */ request = new ClientRequestDTO();
            request.MetaData.Action = "UpdateAsync";
            request.Data = obj;
            return _this.dataService.Post("UserSettings", request, null, false);
        };
        this.SaveUserSettings = function () {
            if (!_this.coreConfig.Config.userPersistence)
                return;
            var /** @type {?} */ self = _this;
            if (self.dirty && self.UserSettings != null) {
                try {
                    console.log('SaveUserSettings()');
                    var /** @type {?} */ tempData = $.extend({}, self.UserSettings);
                    tempData.Value = JSON.stringify(tempData.Value);
                    self.dirty = false;
                    _this.Update(JSON.stringify(tempData)).subscribe(function (result) { return console.log(result); });
                }
                catch (/** @type {?} */ ex) {
                    
                }
            }
        };
        this.winRef.nativeWindow.onbeforeunload = function (event) {
            this.SaveUserSettings();
        };
        this.zone.runOutsideAngular(function () {
            //Evevry second
            timer.timer(10000, 10000).subscribe(function (val) {
                _this.zone.run(function () {
                    _this.SaveUserSettings();
                });
            });
        });
    }
    /**
     * @return {?}
     */
    UserSettingsService.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UserSettingsService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    UserSettingsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['ILogService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IDataService',] },] },
        { type: core.NgZone, },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IWindowRef',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IConfigService',] },] },
    ]; };
    return UserSettingsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var ConfigService = /** @class */ (function () {
    function ConfigService(http$$1) {
        var _this = this;
        this.http = http$$1;
        this._filepath = './assets/config/config.json';
        this.ReadConfigFile = function () {
            return _this.http.get(_this._filepath).map(function (response) {
                var /** @type {?} */ result = /** @type {?} */ (response.json());
                _this._config = result;
                return result;
            });
        };
    }
    /**
     * @return {?}
     */
    ConfigService.prototype.Init = /**
     * @return {?}
     */
    function () {
        return this.ReadConfigFile();
    };
    Object.defineProperty(ConfigService.prototype, "Config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    ConfigService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: http.Http, },
    ]; };
    return ConfigService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-03-22    Created
*/
var StaticDataService = /** @class */ (function () {
    function StaticDataService(locale, http$$1) {
        var _this = this;
        this.locale = locale;
        this.http = http$$1;
        this._cache = [];
        this._filepath = './assets/data/staticdata-{}.json';
        this.GetStaticDataItems = function (key) {
            var /** @type {?} */ cachedObject = _this.GetStaticData(key);
            if (cachedObject)
                return cachedObject.Items;
            return null;
        };
        this.GetStaticDataList = function (keys) {
            var /** @type {?} */ cacheList = new Array();
            for (var /** @type {?} */ i = 0; i < keys.length; i++) {
                cacheList.push(_this.GetStaticData(keys[i]));
            }
            return cacheList;
        };
        this.GetStaticData = function (key) {
            if (_this._cache != null && _this._cache.length > 0) {
                return _this._cache.filter(function (x) { return x.GroupCode.trim() == key.trim(); })[0];
            }
            return null;
        };
        this.LoadStaticData = function () {
            console.log("Loading static data");
            return _this.http.get(_this._filepath).map(function (response) {
                console.log("Loading static data-->Done");
                var /** @type {?} */ result = response.json();
                _this._cache = result;
                return result;
            });
        };
        this._filepath = this._filepath.replace(/{}/g, locale);
    }
    StaticDataService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    StaticDataService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
        { type: http.Http, },
    ]; };
    return StaticDataService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-03-22    Created
*/
var AppBootstrap = /** @class */ (function () {
    function AppBootstrap(auth, staticData, themeService, dashboardService, configService, userSettings, _locale, tcmMessageService, translate) {
        var _this = this;
        this.auth = auth;
        this.staticData = staticData;
        this.themeService = themeService;
        this.dashboardService = dashboardService;
        this.configService = configService;
        this.userSettings = userSettings;
        this._locale = _locale;
        this.tcmMessageService = tcmMessageService;
        this.translate = translate;
        this.ApplicationId = '';
        this.Bootstrap = function (applicationId) {
            return new Promise(function (resolve, reject) {
                _this.ApplicationId = applicationId;
                console.log('Application Initialization started');
                console.log('Calling config service ------>');
                _this.configService.Init().subscribe(function (config) {
                    console.log('Configurations read --->');
                    console.log(config);
                    console.log('setting language translation culture to --->' + _this._locale);
                    _this.translate.setDefaultLang(_this._locale);
                    console.log('Getting user token');
                    _this.auth.Autheticate().subscribe(function (data) {
                        var /** @type {?} */ subscribersArray = [];
                        if (config.userPersistence) {
                            console.log('User persistence read --->');
                            var /** @type {?} */ token = _this.auth.DecodeUserToken();
                            var /** @type {?} */ searchCriteria = { Value: null, Bucket: _this.ApplicationId, Key: token.unique_name };
                            subscribersArray.push(_this.userSettings.FetchUserSettings(searchCriteria));
                        }
                        if (config.staticData) {
                            console.log('Static Data read --->');
                            subscribersArray.push(_this.staticData.LoadStaticData());
                        }
                        if (config.dashBoard) {
                            console.log('Dashboard read --->');
                            subscribersArray.push(_this.dashboardService.Init('DashboardQueryHub', data.Context, null));
                        }
                        if (config.tcmMessages) {
                            console.log('TCMMessage read --->');
                            subscribersArray.push(_this.tcmMessageService.Init('TCMMessageHub', data.Context, null));
                        }
                        forkJoin.forkJoin(subscribersArray).subscribe(function (result) {
                            console.log('Fork calls completed --->');
                            _this.themeService.init();
                            return resolve(true);
                        });
                    }, function (error) {
                        console.log(error);
                        reject(error);
                    });
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            });
        };
    }
    AppBootstrap.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    AppBootstrap.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['IAuthService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IStaticDataService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IThemeService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IWebSocketService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IConfigService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IUserSettingsService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['ITCMWebSocketService',] },] },
        { type: ng2Translate.TranslateService, },
    ]; };
    return AppBootstrap;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-10    Created
*/
var TCMCacheService = /** @class */ (function () {
    function TCMCacheService(_cacheService) {
        this._cacheService = _cacheService;
        this.BUILD_VERSION = 1.0;
        this._cacheService.setGlobalPrefix("TCM");
    }
    /**
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    TCMCacheService.prototype.Set = /**
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (key, data, options) {
        return this._cacheService.set(key, data);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TCMCacheService.prototype.Get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._cacheService.get(key);
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    TCMCacheService.prototype.GetTagData = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        return this._cacheService.getTagData(tag);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TCMCacheService.prototype.Exists = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._cacheService.exists(key);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TCMCacheService.prototype.Remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._cacheService.remove(key);
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    TCMCacheService.prototype.RemoveTag = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        return this._cacheService.removeTag(tag);
    };
    /**
     * @return {?}
     */
    TCMCacheService.prototype.RemoveAll = /**
     * @return {?}
     */
    function () {
        return this._cacheService.removeAll();
    };
    TCMCacheService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    TCMCacheService.ctorParameters = function () { return [
        { type: ng2CacheService.CacheService, },
    ]; };
    return TCMCacheService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-01    Created
  Show additional buy non critical information in a sidebar which opens from right.
  The HTML is indicative, replace with your own implementation.

*/
var AppContextComponent = /** @class */ (function () {
    function AppContextComponent() {
        this.test = new Date();
    }
    AppContextComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'appcontext-cmp',
                    template: "<div class=\"modal fade\" id=\"user\" data-backdrop=\"false\"> <div class=\"right w-quarter bg-white md-whiteframe-z2\"> <div class=\"box\"> <div class=\"p p-h-md\"> <a data-dismiss=\"modal\" class=\"pull-right text-muted-lt text-2x m-t-n inline p-sm\">&times;</a> <strong>Context</strong> </div> <div class=\"box-row bg-light lt\"> <div class=\"box-cell\"> <div class=\"box-inner\"> <div class=\"p-md\"> <div class=\"m-b\"> <a href class=\"pull-left w-40 m-r-sm\"><img src=\"assets/img/a2.jpg\" alt=\"...\" class=\"w-full img-circle\"></a> <div class=\"clear\"> <div class=\"p p-v-sm bg-warning inline r\"> Hi John, What's up... </div> <div class=\"text-muted-lt text-xs m-t-xs\"><i class=\"fa fa-ok text-success\"></i> 2 minutes ago</div> </div> </div> <div class=\"m-b\"> <a href class=\"pull-right w-40 m-l-sm\"><img src=\"assets/img/a3.jpg\" class=\"w-full img-circle\" alt=\"...\"></a> <div class=\"clear text-right\"> <div class=\"p p-v-sm bg-info inline text-left r\"> Lorem ipsum dolor soe rooke.. </div> <div class=\"text-muted-lt text-xs m-t-xs\">1 minutes ago</div> </div> </div> <div class=\"m-b\"> <a href class=\"pull-left w-40 m-r-sm\"><img src=\"assets/img/a2.jpg\" alt=\"...\" class=\"w-full img-circle\"></a> <div class=\"clear\"> <div class=\"p p-v-sm bg-warning inline r\"> Good! </div> <div class=\"text-muted-lt text-xs m-t-xs\"><i class=\"fa fa-ok text-success\"></i> 5 seconds ago</div> </div> </div> <div class=\"m-b\"> <a href class=\"pull-right w-40 m-l-sm\"><img src=\"assets/img/a3.jpg\" class=\"w-full img-circle\" alt=\"...\"></a> <div class=\"clear text-right\"> <div class=\"p p-v-sm bg-info inline text-left r\"> Dlor soe isep.. </div> <div class=\"text-muted-lt text-xs m-t-xs\">Just now</div> </div> </div> </div> </div> </div> </div> <div class=\"p-h-md p-v\"> <a class=\"pull-left w-32 m-r\"><img src=\"assets/img/a3.jpg\" class=\"w-full img-circle\" alt=\"...\"></a> <form> <div class=\"input-group\"> <input type=\"text\" class=\"form-control\" placeholder=\"Say something\"> <span class=\"input-group-btn\"> <button class=\"btn btn-default\" type=\"button\">SEND</button> </span> </div> </form> </div> </div> </div> </div> "
                },] },
    ];
    return AppContextComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01   Created
*/
var NavigationService = /** @class */ (function () {
    function NavigationService(logger, router$$1, route) {
        var _this = this;
        this.logger = logger;
        this.router = router$$1;
        this.route = route;
        this._routes = [];
        this.Navigate = function (key) {
            //let path = this.GenerateNavigationPath(key);
            var /** @type {?} */ path = _this.GetPath(key);
            _this.logger.log("Navigating to " + path);
            _this.router.navigate([path]).catch(function (reason) {
                _this.logger.error(reason);
            });
        };
        this.NavigateWithQueryParams = function (key, params) {
            //let path = this.GenerateNavigationPath(key);
            var /** @type {?} */ path = _this.GetPath(key);
            _this.logger.log("Navigating to " + path);
            _this.logger.log("Navigation data " + params);
            _this.router.navigate([path], { queryParams: { data: JSON.stringify(params) } }).catch(function (reason) {
                _this.logger.error(reason);
            });
        };
        this.NavigateWithMandatoryParams = function (key, params) {
            var /** @type {?} */ path = _this.GetPath(key);
            _this.logger.log("Navigating to " + path);
            _this.logger.log("Navigation data " + params);
            _this.router.navigate([path], params).catch(function (reason) {
                _this.logger.error(reason);
            });
        };
        this.NavigateWithExtras = function (key, navigationExtras) {
            var /** @type {?} */ path = _this.GetPath(key);
            _this.logger.log("Navigating to " + path);
            _this.logger.log("Navigation data " + navigationExtras);
            _this.router.navigate([path], navigationExtras).catch(function (reason) {
                _this.logger.error(reason);
            });
        };
        this._routes = this.router.config;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    NavigationService.prototype.GetPath = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var /** @type {?} */ y = null;
        var /** @type {?} */ path = '';
        for (var /** @type {?} */ i = 0; i < this._routes.length; i++) {
            y = this.GetMatchingPath(key, this._routes[i]);
            if (y) {
                return (y.id === this._routes[i].id) ? y.path : this._routes[i].path + '/' + y.path;
            }
        }
        return path;
    };
    /**
     * @param {?} id
     * @param {?} currentNode
     * @return {?}
     */
    NavigationService.prototype.GetMatchingPath = /**
     * @param {?} id
     * @param {?} currentNode
     * @return {?}
     */
    function (id, currentNode) {
        var /** @type {?} */ i, /** @type {?} */ currentChild, /** @type {?} */ result;
        if (id == currentNode.id) {
            return currentNode;
        }
        else {
            if (currentNode.children == null)
                return false;
            // Use a for loop instead of forEach to avoid nested functions
            // Otherwise "return" will not work properly
            for (i = 0; i < currentNode.children.length; i += 1) {
                currentChild = currentNode.children[i];
                // Search in the current child
                result = this.GetMatchingPath(id, currentChild);
                // Return the result if the node has been found
                if (result !== false) {
                    return result;
                }
            }
            // The node has not been found and we have no more options
            return false;
        }
    };
    NavigationService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    NavigationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['ILogService',] },] },
        { type: router.Router, },
        { type: router.ActivatedRoute, },
    ]; };
    return NavigationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-03    Created
*/
var LogService = /** @class */ (function () {
    function LogService(http$$1, configService) {
        var _this = this;
        this.http = http$$1;
        this.configService = configService;
        this.logObject = function (message, obj) {
            if (!obj)
                console.error(message + " Object is NULL");
            var /** @type {?} */ objstr = JSON.stringify(obj);
            console.log(message, objstr);
        };
        this.log = function (message) {
            console.log(message);
        };
        this.warn = function (message) {
            console.warn(message);
        };
        this.info = function (message) {
            console.info(message);
        };
        this.error = function (message) {
            console.error(message);
            if (_this.configService.Config.ServerLog)
                _this.logServer(message, 'error');
        };
        this.debug = function (message) { console.debug(message); };
        this.logServer = function (message, type) {
            var /** @type {?} */ msg = { user: "", url: "", message: message, type: type };
            var /** @type {?} */ url = _this.configService.Config.WebApiUrl + 'Jslog';
            return _this.http.post(url, msg).subscribe();
        };
    }
    LogService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    LogService.ctorParameters = function () { return [
        { type: http.Http, },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IConfigService',] },] },
    ]; };
    return LogService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
  Empty container.
*/
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-container',
                    template: "<router-outlet></router-outlet> ",
                },] },
    ];
    return ContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-25    Created
*/
var TCMErrorStateMatcher = /** @class */ (function () {
    function TCMErrorStateMatcher() {
    }
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    TCMErrorStateMatcher.prototype.isErrorState = /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    function (control, form) {
        return (control && control.invalid && (control.dirty || control.touched));
    };
    TCMErrorStateMatcher.decorators = [
        { type: core.Directive, args: [{
                    selector: '[TCMErrorStateMatcher]',
                    providers: [
                        {
                            provide: forms.NG_VALIDATORS,
                            useExisting: TCMErrorStateMatcher,
                            multi: true
                        }
                    ]
                },] },
    ];
    return TCMErrorStateMatcher;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var SimpleAutoCompleteComponent = /** @class */ (function (_super) {
    __extends(SimpleAutoCompleteComponent, _super);
    function SimpleAutoCompleteComponent(translate) {
        return _super.call(this, translate) || this;
    }
    SimpleAutoCompleteComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'simple-auto-complete',
                    exportAs: 'simple-auto-complete',
                    styles: ["\n    .default-text {\n        color: inherit;\n    }\n    .mat-autocomplete-panel {\n      min-width: 400px;\n    }\n    .mat-hint {\n        color: rgba(9, 47, 247, 0.98);\n    }\n    .error-text {\n        color: red;\n    }"],
                    viewProviders: [{ provide: forms.ControlContainer, useExisting: forms.NgForm }],
                    encapsulation: core.ViewEncapsulation.None,
                    template: "<div class=\"form-group has-success has-feedback\"> <!--<span class=\"input-group-addon\">@</span>--> <input type=\"text\" class=\"form-control\" [matAutocomplete]=\"auto\" [formControl]=\"bb\" [ngModel]=\"objSearch\" [required]=\"options.required\" placeholder=\"{{options.placeholder}}\" name=\"{{options.id}}\" id=\"{{options.id}}\" [disabled]=\"options.required\"> <!--<span class=\"glyphicon glyphicon-ok form-control-feedback\"></span>--> <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayObject\" panelWidth=\"400px\" (optionSelected)=\"ObjectSelected($event)\"> <mat-option *ngFor=\"let obj of ObjList\" [value]=\"obj\"> <span class=\"small\">{{GetObjectValue(obj, options.displayProp)}}</span> <span class=\"small\" *ngIf=\"options?.displayProp2 != null\"> - {{GetObjectValue(obj, options.displayProp2)}}</span> </mat-option> </mat-autocomplete> </div> "
                },] },
    ];
    /** @nocollapse */
    SimpleAutoCompleteComponent.ctorParameters = function () { return [
        { type: ng2Translate.TranslateService, },
    ]; };
    return SimpleAutoCompleteComponent;
}(AutoCompleteComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-05    Created
*/
/**
 * @abstract
 */
var ModuleBaseComponent = /** @class */ (function () {
    function ModuleBaseComponent(pageId, moduleName, ServiceLocator) {
        var _this = this;
        this.pageId = pageId;
        this.moduleName = moduleName;
        this.ServiceLocator = ServiceLocator;
        this.currentSection = '';
        this.inboxItem = null;
        this.CanUpdate = function () {
            var /** @type {?} */ role = _this.configService.Config.updateRoles;
            if (role)
                return _this.authService.IsInRole(role);
            return true;
        };
        this.CanCreate = function () {
            var /** @type {?} */ role = _this.configService.Config.createRoles;
            if (role)
                return _this.authService.IsInRole(role);
            return true;
        };
        this.NotifyUserForSaveChange = function () {
            if (_this.CheckIfDirty())
                _this.openSnackBar("Please save unsaved changes", "Save");
        };
        this.convertCharCodes = function (stringToFormat) {
            return stringToFormat.replace(/&#(\d+);/g, function (match, number) { return String.fromCharCode(number); });
        };
        this.htmlDecode = function (value) {
            if (value && (value === '&nbsp;' || value === '&#160;' || (value.length === 1 && value.charCodeAt(0) === 160))) {
                return "";
            }
            return !value ? value : String(value).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
        };
        this.htmlEncode = function (value) {
            return !value ? value : String(value).replace(/&/g, "&amp;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        };
        this.s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        this.guid = function () {
            var /** @type {?} */ guid = _this.s4() + _this.s4() + '-' + _this.s4() + '-' + _this.s4() + '-' +
                _this.s4() + '-' + _this.s4() + _this.s4() + _this.s4();
            //TCM accepts only 20 char.
            guid = guid.substring(0, 19);
            return guid;
        };
        this.GetThemeColor = function (themeName) {
            var /** @type {?} */ color = "purple";
            switch (themeName) {
                case 'primary':
                    color = 'purple';
                    break;
                case 'info':
                    color = 'blue';
                    break;
                case 'danger':
                    color = 'red';
                    break;
                case 'warning':
                    color = 'orange';
                    break;
            }
            return color;
        };
        this.GetPersistenceForControl = function (controlId) {
            var /** @type {?} */ data = null;
            if (_this.pageSettings && _this.pageSettings.PageData) {
                $.each(_this.pageSettings.PageData, function (index, val) {
                    if (val.ControlId === controlId) {
                        data = val.ControlData;
                        return false;
                    }
                });
            }
            return data;
        };
        this.UpdatePersistenceForControl = function (controlPersistenceObj) {
            var /** @type {?} */ existingSettings = false;
            if (_this.pageSettings && _this.pageSettings.PageData) {
                $.each(_this.pageSettings.PageData, function (index, val) {
                    if (val.ControlId === controlPersistenceObj.ControlId) {
                        val.ControlData = controlPersistenceObj.ControlData;
                        existingSettings = true;
                        return false;
                    }
                });
            }
            if (!existingSettings) {
                if (_this.pageSettings == null) {
                    _this.pageSettings = new PageSettings();
                    _this.pageSettings.PageId = _this.pageId;
                    _this.pageSettings.PageData = new Array();
                }
                _this.pageSettings.PageData.push({ ControlId: controlPersistenceObj.ControlId, ControlData: controlPersistenceObj.ControlData });
            }
            _this.userSettingsService.UpdatePageSettings(_this.pageId, _this.pageSettings);
        };
        this.GetUserSettingsForPage = function () {
            return _this.userSettingsService.GetUserSettingsForPage(_this.pageId);
        };
        this.StrToDate = function (str) {
            return new Date(str);
        };
        this.GetStaticData = function (key) {
            return _this.staticDataService.GetStaticData(key);
        };
        this.GetStaticDataList = function (keys) {
            return _this.staticDataService.GetStaticDataList(keys);
        };
        this.GetStaticDataItems = function (key) {
            return _this.staticDataService.GetStaticDataItems(key);
        };
        this.NotifySuccess = function (message) {
            _this.toastrService.success(message, "Success");
        };
        this.NotifyErrorMessage = function (message) {
            _this.toastrService.error(message, 'Error', { closeButton: true, timeOut: 10000, positionClass: 'toast-top-full-width' });
        };
        this.NotifyError = function (errors) {
            var /** @type {?} */ err = '<ul>';
            for (var /** @type {?} */ i = 0; i < errors.length; i++) {
                err += '<li>';
                err += errors[i].ErrorMessage;
                err += '</li>';
            }
            err += '</ul>';
            _this.toastrService.error(err, 'Error', { enableHtml: true, closeButton: true, timeOut: 10000, positionClass: 'toast-top-full-width' });
        };
        this.NotifyWarning = function (message) {
            _this.toastrService.warning(message, "Warning");
        };
        this.NotifyInfo = function (message) {
            _this.toastrService.info(message, "Information");
        };
        this.snackBar = ServiceLocator.injector.get(material.MatSnackBar);
        this.zone = ServiceLocator.injector.get(core.NgZone);
        this.router = ServiceLocator.injector.get(router.Router);
        this.route = ServiceLocator.injector.get(router.ActivatedRoute);
        this.translate = ServiceLocator.injector.get(ng2Translate.TranslateService);
        this.store = ServiceLocator.injector.get(store.Store);
        this.configService = ServiceLocator.injector.get('IConfigService');
        this.logService = ServiceLocator.injector.get('ILogService');
        this.authService = ServiceLocator.injector.get('IAuthService');
        this.toastrService = ServiceLocator.injector.get(ngxToastr.ToastrService);
        this.cacheService = ServiceLocator.injector.get('ICacheService');
        this.userSettingsService = ServiceLocator.injector.get('IUserSettingsService');
        this.themeService = ServiceLocator.injector.get('IThemeService');
        this.staticDataService = ServiceLocator.injector.get('IStaticDataService');
        
        this.navigation = ServiceLocator.injector.get('INavigationService');
        this.winRef = ServiceLocator.injector.get('IWindowRef');
        this.pageSettings = this.GetUserSettingsForPage();
        this.lastSubQuery = {};
        //this.zone.runOutsideAngular(() => {
        this.ticker = Rx.Observable.interval(20000)
            .subscribe(function (val) {
            _this.zone.run(function () {
                //console.log('called');
                //console.log('called');
                _this.NotifyUserForSaveChange();
            });
        });
        //});
        //this.zone.runOutsideAngular(() => {
        //  this.ticker = Observable.interval(20000)
        //    .subscribe((val) => {
        //      this.zone.run(() => {
        //        console.log('called');
        //        this.NotifyUserForSaveChange();
        //      });
        //    })
        //});
        //this.store.pipe(select(getSelectedInboxItem)).subscribe(x => {
        //  this.inboxItem = x;
        //});
        //this.route.queryParams
        //  .filter(params => 'location' in params)
        //  .map(params => params.location)
        //  .distinctUntilChanged()
        //  .subscribe(lc => {
        //    if (lc && lc.includes("inbox")) {
        //      if (this['GetInboxData']) {
        //        this['GetInboxData'](this.inboxItem.MessageObject.Message)
        //        console.log(this.inboxItem);
        //      }
        //    }
        //  });
    }
    /**
     * @return {?}
     */
    ModuleBaseComponent.prototype.ngOnDestry = /**
     * @return {?}
     */
    function () {
        this.ticker = null;
    };
    /**
     * @param {?} sectionId
     * @return {?}
     */
    ModuleBaseComponent.prototype.onSectionChange = /**
     * @param {?} sectionId
     * @return {?}
     */
    function (sectionId) {
        this.currentSection = sectionId;
    };
    /**
     * @param {?} section
     * @return {?}
     */
    ModuleBaseComponent.prototype.scrollTo = /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        document.querySelector('#' + section)
            .scrollIntoView();
    };
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    ModuleBaseComponent.prototype.openSnackBar = /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    function (message, action) {
        var _this = this;
        this.snackBarRef = this.snackBar.open(message, action, {
            duration: 5000,
        });
        this.snackBarRef.onAction().subscribe(function () {
            _this.Save();
        });
    };
    /**
     * @return {?}
     */
    ModuleBaseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.matcher = new TCMErrorStateMatcher();
    };
    /**
     * @param {?} text
     * @return {?}
     */
    ModuleBaseComponent.prototype.translateDecode = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return this.convertCharCodes(this.translate.instant(text));
    };
    /**
     * @return {?}
     */
    ModuleBaseComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ globalSettings = this.userSettingsService.GetUserSettingsForPage("Global");
        (globalSettings) ? this.theme = globalSettings.PageData.filter(function (ctrl) { return ctrl.ControlId === 'Theme'; })[0].ControlData : this.theme = 'primary';
        this.themeService.theme.subscribe(function (val) {
            if (val === '') {
                val = 'primary';
            }
            _this.theme = val;
            console.log('base form - ' + _this.theme);
        });
        this.theme = this.themeService.currenttheme;
        console.log('base form after view init - ' + this.theme);
    };
    /**
     * @param {?} message
     * @param {?} obj
     * @return {?}
     */
    ModuleBaseComponent.prototype.logObject = /**
     * @param {?} message
     * @param {?} obj
     * @return {?}
     */
    function (message, obj) {
        this.logService.logObject(message, obj);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    ModuleBaseComponent.prototype.log = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.logService.log(message);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    ModuleBaseComponent.prototype.warn = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.logService.warn(message);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    ModuleBaseComponent.prototype.info = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.logService.info(message);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    ModuleBaseComponent.prototype.error = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.logService.error(message);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    ModuleBaseComponent.prototype.debug = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.logService.debug(message);
    };
    return ModuleBaseComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-25    Created
*/
var DashboardServiceCore = /** @class */ (function () {
    function DashboardServiceCore(store$$1, coreConfig) {
        var _this = this;
        this.store = store$$1;
        this.coreConfig = coreConfig;
        this.start = function (userContext) {
            _this._hubConnection.start().then(function (c) {
                _this._hubConnection.invoke('RegisterUser', userContext).then(function (result) {
                    console.log(result);
                });
            }).catch(function (err) { return console.error(err); });
        };
        this.Init = function (hubName, userContext, options) {
            _this._hubConnection = new signalR.HubConnectionBuilder()
                .withUrl(_this.coreConfig.Config.SignalRUrl + ("/" + hubName))
                .configureLogging(signalR.LogLevel.Information)
                .build();
            _this.start(userContext);
            _this._hubConnection.onclose(function () {
                setTimeout(function () { return _this.start(userContext); }, 5000);
            });
            _this._hubConnection.on("newMessage", function (message) {
                console.log('received dashboard message' + message);
                //Convert string to JSON.
                message.Data = JSON.parse(message.Data);
                _this.store.dispatch(new DashboardMessageReceived(message));
            });
            return Rx.Observable.of(true);
        };
    }
    DashboardServiceCore.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    DashboardServiceCore.ctorParameters = function () { return [
        { type: store.Store, },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IConfigService',] },] },
    ]; };
    return DashboardServiceCore;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var Inbox = /** @class */ (function () {
    //@HostBinding('@routeAnimation') routeAnimation = true;
    //@HostBinding('style.display') display = 'block';
    //@HostBinding('style.position') position = 'absolute';
    function Inbox() {
        var _this = this;
        this.folds = [];
        this.labels = [];
        this.inboxes = [];
        this.labelClass = function (label) {
            return {
                'b-l-info': label === 'New',
                'b-l-primary': label === 'Approve',
                'b-l-warning': label === 'Modify',
                'b-l-success': label === 'Delete'
            };
        };
        this.addLabel = function () {
            _this.labels.push({
                name: _this.newLabel.name,
                filter: _this.newLabel.name,
                color: '#ccc'
            });
            _this.newLabel.name = '';
        };
    }
    /**
     * @return {?}
     */
    Inbox.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.Demodata();
    };
    /**
     * @return {?}
     */
    Inbox.prototype.Demodata = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} change
     * @return {?}
     */
    Inbox.prototype.ngOnChanges = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
    };
    /**
     * @return {?}
     */
    Inbox.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    Inbox.prototype.Save = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    Inbox.prototype.CheckIfDirty = /**
     * @return {?}
     */
    function () {
        return false;
    };
    Inbox.decorators = [
        { type: core.Component, args: [{
                    selector: 'inbox',
                    styles: [""],
                    template: "<div class=\"row padding\"> <!--<div class=\"col-md-1\"> <div class=\"hidden-sm hidden-xs\" id=\"inbox-menu\"> <ul class=\"nav nav-pills nav-stacked nav-sm\"> <li *ngFor=\"let fold of folds\" routerLinkActive=\"active\"> <a routerLink=\"inboxlist/{{fold.id}}\"> {{fold.name}} </a> </li> </ul> <div class=\"p-v\">Labels</div> <ul class=\"nav nav-pills nav-stacked nav-sm\"> <li *ngFor=\"let label of labels\" routerLinkActive=\"active\" [ngClass]=\"labelClass(label.name.toLowerCase())\"> <a> <i class=\"fa fa-fw fa-circle text-muted\"></i> {{label.name}} </a> </li> </ul> </div> </div>--> <!--<div class=\"col-md-12\">--> <router-outlet></router-outlet> <!--</div>--> </div> "
                },] },
    ];
    /** @nocollapse */
    Inbox.ctorParameters = function () { return []; };
    return Inbox;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var InboxList = /** @class */ (function () {
    function InboxList(messageService, navigation, router$$1
        //, private shared: CoreShareService
        , store$$1) {
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
        this.messageService = messageService;
        this.navigation = navigation;
        this.router = router$$1;
        this.store = store$$1;
        this.inboxes = null;
        this.splitdirection = 'horizontal';
        this.showlist = true;
        this.tasks = [];
        this.views = [];
        this.labelClass = function (label) {
            return {
                'b-l-info': label === 'New Order',
                'b-l-primary': label === 'Cancel Order',
                'b-l-warning': label === 'Approve',
                'b-l-danger': label === 'Check'
            };
        };
    }
    /**
     * @return {?}
     */
    InboxList.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.inboxes = this.store.pipe(store.select(getInboxItems));
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    InboxList.prototype.SetInboxData = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        obj.State = 1;
        this.store.dispatch(new SetCurrentInboxItem(obj));
    };
    /**
     * @return {?}
     */
    InboxList.prototype.DemoData = /**
     * @return {?}
     */
    function () {
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
        ];
    };
    /**
     * @param {?} change
     * @return {?}
     */
    InboxList.prototype.ngOnChanges = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
    };
    /**
     * @return {?}
     */
    InboxList.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    InboxList.prototype.Save = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    InboxList.prototype.CheckIfDirty = /**
     * @return {?}
     */
    function () {
        return false;
    };
    InboxList.decorators = [
        { type: core.Component, args: [{
                    selector: 'inbox_list',
                    template: "<split [direction]=\"splitdirection\"> <split-area size=\"30\" [order]=\"0\" *ngIf=\"showlist\"> <div> <!-- header --> <div class=\"m-b\" *ngIf=\"(inboxes | async)?.length > 0\"> <div class=\"btn-group pull-right\"> <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-chevron-left\"></i></button> <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-chevron-right\"></i></button> </div> <div class=\"btn-toolbar\"> <div class=\"btn-group dropdown\"> <button class=\"btn btn-default btn-sm btn-bg dropdown-toggle\" data-toggle=\"dropdown\"> <span class=\"dropdown-label\">Filter</span> <span class=\"caret\"></span> </button> <ul class=\"dropdown-menu text-left text-sm\"> <li><a ui-sref=\"app.inbox.list({fold:'unread'})\">Unread</a></li> <li><a ui-sref=\"app.inbox.list({fold:'starred'})\">Starred</a></li> </ul> </div> <div class=\"btn-group\"> <button class=\"btn btn-sm btn-bg btn-default\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-title=\"Refresh\" data-original-title=\"\" title=\"\"><i class=\"fa fa-refresh\"></i></button> </div> </div> </div> <!--<div class=\"panel-card bg-white p clearfix m-b-sm b-l b-l-2x r\"> <mat-form-field> <mat-select placeholder=\"New\"> <mat-option *ngFor=\"let task of tasks\" [value]=\"task.value\"> {{ task.viewValue }} </mat-option> </mat-select> </mat-form-field> <mat-form-field> <mat-select placeholder=\"Overviews\"> <mat-option *ngFor=\"let view of views\" [value]=\"view.value\"> {{ view.viewValue }} </mat-option> </mat-select> </mat-form-field> </div>--> <!-- / header --> <!-- list --> <div class=\"m-b-lg\"> <!--| filter:fold--> <div *ngFor=\"let inbox of inboxes|async\" [ngClass]=\"labelClass(inbox.Label)\" class=\"panel-card bg-white p clearfix m-b-sm b-l b-l-2x r\"> <a class=\"pull-left m-r\"> <img [src]=\"inbox.Avatar\" class=\"w-40 rounded\"> </a> <div class=\"pull-right text-sm text-muted\"> <span class=\"hidden-xs\">{{ inbox.Date }}</span> <i class=\"fa fa-paperclip ng-hide m-l-sm\" *ngIf=\"inbox.Attach\"></i> </div> <div class=\"clear\"> <div> <a routerLink=\"{{inbox.Target}}\" [queryParams]=\"{location: 'inbox'+ inbox.MessageId}\" (click)=\"SetInboxData(inbox)\" class=\"text-md\"><b *ngIf=\"inbox.State == 0\">{{inbox.Subject}}</b><span *ngIf=\"inbox.State == 1\">{{inbox.Subject}}</span></a> <span class=\"label bg-light m-l-sm\">{{inbox.Label}}</span> </div> <div class=\"text-ellipsis m-t-xs text-muted-dk text-sm\" matTooltip=\"{{inbox.Content}}\" matTooltipClass=\"tooltip-x\">{{inbox.Content}}</div> </div> <!--{{inbox | json}}--> </div> </div> <!-- / list --> </div> </split-area> <split-area size=\"70\" [order]=\"1\"> <router-outlet></router-outlet> </split-area> </split> "
                },] },
    ];
    /** @nocollapse */
    InboxList.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['ITCMWebSocketService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['INavigationService',] },] },
        { type: router.Router, },
        { type: store.Store, },
    ]; };
    return InboxList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CoreEffects = /** @class */ (function () {
    function CoreEffects(actions$) {
        this.actions$ = actions$;
    }
    CoreEffects.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    CoreEffects.ctorParameters = function () { return [
        { type: effects.Actions, },
    ]; };
    return CoreEffects;
}());

var __assign$1 = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var initialState = {
    error: '',
    TCMMessages: [],
    CurrentInboxItem: null,
    DashboardMessages: []
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function CoreReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CoreActionTypes.DashboardMessageReceived:
            var /** @type {?} */ newArray = state.DashboardMessages.slice(0);
            var /** @type {?} */ index = newArray.findIndex(function (item) { return item.QueryId == action.payload.QueryId; });
            if (index == -1) {
                newArray.push(action.payload);
            }
            else {
                newArray[index] = action.payload;
            }
            return __assign$1({}, state, { DashboardMessages: newArray });
        case CoreActionTypes.TCMMessageReceived:
            return __assign$1({}, state, { TCMMessages: state.TCMMessages.concat([action.payload]) });
        case CoreActionTypes.SetCurrentInboxItem:
            return __assign$1({}, state, { CurrentInboxItem: action.payload });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var FocusDirective = /** @class */ (function () {
    function FocusDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    FocusDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.element.nativeElement, 'focus', []);
    };
    /**
     * @return {?}
     */
    FocusDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.element.nativeElement.focus();
    };
    FocusDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[focus]'
                },] },
    ];
    /** @nocollapse */
    FocusDirective.ctorParameters = function () { return [
        { type: core.ElementRef, decorators: [{ type: core.Inject, args: [core.ElementRef,] },] },
        { type: core.Renderer, },
    ]; };
    FocusDirective.propDecorators = {
        "focus": [{ type: core.Input },],
    };
    return FocusDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
var CORE_ROUTES = [
    { path: 'pagenotfound', component: PagenotFoundComponent, display: false, id: 'pagenotfound', title: '', icon: '', class: 'dropdown', ordinal: 1 },
    { path: 'pagenotautheticated', component: PagenotAutheticatedComponent, display: false, id: 'pagenotautheticated', title: '', icon: '', class: 'dropdown', ordinal: 2 },
    { path: 'signinpage', component: SignInComponent, display: false, id: 'signinpage', title: '', icon: '', class: 'dropdown', ordinal: 3 },
    { path: 'signuppage', component: SignUpComponent, display: false, id: 'signuppage', title: '', icon: '', class: 'dropdown', ordinal: 3 },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2018-01-25    Created
*/
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router$$1) {
        this.authService = authService;
        this.router = router$$1;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    AuthGuard.prototype.canActivate = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        console.log('AuthGuard#canActivate called');
        if (this.authService.IsAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(["signinpage"], { queryParams: { 'redirectURL': state.url } });
        }
    };
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    AuthGuard.prototype.canActivateChild = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        console.log('AuthGuard#canActivateChild called');
        return this.canActivate(next, state);
    };
    AuthGuard.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['IAuthService',] },] },
        { type: router.Router, },
    ]; };
    return AuthGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2019-03-01    Created
*/
var AppBootstrapCore = /** @class */ (function () {
    function AppBootstrapCore(auth, staticData, themeService, dashboardService, configService, userSettings, _locale, tcmMessageService, translate
        //, private router: Router
    ) {
        var _this = this;
        this.auth = auth;
        this.staticData = staticData;
        this.themeService = themeService;
        this.dashboardService = dashboardService;
        this.configService = configService;
        this.userSettings = userSettings;
        this._locale = _locale;
        this.tcmMessageService = tcmMessageService;
        this.translate = translate;
        this.ApplicationId = '';
        this.Bootstrap = function (applicationId) {
            //return null;
            return new Promise(function (resolve, reject) {
                _this.ApplicationId = applicationId;
                console.log('Application Initialization started');
                console.log('Calling config service ------>');
                _this.configService.Init().subscribe(function (config) {
                    console.log('Configurations read --->');
                    console.log(config);
                    console.log('setting language translation culture to --->' + _this._locale);
                    _this.translate.setDefaultLang(_this._locale);
                    if (config.staticData) {
                        console.log('Static Data read --->');
                        _this.staticData.LoadStaticData().subscribe();
                    }
                    _this.themeService.init();
                    if (config.Authetication && config.Authetication != 'windows') {
                        return resolve(true);
                    }
                    else {
                        _this.auth.Autheticate().subscribe(function (result) {
                            return resolve(true);
                        });
                    }
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            });
        };
        this.auth.userAutheticated.subscribe(function (result) {
            if (result) {
                _this.AfterAuthetication();
            }
        });
    }
    /**
     * @return {?}
     */
    AppBootstrapCore.prototype.AfterAuthetication = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ config = this.configService.Config;
        var /** @type {?} */ context = this.auth.GetUserContext();
        if (config.dashBoard) {
            console.log('Dashboard read --->');
            this.dashboardService.Init('dashboard', context, null);
        }
        if (config.tcmMessages) {
            console.log('TCMMessage read --->');
            this.tcmMessageService.Init('TCMMessageHub', context, null);
        }
        if (config.userPersistence) {
            console.log('User persistence read --->');
            var /** @type {?} */ token = this.auth.DecodeUserToken();
            var /** @type {?} */ searchCriteria = { Value: null, Bucket: this.ApplicationId, Key: token.unique_name };
            this.userSettings.FetchUserSettings(searchCriteria).subscribe();
        }
    };
    AppBootstrapCore.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    AppBootstrapCore.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['IAuthService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IStaticDataService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IThemeService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IWebSocketService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IConfigService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IUserSettingsService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['ITCMWebSocketService',] },] },
        { type: ng2Translate.TranslateService, },
    ]; };
    return AppBootstrapCore;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2019-03-10    Created
*/
var AuthServiceCore = /** @class */ (function () {
    function AuthServiceCore(window, dataService) {
        var _this = this;
        this.window = window;
        this.dataService = dataService;
        this.decodedToken = null;
        this.userAutheticated = new core.EventEmitter();
        this.IsAuthenticated = function () {
            var /** @type {?} */ context = JSON.parse(sessionStorage.getItem('UserContext'));
            return context ? context.IsAutheticated : false;
        };
        this.GetUserContext = function () {
            var /** @type {?} */ context = JSON.parse(sessionStorage.getItem('UserContext'));
            return context ? context.Context : null;
        };
        this.GetExpiryDate = function () {
            if (_this.decodedToken) {
                var /** @type {?} */ d = new Date(_this.decodedToken.exp * 1000);
                d.setHours(0, 0, 0, 0);
                return d;
            }
            var /** @type {?} */ today = new Date();
            today.setHours(0, 0, 0, 0);
            return today;
        };
        this.PreAutheticate = function () {
            //let request = new ClientRequestDTO();
            //request.MetaData.Action = "Autheticate";
            //return this.dataService.Post("Auth/Pre", request, null).map((response: ClientResponseDTO) => {
            //  let strToken = response.Data;
            //  //sessionStorage.setItem("UserToken", strToken);
            //  return strToken;
            //});
            return null;
        };
        this.AutheticateInternal = function (path) {
            var /** @type {?} */ d = new Date();
            d.setHours(0, 0, 0, 0);
            if (_this.GetExpiryDate() > d) {
                var /** @type {?} */ context = JSON.parse(sessionStorage.getItem('UserContext'));
                _this.userAutheticated.next(true);
                return Rx.Observable.of(context);
            }
            var /** @type {?} */ request = new ClientRequestDTO();
            request.MetaData.Action = "Autheticate";
            return _this.dataService.PostAnonymous(path, request, null).map(function (response) {
                var /** @type {?} */ UserContext = response.Data;
                var /** @type {?} */ strContext = JSON.stringify(UserContext);
                sessionStorage.setItem("UserContext", strContext);
                _this.DecodeUserTokenInterval();
                if (_this.IsAuthenticated()) {
                    _this.userAutheticated.next(true);
                }
                return UserContext;
            });
        };
        this.Autheticate = function () {
            return _this.AutheticateInternal("Auth/Win");
        };
        this.AutheticateExternal = function (credentials) {
            return _this.AutheticateInternal("Auth/External");
        };
        this.IsInRole = function (role) {
            if (_this.decodedToken && _this.decodedToken.role) {
                var /** @type {?} */ inrole = _this.decodedToken.role.filter(function (x) { return x === role; }).length > 0;
                return inrole;
            }
            return false;
            //return this.UserContext.Roles.filter(x => x === role).length > 0
        };
        this.IsAuthorisedForUpdate = function (roles) {
            return true;
            //var found = roles.some(r => this.UserContext.Roles.includes(r))
            //return found;
        };
        this.IsAuthorisedForCreate = function (roles) {
            return true;
            //var found = roles.some(r => this.UserContext.Roles.includes(r))
            //return found;
        };
        this.DecodeUserToken = function () {
            return _this.decodedToken;
        };
        this.DecodeUserTokenInterval = function () {
            var /** @type {?} */ context = JSON.parse(sessionStorage.getItem('UserContext'));
            if (context && context.Token) {
                var /** @type {?} */ base64Url = context.Token.split('.')[1];
                var /** @type {?} */ base64 = base64Url.replace('-', '+').replace('_', '/');
                _this.decodedToken = JSON.parse(_this.window.nativeWindow.atob(base64));
            }
        };
        this.DecodeUserTokenInterval();
    }
    AuthServiceCore.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    AuthServiceCore.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['IWindowRef',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IDataService',] },] },
    ]; };
    return AuthServiceCore;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2019-03-22    Created
*/
/**
 *
 */
var DataServiceCore = /** @class */ (function () {
    function DataServiceCore(http$$1, loaderService, coreConfig, logger, _cache) {
        var _this = this;
        this.http = http$$1;
        this.loaderService = loaderService;
        this.coreConfig = coreConfig;
        this.logger = logger;
        this._cache = _cache;
        this.AddContextToRequest = function (request) {
            request.Context = JSON.parse(sessionStorage.getItem('UserContext')).Context;
            return request;
        };
        this.PrepareRequestOptions = function () {
            var /** @type {?} */ options = {};
            var /** @type {?} */ context = JSON.parse(sessionStorage.getItem('UserContext'));
            var /** @type {?} */ token = context.Token;
            token = token ? "Bearer " + token : '';
            options.headers = new http$1.HttpHeaders({
                'Authorization': token,
                'Content-Type': 'application/json'
            });
            options.observe = 'response';
            options.withCredentials = true;
            return options;
        };
        this.handleAPIError = function (error) {
            _this.loaderService.display(false);
            _this.logger.error(error.error.message);
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error("Backend returned code " + error.status + ", " +
                    ("body was: " + error.error));
            }
            return Rx.Observable.of(error.error);
        };
        this.handleError = function (error) {
            _this.loaderService.display(false);
            _this.logger.error(error.error.message);
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error("Backend returned code " + error.status + ", " +
                    ("body was: " + error.error));
            }
            var /** @type {?} */ errorResponse = {
                Data: null,
                ErrorList: [{
                        ErrorMessage: error.error,
                        ErrorCode: "0000",
                        ExtErrorPosReference: null,
                        SystemErrorMessage: error.error
                    }],
                Success: false
            };
            return Rx.Observable.of(errorResponse);
        };
        this.HandleResponse = function (response, cache) {
            _this.loaderService.display(false);
            _this.AddToCache(response, cache);
            return response;
        };
        /**
         * Get by simple parameters
         * @param domain
         * @param cache
         */
        this.Get = function (domain, params_in, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            var /** @type {?} */ c = _this.GetFromCache(cache);
            if (c)
                return Rx.Observable.of(c);
            //this.ValidateInput("Get", domain, params_in);
            //this.ValidateInput("Get", domain, params_in);
            _this.loaderService.display(showLoadIndicator);
            _this.logger.log("Get - " + url);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            var /** @type {?} */ options = _this.PrepareRequestOptions();
            if (params_in) {
                var /** @type {?} */ params = new http$1.HttpParams();
                for (var /** @type {?} */ key in params_in) {
                    if (params_in.hasOwnProperty(key)) {
                        var /** @type {?} */ val = params_in[key];
                        params.set(key, val);
                    }
                }
                options.search = params;
            }
            return _this.http.get(url, options)
                .map(function (response) {
                return _this.HandleResponse(response, cache);
            }).pipe(operators.retry(3), operators.catchError(_this.handleError));
        };
        /**
         *
         * @param domain
         * @param Data
         */
        this.ExportToExcel = function (domain, request, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            _this.ValidateInput("Get", domain, request);
            _this.loaderService.display(showLoadIndicator);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            request = _this.AddContextToRequest(request);
            _this.logger.logObject("ExportToExcel - " + url, request);
            var /** @type {?} */ options = _this.PrepareRequestOptions();
            options.headers.set('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            //options.responseType = ResponseContentType.ArrayBuffer;
            options.responseType = 'arraybuffer';
            _this.http.post(url, request, options)
                .subscribe(function (result) {
                _this.loaderService.display(false);
                var /** @type {?} */ file = new Blob([result.body], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                var /** @type {?} */ dateSuffix = new Date(Date.now()).toLocaleDateString();
                FileSaver.saveAs(file, request.Data.ExportName + "-" + dateSuffix + '.xlsx');
            }, function (error) {
                console.log(error);
                //return this.HandleExceptions(error, url);
            });
        };
        this.Invoke = function (methodName, domain, Data, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            var /** @type {?} */ c = _this.GetFromCache(cache);
            if (c)
                return Rx.Observable.of(c);
            _this.ValidateInput("Get", domain, Data);
            _this.loaderService.display(showLoadIndicator);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            _this.logger.logObject(methodName + url, Data);
            Data = _this.AddContextToRequest(Data);
            var /** @type {?} */ options = _this.PrepareRequestOptions();
            return _this.http[methodName](url, Data, options)
                .map(function (response) {
                return _this.HandleResponse(response.body, cache);
            }).pipe(operators.retry(3), operators.catchError(_this.handleAPIError));
        };
        this.InvokeInternal = function (methodName, domain, Data, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            return _this.Invoke(methodName, domain, Data, cache, showLoadIndicator);
        };
        /**
         * Use to Get Resouce with complex parameters
         * @param domain
         * @param Data
         * @param cache
         */
        this.Post = function (domain, Data, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            return _this.InvokeInternal('post', domain, Data, cache, showLoadIndicator);
        };
        this.PostAnonymous = function (domain, Data, cache, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            var /** @type {?} */ c = _this.GetFromCache(cache);
            if (c)
                return Rx.Observable.of(c);
            _this.ValidateInput("Get", domain, Data);
            _this.loaderService.display(showLoadIndicator);
            var /** @type {?} */ url = _this.coreConfig.Config.WebApiUrl + domain;
            _this.logger.logObject("Post - " + url, Data);
            var /** @type {?} */ headers = new http$1.HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
            return _this.http.post(url, Data, { headers: headers, withCredentials: true })
                .map(function (response) {
                return _this.HandleResponse(response, cache);
            }).pipe(operators.retry(3), operators.catchError(_this.handleError));
        };
        /**
         *
         * @param domain - Name of the Domain
         * @param id - Unique Id for search
         * @param field - Search Field
         * @param cache -
         */
        this.GetById = function (domain, id, field, cache) {
            var /** @type {?} */ clientRequest = new ClientRequestDTO();
            clientRequest.MetaData.Action = "FindAsync";
            var /** @type {?} */ search_criteria = {
                CriteriaType: 'BySearch',
                Options: { BrowseFrom: 1, BrowseTo: 10, CaseSensitive: false, ShowActive: true, ShowInactive: true, SortField: field, SortOrder: 'A' },
                SearchCriteria: []
            };
            var /** @type {?} */ general_criteria = { SearchConcatenatorId: 'AND', SearchFieldId: field, SearchOperatorId: '=', SearchValue: id.toString() };
            search_criteria.SearchCriteria.push(general_criteria);
            clientRequest.Data = search_criteria;
            return _this.Post(domain, clientRequest, cache);
        };
        /**
         * Create
         * @param domain
         * @param Data
         * @param cache
         */
        this.Put = function (domain, Data, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            return _this.InvokeInternal('put', domain, Data, null, showLoadIndicator);
        };
        /**
         * Modify / Update
         * @param domain
         * @param Data
         * @param cache
         */
        this.Patch = function (domain, Data, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            return _this.InvokeInternal('patch', domain, Data, null, showLoadIndicator);
        };
        /**
         *
         * @param domain
         * @param Data
         * @param cache
         */
        this.Delete = function (domain, Data, showLoadIndicator) {
            if (showLoadIndicator === void 0) { showLoadIndicator = true; }
            return _this.InvokeInternal('delete', domain, Data, null, showLoadIndicator);
        };
    }
    /**
     * @param {?} options
     * @return {?}
     */
    DataServiceCore.prototype.GetFromCache = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (options && options.Cache) {
            return this._cache.Get(options.Key);
        }
        return null;
    };
    /**
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    DataServiceCore.prototype.AddToCache = /**
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (data, options) {
        if (options && options.Cache) {
            return this._cache.Set(options.Key, data, options.Options);
        }
    };
    /**
     * @param {?} func
     * @param {?} domain
     * @param {?} Data
     * @return {?}
     */
    DataServiceCore.prototype.ValidateInput = /**
     * @param {?} func
     * @param {?} domain
     * @param {?} Data
     * @return {?}
     */
    function (func, domain, Data) {
        if (!domain) {
            throw 'Validation failed for ' + func + 'domain name missing';
        }
        
        if (Data == null) {
            throw 'Validation failed for ' + func + 'input data missing';
        }
        
    };
    DataServiceCore.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    DataServiceCore.ctorParameters = function () { return [
        { type: http$1.HttpClient, },
        { type: LoaderService, },
        { type: undefined, decorators: [{ type: core.Inject, args: ['IConfigService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['ILogService',] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['ICacheService',] },] },
    ]; };
    return DataServiceCore;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
/**
 * @return {?}
 */
function createConfig() {
    var /** @type {?} */ c = new ngxSignalr.SignalRConfiguration();
    c.logging = true;
    return c;
}
var TCMCoreModule = /** @class */ (function () {
    function TCMCoreModule() {
    }
    /**
     * @return {?}
     */
    TCMCoreModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TCMCoreModule
        };
    };
    TCMCoreModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        router.RouterModule.forChild(CORE_ROUTES),
                        ngxSignalr.SignalRModule.forRoot(createConfig),
                        http.HttpModule,
                        http$1.HttpClientModule,
                        ng2Translate.TranslateModule,
                        ng2Charts.ChartsModule,
                        router.RouterModule,
                        common.CommonModule,
                        forms.ReactiveFormsModule,
                        forms.FormsModule,
                        TCMMaterialModule,
                        ngxToastr.ToastrModule.forRoot({ positionClass: 'toast-top-right', closeButton: true }),
                        ngxToastr.ToastContainerModule,
                        angularSplit.AngularSplitModule,
                        store.StoreModule.forFeature('core', CoreReducer),
                        effects.EffectsModule.forFeature([CoreEffects])
                    ],
                    entryComponents: [
                        SettingsComponent,
                        VoiceSearch,
                        ConfirmComponent,
                        ErrorPopupComponent
                    ],
                    declarations: [
                        FooterComponent,
                        ContainerComponent,
                        NavbarComponent,
                        VerticleNavbarComponent,
                        SettingsComponent,
                        VoiceSearch,
                        ConfirmComponent,
                        AppContextComponent,
                        Errorpage,
                        PagenotFoundComponent,
                        PagenotAutheticatedComponent,
                        SignInComponent,
                        SignUpComponent,
                        TCMErrorStateMatcher,
                        AutoHeightDirective,
                        ErrorDivComponent,
                        ErrorPopupComponent,
                        Inbox,
                        InboxList,
                        AutoCompleteComponent,
                        SimpleAutoCompleteComponent,
                        InputComponent,
                        NumberComponent
                        //, NumberComponent2
                        ,
                        tcmnumber,
                        SelectComponent,
                        CheckboxComponent,
                        DateComponent,
                        PanelContainerComponent,
                        CardContainerComponent,
                        ResponsiveDivComponent,
                        FocusDirective,
                        ScrollSpyDirective,
                        TimePickerComponent
                    ],
                    providers: [
                        { provide: 'ILogService', useClass: LogService },
                        { provide: 'IConfigService', useClass: ConfigService },
                        { provide: 'INavigationService', useClass: NavigationService },
                        ng2CacheService.CacheService,
                        { provide: 'ICacheService', useClass: TCMCacheService },
                        LoaderService,
                        { provide: 'IThemeService', useClass: ThemeService },
                        { provide: 'IWebSocketService', useClass: DashboardService },
                        { provide: 'ITCMWebSocketService', useClass: MessageService },
                        { provide: 'IWindowRef', useClass: WindowRef },
                        { provide: 'IStaticDataService', useClass: StaticDataService },
                        { provide: 'IUserSettingsService', useClass: UserSettingsService },
                        { provide: 'IAuthService', useClass: AuthService },
                        { provide: 'IDataService', useClass: DataService },
                        { provide: 'IAppBootstrap', useClass: AppBootstrap },
                        Utilities,
                        tcmnumber,
                        {
                            provide: core.ErrorHandler, useClass: GlobalErrorHandler
                        },
                        AuthGuard
                    ],
                    exports: [
                        common.CommonModule,
                        ng2Charts.ChartsModule,
                        http.HttpModule,
                        http$1.HttpClientModule,
                        forms.ReactiveFormsModule,
                        forms.FormsModule,
                        FooterComponent,
                        NavbarComponent,
                        VerticleNavbarComponent,
                        ContainerComponent,
                        AppContextComponent,
                        ngxToastr.ToastrModule,
                        ngxToastr.ToastContainerModule,
                        TCMErrorStateMatcher,
                        angularSplit.AngularSplitModule,
                        ConfirmComponent,
                        AutoHeightDirective,
                        ErrorDivComponent,
                        ErrorPopupComponent,
                        Inbox,
                        InboxList,
                        AutoCompleteComponent,
                        SimpleAutoCompleteComponent,
                        InputComponent,
                        NumberComponent
                        //, NumberComponent2
                        ,
                        tcmnumber,
                        SelectComponent,
                        CheckboxComponent,
                        DateComponent,
                        PanelContainerComponent,
                        CardContainerComponent,
                        ResponsiveDivComponent,
                        FocusDirective,
                        ScrollSpyDirective,
                        TimePickerComponent
                    ]
                },] },
    ];
    return TCMCoreModule;
}());

exports.createConfig = createConfig;
exports.TCMCoreModule = TCMCoreModule;
exports.FooterComponent = FooterComponent;
exports.NavbarComponent = NavbarComponent;
exports.SettingsComponent = SettingsComponent;
exports.VerticleNavbarComponent = VerticleNavbarComponent;
exports.Errorpage = Errorpage;
exports.PagenotFoundComponent = PagenotFoundComponent;
exports.SignInComponent = SignInComponent;
exports.SignUpComponent = SignUpComponent;
exports.AutoHeightDirective = AutoHeightDirective;
exports.ErrorDivComponent = ErrorDivComponent;
exports.myCustomTooltipDefaults = myCustomTooltipDefaults;
exports.TCMMaterialModule = TCMMaterialModule;
exports.DataService = DataService;
exports.AuthService = AuthService;
exports.DashboardService = DashboardService;
exports.MessageService = MessageService;
exports.ClientContext = ClientContext;
exports.UserCredentials = UserCredentials;
exports.CacheData = CacheData;
exports.MasterData = MasterData;
exports.CacheObject = CacheObject;
exports.UserSettings = UserSettings;
exports.DashboardViewType = DashboardViewType;
exports.DashboardData = DashboardData;
exports.PageSettings = PageSettings;
exports.ControlSettings = ControlSettings;
exports.ContactDetails = ContactDetails;
exports.MessageState = MessageState;
exports.MessageAttachment = MessageAttachment;
exports.MessageWrapper = MessageWrapper;
exports.ExportInput = ExportInput;
exports.ExportColumn = ExportColumn;
exports.KeyRequest = KeyRequest;
exports.CacheOption = CacheOption;
exports.ClientRequestDTO = ClientRequestDTO;
exports.ErrorDTO = ErrorDTO;
exports.ClientResponseDTO = ClientResponseDTO;
exports.ThemeColors = ThemeColors;
exports.CardContainer = CardContainer;
exports.PanelContainer = PanelContainer;
exports.AutoCompleteOptions = AutoCompleteOptions;
exports.InputControlOptions = InputControlOptions;
exports.SelectControlOptions = SelectControlOptions;
exports.SearchRepository = SearchRepository;
exports.WindowRef = WindowRef;
exports.UserSettingsService = UserSettingsService;
exports.StaticDataService = StaticDataService;
exports.AppBootstrap = AppBootstrap;
exports.ModuleBaseComponent = ModuleBaseComponent;
exports.TCMCacheService = TCMCacheService;
exports.AppContextComponent = AppContextComponent;
exports.ContainerComponent = ContainerComponent;
exports.DashboardServiceCore = DashboardServiceCore;
exports.AutoCompleteComponent = AutoCompleteComponent;
exports.InputComponent = InputComponent;
exports.NumberComponent = NumberComponent;
exports.tcmnumber = tcmnumber;
exports.ScrollSpyDirective = ScrollSpyDirective;
exports.SelectComponent = SelectComponent;
exports.CheckboxComponent = CheckboxComponent;
exports.DateComponent = DateComponent;
exports.PanelContainerComponent = PanelContainerComponent;
exports.CardContainerComponent = CardContainerComponent;
exports.ResponsiveDivComponent = ResponsiveDivComponent;
exports.TimePickerComponent = TimePickerComponent;
exports.PagenotAutheticatedComponent = PagenotAutheticatedComponent;
exports.SimpleAutoCompleteComponent = SimpleAutoCompleteComponent;
exports.ConfigService = ConfigService;
exports.NavigationService = NavigationService;
exports.LoaderService = LoaderService;
exports.ThemeService = ThemeService;
exports.LogService = LogService;
exports.TCMErrorStateMatcher = TCMErrorStateMatcher;
exports.ConfirmComponent = ConfirmComponent;
exports.ErrorPopupComponent = ErrorPopupComponent;
exports.Inbox = Inbox;
exports.InboxList = InboxList;
exports.BaseChartDirective = ng2Charts.BaseChartDirective;
exports.ChartsModule = ng2Charts.ChartsModule;
exports.ɵa = angularSplit.ɵa;
exports.AngularSplitModule = angularSplit.AngularSplitModule;
exports.SplitComponent = angularSplit.SplitComponent;
exports.SplitAreaDirective = angularSplit.SplitAreaDirective;
exports.CoreActionTypes = CoreActionTypes;
exports.TCMMessageReceived = TCMMessageReceived;
exports.DashboardMessageReceived = DashboardMessageReceived;
exports.SetCurrentInboxItem = SetCurrentInboxItem;
exports.CoreEffects = CoreEffects;
exports.CoreReducer = CoreReducer;
exports.getInboxItems = getInboxItems;
exports.getSelectedInboxItem = getSelectedInboxItem;
exports.getDashboardItems = getDashboardItems;
exports.AppBootstrapCore = AppBootstrapCore;
exports.AuthServiceCore = AuthServiceCore;
exports.DataServiceCore = DataServiceCore;
exports.FocusDirective = FocusDirective;
exports.Utilities = Utilities;
exports.StringConverter = StringConverter;
exports.BooleanConverter = BooleanConverter;
exports.NumberConverter = NumberConverter;
exports.InputConverter = InputConverter;
exports.AuthGuard = AuthGuard;
exports.VoiceSearch = VoiceSearch;

Object.defineProperty(exports, '__esModule', { value: true });

})));

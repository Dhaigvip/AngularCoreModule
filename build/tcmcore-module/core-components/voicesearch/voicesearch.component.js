/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created - Experimental
*/
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchRepository, ClientRequestDTO } from '../../tcmcore-objects/tcmcore.domain.objects';
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
            },
                this.recognition.onaudiostart = function () {
                    console.log('onaudiostart');
                    console.log(event);
                },
                this.recognition.onnomatch = function () {
                    console.log('onnomatch');
                    console.log(event);
                },
                this.recognition.onsounded = function () {
                    console.log('onsounded');
                    console.log(event);
                },
                this.recognition.onsoundstart = function () {
                    console.log('onsoundstart');
                    console.log(event);
                },
                this.recognition.onspeechend = function () {
                    console.log('onspeechend');
                    console.log(event);
                },
                this.recognition.onspeechstart = function () {
                    console.log('onspeechstart');
                    console.log(event);
                },
                this.recognition.onstart = function () {
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
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'voice-search',
                    template: "<mat-dialog-content> <div id=\"info\"> <p *ngIf=\"status == 1\" id=\"info_start\">Click on the microphone icon and begin speaking.</p> <p *ngIf=\"status == 2\" id=\"info_speak_now\">Speak now.</p> <p *ngIf=\"status == 3\" id=\"info_no_speech\"> No speech was detected. You may need to adjust your <a href=\"//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892\"> microphone settings </a>. </p> <p *ngIf=\"status == 4\" id=\"info_no_microphone\" style=\"display:none\"> No microphone was found. Ensure that a microphone is installed and that <a href=\"//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892\"> microphone settings </a> are configured correctly. </p> <p *ngIf=\"status == 5\" id=\"info_allow\">Click the \"Allow\" button above to enable your microphone.</p> <p *ngIf=\"status == 6\" id=\"info_denied\">Permission to use microphone was denied.</p> <p *ngIf=\"status == 7\" id=\"info_blocked\"> Permission to use microphone is blocked. To change, go to chrome://settings/contentExceptions#media-stream </p> <p *ngIf=\"status == 8\" id=\"info_upgrade\"> Web Speech API is not supported by this browser. Upgrade to <a href=\"//www.google.com/chrome\">Chrome</a> version 25 or later. </p> </div> <div class=\"right\"> <button id=\"start_button\" (click)=\"startRecording($event)\"> <img id=\"start_img\" [src]=\"imagePath\" alt=\"Start\"> </button> <button id=\"start_button\" (click)=\"cleanData($event)\"> X </button> </div> <div id=\"results\"> <div *ngFor=\"let item of searchObject; let i = index\"> <select [(ngModel)]=\"item.SearchFieldId\"> <option *ngFor=\"let c of options\" [ngValue]=\"c\">{{c}}</option> </select> <input type=\"text\" [(ngModel)]=\"item.SearchValue\" /> <br /> </div> </div> <div id=\"results\"> <textarea rows=\"10\" style=\"width: 100%; border: none;\" id=\"final_span\" [innerHtml]=\"final_transcript\"></textarea> <span id=\"interim_span\" [innerHtml]=\"interim_transcript\" class=\"interim\"></span> <p> </div> <div class=\"right\"> <button class=\"btn btn-addon\" (click)=\"updateSearch($event)\">Update</button> <button class=\"btn btn-accent\" (click)=\"triggerSearch($event)\">Search</button> </div> <div> </div> </mat-dialog-content> ",
                    styles: ["* { font-family: Verdana, Arial, sans-serif; } a:link { color: #000; text-decoration: none; } a:visited { color: #000; } a:hover { color: #33F; } .button { background: -webkit-linear-gradient(top,#008dfd 0,#0370ea 100%); border: 1px solid #076bd2; border-radius: 3px; color: #fff; display: none; font-size: 13px; font-weight: bold; line-height: 1.3; padding: 8px 25px; text-align: center; text-shadow: 1px 1px 1px #076bd2; letter-spacing: normal; } .center { padding: 10px; text-align: center; } .final { color: black; padding-right: 3px; } .interim { color: gray; } .info { font-size: 14px; text-align: center; color: #777; display: none; } .right { float: right; } .sidebyside { display: inline-block; width: 45%; min-height: 40px; text-align: left; vertical-align: top; } #headline { font-size: 40px; font-weight: 300; } #info { font-size: 20px; text-align: center; color: #777; /*visibility: hidden;*/ } #results { font-size: 14px; font-weight: bold; border: 1px solid #ddd; padding: 15px; text-align: left; min-height: 150px; } #start_button { border: 0; background-color: transparent; padding: 0; } "],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    VoiceSearch.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['IDataService',] },] },
        { type: MatDialogRef, },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] },] },
    ]; };
    return VoiceSearch;
}());
export { VoiceSearch };
function VoiceSearch_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    VoiceSearch.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    VoiceSearch.ctorParameters;
    /** @type {?} */
    VoiceSearch.prototype.recognizing;
    /** @type {?} */
    VoiceSearch.prototype.final_transcript;
    /** @type {?} */
    VoiceSearch.prototype.ignore_onend;
    /** @type {?} */
    VoiceSearch.prototype.start_timestamp;
    /** @type {?} */
    VoiceSearch.prototype.info;
    /** @type {?} */
    VoiceSearch.prototype.recognition;
    /** @type {?} */
    VoiceSearch.prototype.interim_transcript;
    /** @type {?} */
    VoiceSearch.prototype.status;
    /** @type {?} */
    VoiceSearch.prototype.imagePath;
    /** @type {?} */
    VoiceSearch.prototype.options;
    /** @type {?} */
    VoiceSearch.prototype.searchObject;
    /** @type {?} */
    VoiceSearch.prototype.ShowSearchResult;
    /** @type {?} */
    VoiceSearch.prototype.updateSearch;
    /** @type {?} */
    VoiceSearch.prototype.triggerSearch;
    /** @type {?} */
    VoiceSearch.prototype.cleanData;
    /** @type {?} */
    VoiceSearch.prototype.startRecording;
    /** @type {?} */
    VoiceSearch.prototype.dataService;
    /** @type {?} */
    VoiceSearch.prototype.dialogRef;
    /** @type {?} */
    VoiceSearch.prototype.data;
}

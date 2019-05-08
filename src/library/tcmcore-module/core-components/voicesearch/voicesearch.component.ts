/*
  Vipul Dhaigude        2017-01-01    Created - Experimental
*/


import { OnInit, Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IWindow, IDataService } from '../../tcmcore-objects/tcmcore.domain.interfaces';
import { SearchRepository, Options, ClientRequestDTO } from '../../tcmcore-objects/tcmcore.domain.objects';
import { Observable } from 'rxjs/Observable';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'voice-search',
  templateUrl: 'voicesearch.component.html',
  styleUrls: ['voicesearch.component.css'],
  encapsulation: ViewEncapsulation.None
})
// tslint:disable-next-line:component-class-suffix
export class VoiceSearch implements OnInit {
  private recognizing = false;
  private final_transcript = '';
  private ignore_onend;
  private start_timestamp;
  private info = '';

  //private grammar = '#JSGF V1.0; grammar fund; public <fund> = fund name | short name | isin ;'

  private recognition: any = null
  private interim_transcript = '';
  private status = 0;
  private imagePath = "assets/img/mic.gif";

  private options = [];
  private searchObject: any[] = [];



  ngOnInit(): void {
    this.options = ['FirstName', 'LastName', 'IdentificationId', 'NationalRegistrationId'];
    if (!('webkitSpeechRecognition' in window)) {
      //upgrade();
    } else {
      //start_button.style.display = 'inline-block';
      var self = this;

      //var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
      //var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
      //var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent


      const { webkitSpeechRecognition, webkitSpeechGrammarList }: IWindow = <IWindow>window;
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

      this.recognition.onerror = (event) => {
        console.log('onerror');
        console.log(event);
        if (event.error === 'no-speech') {
          this.imagePath = 'assets/img/mic.gif';
          //showInfo('info_no_speech');
          this.status = 2;
          this.ignore_onend = true;
        }
        if (event.error === 'audio-capture') {
          this.imagePath = 'assets/img/mic.gif';
          //showInfo('info_no_microphone');
          this.status = 3;
          this.ignore_onend = true;
        }
        if (event.error === 'not-allowed') {
          if (event.timeStamp - this.start_timestamp < 100) {
            //showInfo('info_blocked');
            this.status = 7;
          } else {
            //showInfo('info_denied');
            this.status = 6;
          }
          this.ignore_onend = true;
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
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            if (event.results[i][0].transcript.trim().toLowerCase() === 'done' && event.results[i][0].confidence > 0.8) {
              self.ShowSearchResult();
              return;
            }
            self.final_transcript += event.results[i][0].transcript + '|';
          } else {
            self.interim_transcript += event.results[i][0].transcript;
          }
        }
      };
    }
  }

  ShowSearchResult = () => {

    var result = this.final_transcript.slice(0, -1);
    this.searchObject = [];
    const split_Result = result.trim().toLowerCase().split('and');

    for (let i = 0; i < split_Result.length; i++) {

      var t = (split_Result[i].trim()[0] == '|') ? split_Result[i].trim().slice(1) : split_Result[i].trim();

      const searchString = t.split('|');
      const temp = searchString[0];
      var ss1 = [];
      for (let j = 0; j < this.options.length; j++) {
        if (!temp.startsWith(this.options[j].substring(0, 3).trim().toLowerCase())) continue;
        console.log(temp);
        console.log(this.options[j]);
        ss1.push(this.VipulCompare(temp, this.options[j]))
      }
      if (ss1.length > 0) {
        ss1.sort((a, b) => (a.counter > b.counter) ? 1 : ((b.counter > a.counter) ? -1 : 0));
        this.searchObject.push({ 'SearchFieldId': ss1[ss1.length - 1].option, 'SearchValue': searchString[1] });
      }
    }

  }
  updateSearch = () => {
    this.ShowSearchResult();
  }
  triggerSearch = () => {
    //this.ShowSearchResult();
    var repo = this.SearchHolderByNameRepo(this.searchObject);
    this.Find(repo).subscribe(result => {
    })
  }
  public Find(searchRepository: SearchRepository): Observable<any> {
    var request = new ClientRequestDTO();
    request.MetaData.Action = "FindAsync";
    request.Data = searchRepository;
    return this.dataService.Post("NLuxHolder", request, null);
  }

  public SearchHolderByNameRepo(searchObject) {
    const repository = new SearchRepository();
    repository.CriteriaType = 'BySearch';
    repository.Options = <Options>{};
    repository.Options.BrowseFrom = 1;
    repository.Options.BrowseTo = 100;
    repository.Options.CaseSensitive = false;
    repository.Options.ShowActive = true;
    repository.Options.ShowInactive = true;
    repository.Options.SortOrder = 'A';
    repository.Options.SortField = 'HolderId';
    repository.SearchCriteria = [];
    for (var i = 0; i < searchObject.length; i++) {
      repository.SearchCriteria.push({
        SearchConcatenatorId: 'OR',
        SearchFieldId: searchObject[i].SearchFieldId,
        SearchOperatorId: 'BEGINS',
        SearchValue: searchObject[i].SearchValue,
        ExtPosReference: null
      })
    }
    return repository;
  }

  VipulCompare(searchString: string, baseString: string) {
    var matchCounter = 0
    var temp;
    searchString = searchString.trim().toLowerCase().replace(/\s/g, '');
    temp = baseString.trim().toLowerCase().replace(/\s/g, '');

    for (var i = 0; i < baseString.length; i++) {
      if (searchString[i]) {
        if (searchString[i] === baseString[i])
          matchCounter++;
        else
          matchCounter--;
      }
    }
    return { counter: matchCounter, option: baseString }
  }


  cleanData = () => {
    this.interim_transcript = '';
    this.final_transcript = '';
  }
  startRecording = (event) => {
    if (this.recognizing) {
      this.recognition.stop();
      return;
    }
    this.final_transcript = '';
    this.recognition.lang = 'en-IN';
    this.recognition.start();
    this.ignore_onend = false;
    this.final_transcript = '';
    this.interim_transcript = '';
    this.imagePath = 'assets/img/mic-slash.gif';
    this.status = 5;
    //showButtons('none');
    this.start_timestamp = event.timeStamp;
  }

  constructor(
    @Inject('IDataService') private dataService: IDataService
    , public dialogRef: MatDialogRef<VoiceSearch>
    , @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  onClose(): void {
    this.dialogRef.close();
  }
}

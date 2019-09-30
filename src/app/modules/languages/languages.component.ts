import { Component, OnInit, OnChanges } from '@angular/core';
import { LanguageDbService } from '../../core/services/db/language.db.services';
import { PollingDbService } from '../../core/services/db/polling.db.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html'
})

export class LanguagesComponent implements OnInit, OnChanges {

  language;
  addNewLanguage: boolean;

  constructor( private languageDbService: LanguageDbService,
               public  pollingDbService: PollingDbService ) { }

  ngOnInit() {
    this.initialize();
  }

  ngOnChanges() {}

  initialize() {
    this.pollingDbService.initialize();
    this.addNewLanguage = false;
    this.language = [];
  }

  edit($language) {
    this.pollingDbService.stopPolling();
    this.addNewLanguage = false;
    this.language = $language;
  }

  cancel() {
    this.initialize();
  }

  addNew() {
    this.pollingDbService.stopPolling();
    this.language              = [];
    this.language.id           = 0;
    this.language.english_name = '';
    this.language.native_name  = '';
    this.language.iso_639_1    = '';
    this.language.iso_639_2    = '';
    this.language.iso_639_3    = '';
    this.addNewLanguage        = true;
  }

  delete($language) {
    this.pollingDbService.stopPolling();

    if ( $language.id !== '' && $language.id !== 0 ) {
      this.languageDbService.deleteLanguage($language);
      this.initialize();
    }
  }

  save($language) {
    if ( $language.id === 0 ) {
      this.languageDbService.saveLanguage($language);
    } else if ( this.language.id === $language.id  ) {
      this.languageDbService.updateLanguage($language);
    }
    this.initialize();
  }

  toUpper($val) {
    $val = $val.toUpperCase();
  }
}

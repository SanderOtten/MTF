import { Injectable, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

@Injectable()

export class CurrentLanguage implements OnInit{
  lang: string;

  constructor( public translate: TranslateService ) {
    if (!this.lang || this.lang === '') {
      this.lang = 'en';
    }
  }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    if (!this.lang || this.lang === '') {
      this.lang = 'en';
    }
    this.setLang();
  }

  setNewLang($lang) {
    if ($lang !== '') {
      this.lang = $lang;
      this.setLang();
    } else {
      this.initialize();
    }
  }

  setLang() {
    console.log(this.lang);
    this.translate.setDefaultLang(this.lang);
    moment.locale(this.lang);
  }
}

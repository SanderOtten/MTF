import { Component, Injectable, OnInit } from '@angular/core';
import { PollingDbService } from '../../../../core/services/db/polling.db.service';
import { CurrentLanguage } from '../../../../core/services/currentlanguage';
import * as moment from 'moment';

@Component({
  selector: 'app-changelanguage',
  templateUrl: './changelanguage.component.html'
})

@Injectable()
export class ChangeLanguageComponent implements OnInit {

  constructor( public pollingDbService: PollingDbService,
               public currentLanguage: CurrentLanguage ) {
  }

  ngOnInit() {
    this.pollingDbService.initialize();
  }

  switchLanguage($language) {
    this.currentLanguage.setNewLang($language);
  }

  getFlag($country) {
    if ($country === 'en') {
      return 'flag-icon flag-icon-gb';
    } else {
      return 'flag-icon flag-icon-'+$country;
    }
  }
}

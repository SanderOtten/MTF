import { Component, OnInit } from '@angular/core';
import { PollingDbService } from './core/services/db/polling.db.service';
import { CurrentLanguage } from './core/services/currentlanguage';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor( public currentLanguage: CurrentLanguage,
               public pollingDbService: PollingDbService ) {
    currentLanguage.setNewLang('');
  }

  ngOnInit(): void {
    this.currentLanguage.setNewLang('');
    this.pollingDbService.initialize();
  }
}

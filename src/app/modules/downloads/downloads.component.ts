import { Component, OnInit, OnChanges } from '@angular/core';
import { PollingDbService } from '../../core/services/db/polling.db.service';
import { DbService } from '../../core/services/db/db.service';
import * as flat from 'flat';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html'
})


export class DownloadsComponent implements OnInit, OnChanges {
  language = '0';
  application = '0';
  output = '';
  result;

  constructor( public pollingDbService: PollingDbService,
               public dbService: DbService
             ) { }

  ngOnInit() {
    this.pollingDbService.initialize();
  }

  ngOnChanges() {}

  getTranslations($language, $application) {
    if ( $language !== '0' && $application !== '0' ) {
      const translations = this.pollingDbService.translations;

      let content = ``;
      for ( const i in translations ) {
        if (i) {
          if (translations[i].iso_639_1 === $language && translations[i].translation !== '' && translations[i].app_id === $application ) {
            if (content === ``) {
              content += `{\n`;
            } else {
              content += `,\n`;
            }
            content += `  "${translations[i].label}": "${translations[i].text}"`;
          }
        }
      }
      content += `\n}\n\n`;
      this.output = JSON.stringify(flat.unflatten(JSON.parse(content)), null, 2);
    }
  }

  copyToClipboard() {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.output;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  download() {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.output));
    element.setAttribute('download', this.language.toLowerCase()+'.json');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}

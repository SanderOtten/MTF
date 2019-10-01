import { Component, OnInit } from '@angular/core';
import { LabelDbService } from '../../core/services/db/label.db.services';
import { PollingDbService } from '../../core/services/db/polling.db.service';
import { TranslationDbService } from '../../core/services/db/translation.db.services';
import * as flat from 'flat';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html'
})

export class UploadComponent implements OnInit {

  input = '';
  file;
  language = '';
  application = '';
  translations;
  translation;
  uploadButton = document.createElement('input');
  upload: boolean = false;
  saved: boolean = false;

  constructor( public  pollingDbService: PollingDbService,
               private labelDbService: LabelDbService,
               private translationDbService: TranslationDbService,
  ) { }

  ngOnInit() {
    this.pollingDbService.initialize();
  }

  getLabelId ( $label ) {
    const labels = this.pollingDbService.labels;

    for ( const i in labels ) {
      if ( labels[i].label === $label ) {
        return labels[i].id;
      }
    }
    return '0';
  }

  getTranslationId ( translation ) {
    const translations = this.pollingDbService.translations;

    for ( const i in translations ) {
      if ( translations[i].label_id === translation.label_id && translations[i].language_id === translation.language_id ) {
        return translations[i].id;
      }
    }
    return '0';
  }

  save() {
    let json = flat.flatten(JSON.parse(this.input));

    this.translations = [];

    // stop polling.
    this.pollingDbService.stopPolling();

    // loop through json string and create new labels.
    for (const key in json) {
      if ( key !== '' ) {
        if (json.hasOwnProperty(key)) {
          this.translation             = [];
          this.translation.language_id = this.language;
          this.translation.app_id      = this.application
          this.translation.label       = key;
          this.translation.label_id    = this.getLabelId(this.translation.label);

          if ( this.translation.label_id === '0' ) {
            this.labelDbService.saveLabel(this.translation);
          }

          this.translation.text        = json[key];
          this.translation.description = json[key];
          this.translations.push(this.translation);
        }
      }
    }

    // to 'load' new labels
    this.pollingDbService.initialize();
    this.pollingDbService.stopPolling();

    for ( const t in this.translations ) {
      if ( this.translations[t].label_id === '0' ) {
        this.translations[t].label_id = this.getLabelId(this.translations[t].label);
      }

      if ( this.translations[t].label_id === '0' ) {
        console.log ('something went wrong! label for ' + this.translations[t].label + ' not found.');
      } else {

        this.translations[t].id = this.getTranslationId(this.translations[t]);

        console.log ( this.translations[t].id );
        if ( this.translations[t].id === 0 || this.translations[t].id === '' || this.translations[t].id === null ) {
          this.translationDbService.saveTranslation(this.translations[t]);
        } else {
          this.translationDbService.updateTranslation(this.translations[t]);
        }
      }
    }
    this.pollingDbService.initialize();
    this.input = '';
    this.saved = true;

    if ( this.upload ) {
      document.body.removeChild(this.uploadButton);
      this.upload = false;
    }
  }

  processFile(event) {
    // console.log(event.target.files[0]);
    this.file = event.target.files[0];

    let fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      this.input = fileReader.result;
      this.save();
    }
    fileReader.readAsText(this.file);
  }

  uploadFile() {
    this.upload = true;
    this.uploadButton = document.createElement('input');
    this.uploadButton.type="file";
    this.uploadButton.style.position = 'fixed';
    this.uploadButton.style.left = '0';
    this.uploadButton.style.top = '0';
    this.uploadButton.style.opacity = '0';
    this.uploadButton.addEventListener('change', (event) => this.processFile(event));
    document.body.appendChild(this.uploadButton);
    this.uploadButton.click();
  }
}

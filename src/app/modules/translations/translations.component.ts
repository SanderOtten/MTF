import { Component, OnInit, OnChanges } from '@angular/core';
import { TranslationDbService } from '../../core/services/db/translation.db.services';
import { PollingDbService } from '../../core/services/db/polling.db.service';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html'
})

export class TranslationsComponent implements OnInit, OnChanges {

  translation;
  language;
  label;
  filterOn;
  filterValue;
  showFilter = false;
  firstInit = true;

  constructor( private translationDbService: TranslationDbService,
               public pollingDbService: PollingDbService
  ) {}

  ngOnInit() {
    this.initialize();
  }

  ngOnChanges() {
  }

  initialize() {
    // this.showFilter = false;
    this.pollingDbService.initialize();
    this.translation = [];

    if (this.firstInit) {
      this.filterOn = [];
      this.filterOn.app_code = [];
      this.filterOn.iso_639_1 = [];
      this.filterOn.label = '';
      this.filterOn.text = '';
      this.firstInit = false;
    }
  }

  stopPolling() {
    this.pollingDbService.stopPolling();
  }

  edit($translation) {
    this.pollingDbService.stopPolling();
    this.translation = $translation;
  }

  cancel() {
    this.initialize();
  }

  delete($translation) {
    this.pollingDbService.stopPolling();

    if ($translation.id !== '' && $translation.id !== 0) {
      this.translationDbService.deleteTranslation($translation);
      this.initialize();
    }
  }

  save($translation) {
    if ( $translation.text != '' ) {
      if ($translation.id === 0 || $translation.id === '' || $translation.id === null ) {
        this.translationDbService.saveTranslation($translation);
      } else if (this.translation.id === $translation.id) {
        this.translationDbService.updateTranslation($translation);
      }
    this.initialize();
    } else {
      this.cancel();
    }
  }

  toggleFilter() {
    if (this.showFilter) {
      this.showFilter = false;
    } else {
      this.showFilter = true;
    }
  }

  clearFilter(){
    this.initialize();
  }

  toggleCheckBoxLan($iso_639_1){
    var idx = this.filterOn.iso_639_1.indexOf($iso_639_1);

    if (idx > -1) {
      this.filterOn.iso_639_1.splice(idx, 1);
    } else {
      this.filterOn.iso_639_1.push($iso_639_1);
    }

    console.log ( this.filterOn );
  }

  toggleCheckBoxApp($app_code){
    var idx = this.filterOn.app_code.indexOf($app_code);

    if (idx > -1) {
      this.filterOn.app_code.splice(idx, 1);
    } else {
      this.filterOn.app_code.push($app_code);
    }

    console.log ( this.filterOn );
  }

  editRows( $element, $length ) {
    const cols = $element.getAttribute("cols");
    const rows = Math.ceil($length/cols);
  }
}

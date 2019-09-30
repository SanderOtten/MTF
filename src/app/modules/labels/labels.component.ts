import { Component, OnInit, OnChanges } from '@angular/core';
import { LabelDbService } from '../../core/services/db/label.db.services';
import { PollingDbService } from '../../core/services/db/polling.db.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html'
})


export class LabelsComponent implements OnInit, OnChanges {

  label;
  // labels;
  addNewLabel: boolean;
  filterValue;
  filterOn;

  constructor( private labelDbService: LabelDbService,
               public  pollingDbService: PollingDbService
             ) { }

  ngOnInit() {
    this.initialize();
  }

  ngOnChanges() {
  }

  initialize() {
    // console.log ('initialize labels');
    this.pollingDbService.initialize();
    // this.labels = this.pollingDbService.labels;
    this.addNewLabel = false;
    this.label = [];
  }

  edit($label) {
    this.pollingDbService.stopPolling();
    this.addNewLabel = false;
    this.label = $label;
  }

  cancel() {
    this.initialize();
  }

  addNew() {
    this.pollingDbService.stopPolling();
    this.label             = [];
    this.label.id          = 0;
    this.label.label       = '';
    this.label.description = '';
    this.label.app_id      = '';
    this.label.app_code    = '';
    this.label.app_name    = '';
    this.label.app_code    = '';
    this.addNewLabel = true;
  }

  delete($label) {
    this.pollingDbService.stopPolling();

    if ( $label.id !== '' && $label.id !== 0 ) {
      this.labelDbService.deleteLabel($label);
      this.initialize();
    }
  }

  save($label) {
    // this.pollingDbService.stopPolling();
    if ( $label.id === 0 ) {
      this.labelDbService.saveLabel($label);
    } else if ( this.label.id === $label.id  ) {
      this.labelDbService.updateLabel($label);
    }

    this.initialize();
  }

  toUpper($label) {
    this.label.label = $label.toUpperCase();
  }
}

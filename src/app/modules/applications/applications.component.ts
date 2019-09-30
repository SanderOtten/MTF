import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationDbService } from '../../core/services/db/application.db.services';
import { PollingDbService } from '../../core/services/db/polling.db.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html'
})


export class ApplicationsComponent implements OnInit, OnChanges {

  application;
  addNewApplication: boolean;

  constructor( private applicationDbService: ApplicationDbService,
               public  pollingDbService: PollingDbService,
               private router: Router
             ) { }

  ngOnInit() {
    this.initialize();
  }

  ngOnChanges() {}

  initialize() {
    this.pollingDbService.initialize();
    this.addNewApplication = false;
    this.application = [];
  }

  edit($application) {
    this.pollingDbService.stopPolling();
    this.addNewApplication = false;
    this.application = $application;
  }

  cancel() {
    this.initialize();
  }

  addNew() {
    this.pollingDbService.stopPolling();
    this.application = [];
    this.application.id          = 0;
    this.application.code        = ''
    this.application.name        = '';
    this.application.description = '';
    this.addNewApplication       = true;
  }

  delete($application) {
    this.pollingDbService.stopPolling();

    if ( $application.id !== '' && $application.id !== 0 ) {
      this.applicationDbService.deleteApplication($application);
      this.initialize();
    }
  }

  save($application) {
    if ( $application.id === 0 ) {
      this.applicationDbService.saveApplication($application);
    } else if ( this.application.id === $application.id  ) {
      this.applicationDbService.updateApplication($application);
    }
    this.initialize();
  }

  toUpper($application) {
    this.application.application = $application.toUpperCase();
  }
}

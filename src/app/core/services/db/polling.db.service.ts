import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { DataDbService } from './data.db.services';

@Injectable()
export class PollingDbService implements OnInit, OnDestroy {

  applications = [];
  labels = [];
  languages = [];
  translations = [];

  pollApplications;
  pollLabels;
  pollLanguages;
  pollTranslations;

  polling = false;

  constructor ( private dataDbService: DataDbService ) {
    this.initialize();
  }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.startPolling();
  }

  stopPolling() {
    if (this.polling) {
      this.pollApplications.unsubscribe();
      this.pollLabels.unsubscribe();
      this.pollLanguages.unsubscribe();
      this.pollTranslations.unsubscribe();
      this.polling = false;
    }
  }

  startPolling() {
    if (!this.polling) {
      this.pollApplications = this.dataDbService.pollData('application','')
        .subscribe(
          $applications => {
            this.applications = $applications;
          },
          $error => {
            console.log ( $error );
          },
          () => {
          }
        );

      this.pollLabels = this.dataDbService.pollData('label','')
        .subscribe(
          $labels => {
            this.labels = $labels;
          },
          $error => {
            console.log ( $error );
          },
          () => {
          }
        );

      this.pollLanguages = this.dataDbService.pollData('language','')
        .subscribe(
          $languages => {
            this.languages = $languages;
          },
          $error => {
            console.log ( $error );
          },
          () => {
          }
        );

      this.pollTranslations = this.dataDbService.pollData('translation','')
        .subscribe(
          $translations => {
            this.translations = $translations;
          },
          $error => {
            console.log($error);
          },
          () => {
          }
        );

      this.polling = true;
    }
  }

  ngOnDestroy() {
    this.stopPolling();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbService  } from './db.service';
import { Observable, timer } from 'rxjs';
import { map, switchMap, share  } from 'rxjs/operators';

@Injectable()
export class ApplicationDbService {
  pollingHandler = [];

  label;

  constructor( protected httpClient: HttpClient,
               private   dbService: DbService,
  ) {
  }

  private save($application): Observable<any> {
    return this.dbService.saveData(`class=application`
      + `&code=${$application.code}`
      + `&name=${encodeURIComponent($application.name)}`
      + `&description=${encodeURIComponent($application.description)}`
    );
  }

  private update($application) {
    return this.dbService.updateData(`class=application`
      + `&id=${$application.id}`
      + `&code=${$application.code}`
      + `&name=${encodeURIComponent($application.name)}`
      + `&description=${encodeURIComponent($application.description)}`
    );
  }

  private delete($application) {
    return this.dbService.deleteData(`class=application`
      + `&id=${$application.id}`
    );
  }

  saveApplication($application) {
    this.save($application)
      .subscribe(
        res => {
        },
        err => {
          console.log('Error occured ' + JSON.stringify(err));
        },
        () => {
        }
      );
  }

  updateApplication($application) {
    this.update($application)
      .subscribe(
        res => {
        },
        err => {
          console.log('Error occured ' + JSON.stringify(err));
        },
        () => {
        }
      );
  }

  deleteApplication($application) {
    this.delete($application)
      .subscribe(
        res => {
        },
        err => {
          console.log('Error occured ' + JSON.stringify(err));
        },
        () => {
        }
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbService  } from './db.service';
import { Observable, timer } from 'rxjs';
import { map, switchMap, share  } from 'rxjs/operators';

@Injectable()
export class LabelDbService {
  pollingHandler = [];

  label;

  constructor( protected httpClient: HttpClient,
               private   dbService: DbService,
  ) {
  }

  private save($label): Observable<any> {
    return this.dbService.saveData(`class=label`
      + `&app_id=${$label.app_id}`
      + `&label=${encodeURIComponent($label.label)}`
      + `&description=${encodeURIComponent($label.description)}`
    );
  }

  private update($label) {
    return this.dbService.updateData(`class=label`
      + `&id=${$label.id}`
      + `&app_id=${$label.app_id}`
      + `&label=${encodeURIComponent($label.label)}`
      + `&description=${encodeURIComponent($label.description)}`
    );
  }

  private delete($label) {
    return this.dbService.deleteData(`class=label`
      + `&id=${$label.id}`
    );
  }

  saveLabel($label) {
    this.save($label)
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

  updateLabel($label) {
    this.update($label)
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

  deleteLabel($label) {
    this.delete($label)
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

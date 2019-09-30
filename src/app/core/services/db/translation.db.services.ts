import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbService  } from './db.service';
import { Observable, timer } from 'rxjs';
import { map, switchMap, share  } from 'rxjs/operators';

@Injectable()
export class TranslationDbService {
  pollingHandler = [];

  constructor( protected httpClient: HttpClient,
               private   dbService: DbService,
  ) {
  }

  private save($translation): Observable<any> {
    return this.dbService.saveData(`class=translation`
      + `&label_id=${$translation.label_id}`
      + `&language_id=${$translation.language_id}`
      + `&text=${encodeURIComponent($translation.text)}`
    );
  }

  private update($translation) {
    return this.dbService.updateData(`class=translation`
      + `&id=${$translation.id}`
      + `&text=${encodeURIComponent($translation.text)}`
    );
  }

  private delete($translation) {
    return this.dbService.deleteData(`class=translation`
      + `&id=${$translation.id}`
    );
  }

  saveTranslation($translation) {
    this.save($translation)
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

  updateTranslation($translation) {
    this.update($translation)
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

  deleteTranslation($translation) {
    this.delete($translation)
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

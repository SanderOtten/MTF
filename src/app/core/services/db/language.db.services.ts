import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbService } from './db.service';
import { Observable, timer } from 'rxjs';
import { map, switchMap, share  } from 'rxjs/operators';

@Injectable()
export class LanguageDbService {
  pollingHandler = [];

  constructor( protected httpClient: HttpClient,
               private   dbService: DbService,
  ) {
  }

  private save($language): Observable<any> {
    return this.dbService.saveData(
        `class=language`
      + `&english_name=${$language.english_name}`
      + `&native_name=${$language.native_name}`
      + `&iso_639_1=${$language.iso_639_1}`
      + `&iso_639_2=${$language.iso_639_2}`
      + `&iso_639_3=${$language.iso_639_3}`
    );
  }

  private update($language) {
    return this.dbService.updateData(
        `class=language`
      + `&id=${$language.id}`
      + `&english_name=${$language.english_name}`
      + `&native_name=${$language.native_name}`
      + `&iso_639_1=${$language.iso_639_1}`
      + `&iso_639_2=${$language.iso_639_2}`
      + `&iso_639_3=${$language.iso_639_3}`
    );
  }

  private delete($language) {
    return this.dbService.deleteData(`class=language`
      + `&id=${$language.id}`
    );
  }

  saveLanguage($language) {
    this.save($language)
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

  updateLanguage($language) {
    this.update($language)
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

  deleteLanguage($language) {
    this.delete($language)
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

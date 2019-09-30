import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbService  } from './db.service';
import { Observable, timer } from 'rxjs';
import { map, switchMap, share  } from 'rxjs/operators';

@Injectable()
export class DataDbService {
  pollingHandler = [];

  constructor( protected httpClient: HttpClient,
               private   dbService: DbService,
  ) {
  }

  getData($class, $id = ``, $idtype = ``) {
    let $paramstr = `class=${$class}`;

    if ($id !== `` ) {
      $paramstr += `&${$idtype}id=${$id}`;
    }

    return this.dbService.getData($paramstr).pipe(map((data) => this.returnData(data)));
  }

  pollData($class, $id, $idtype = ``, interval: number = 500): Observable<any> {
    if (this.pollingHandler[`${$class}_${$id}`] === undefined) {
      this.pollingHandler[`${$class}_${$id}`] = timer(0, interval).pipe(
        switchMap(_ => this.getData($class, $id, $idtype))
      );
    }
    return this.pollingHandler[`${$class}_${$id}`].pipe(share());
  }

  private returnData($data) {
    return $data;
  }
}

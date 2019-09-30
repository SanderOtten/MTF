import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DbService {

  protected basePath = '';
  local = (location.host === 'localhost:4200' || 'localhost:4250' );

  public defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient) {
    console.log(location.host);
    if (this.local) {
      this.basePath = 'http://localhost/mtf';
    }
  }

  getData($paramstr): Observable<any> {
    return this.httpClient.get(`${this.basePath}/mtf.php?${$paramstr}`).pipe(
      map((res: Response) => this.extractData(res)),
      catchError(this.handleError)
    );
  }

  saveData($paramstr): Observable<any> {
    const url = `${this.basePath}/mtf.php?${$paramstr}`;
    return this.httpClient.post(url, null);
  }

  updateData($paramstr): Observable<any> {
    const url = `${this.basePath}/mtf.php?${$paramstr}`;
    return this.httpClient.put(url, null);
  }

  deleteData($paramstr) {
    const url = `${this.basePath}/mtf.php?${$paramstr}`;
    return this.httpClient.delete(url);
  }

  private extractData(res: Response) {
    const body = res;
    return body || [];
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log('error: ' + errMsg); // log to console instead
    console.log('error: ' + error); // log to console instead
    // return Observable.throw(errMsg);
    return errMsg;
  }
}

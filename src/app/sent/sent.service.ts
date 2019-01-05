import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ISent } from './sent.model';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable()
export class SentService {
  private sentUrl = 'assets/api/sent.json';

  constructor(private http: HttpClient) { }

  getSentList(): Observable<ISent[]> {
    return this.http.get<ISent[]>(this.sentUrl).pipe(
      tap(data => console.log('sent list: ' + JSON.stringify(data))),
        catchError(this.handleError)
    );
  }

  getSentDetail(id: number): Observable<ISent | undefined> {
    return this.getSentList().pipe(
      map((sentList: ISent[]) => sentList.find(mail => mail.sentId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

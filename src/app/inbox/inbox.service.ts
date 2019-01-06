import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IInbox } from './inbox.model';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InboxService {
  private inboxUrl = 'assets/api/inbox.json';

  constructor(private http: HttpClient) { }

  getInboxList(): Observable<IInbox[]> {
    return this.http.get<IInbox[]>(this.inboxUrl).pipe(
      tap(data => console.log('inbox list: ' + JSON.stringify(data))),
        catchError(this.handleError)
    );
  }

  getInboxDetail(id: number): Observable<IInbox | undefined> {
    return this.getInboxList().pipe(
      map((inboxList: IInbox[]) => inboxList.find(mail => mail.inboxId === id))
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

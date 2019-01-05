import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IInbox } from './inbox.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class InboxService {
  private _inboxUrl = './api/inbox.json';

  constructor(private _http: HttpClient) { }

  getInboxList(): Observable<IInbox[]> {
    return this._http.get<IInbox[]>(this._inboxUrl)
      .do(data => console.log('inbox list: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
}

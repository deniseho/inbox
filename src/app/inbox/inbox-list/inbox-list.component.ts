import { Component, OnInit } from '@angular/core';
import { IInbox } from '../inbox.model';
import { InboxService } from '../inbox.service';

@Component({
  selector: 'app-inbox-list',
  templateUrl: './inbox-list.component.html',
  styleUrls: ['./inbox-list.component.css']
})
export class InboxListComponent implements OnInit {

  inboxList: IInbox[] = [];
  errorMessage: any;

  constructor(private _inboxService: InboxService) { }

  ngOnInit() {
    this._inboxService.getInboxList()
    .subscribe(data => {
      this.inboxList = data;
    },
    error => this.errorMessage = <any>error);
  }
}

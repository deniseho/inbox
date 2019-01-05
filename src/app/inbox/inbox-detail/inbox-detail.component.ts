import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IInbox } from '../inbox.model';

@Component({
  selector: 'app-inbox-detail',
  templateUrl: './inbox-detail.component.html',
  styleUrls: ['./inbox-detail.component.css']
})
export class InboxDetailComponent implements OnInit {

  // subject: string;
  inbox: IInbox;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
     const id = this._route.snapshot.paramMap.get('id');
    //  this.subject = `Mail ID: ${id}`;
     this.inbox = {
       'inboxId': id,
       'inboxFrom': 'from',
       'inboxSubject': 'subject',
       'inboxBody': '<h1>Hi</h1>',
       'recieved': '2019'
     };
  }

}

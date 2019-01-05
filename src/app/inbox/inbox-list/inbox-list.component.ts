import { Component, OnInit } from '@angular/core';
import { IInbox } from '../inbox.model';
import { InboxService } from '../inbox.service';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inbox-list',
  templateUrl: './inbox-list.component.html',
  styleUrls: ['./inbox-list.component.css']
})
export class InboxListComponent implements OnInit {

  // inboxList: IInbox[] = [];
  errorMessage: any;

  inboxList = new MatTableDataSource<any>();


  constructor(private httpClient: HttpClient,
    private inboxService: InboxService) { }

  ngOnInit() {
    this.inboxService.getInboxList()
    .subscribe(data => {
      this.inboxList.data = data;
    },
    error => this.errorMessage = <any>error);
    // this.httpClient.get<any>('https://api.github.com/search/issues?q=repo:angular/material2&page=1').subscribe(data => {
    //   this.emailsDataSource.data = data.items;
    // });
  }
}

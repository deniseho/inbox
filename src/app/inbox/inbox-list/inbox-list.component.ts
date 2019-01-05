import { Component, OnInit } from '@angular/core';
import { IInbox } from '../inbox.model';
import { InboxService } from '../inbox.service';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox-list',
  templateUrl: './inbox-list.component.html',
  styleUrls: ['./inbox-list.component.css']
})
export class InboxListComponent implements OnInit {

  errorMessage: any;

  inboxList = new MatTableDataSource<any>();
  displayedColumns = ['inboxFrom', 'inboxSubject', 'recieved'];

  constructor(
    private router: Router,
    private inboxService: InboxService) { }

  ngOnInit() {
    this.inboxService.getInboxList()
    .subscribe(data => {
      this.inboxList.data = data;
    },
    error => this.errorMessage = <any>error);
  }

  goto(id) {
    this.router.navigate(['/inbox', id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { SentService } from '../sent.service';
import { ISent } from '../sent.model';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sent-list',
  templateUrl: './sent-list.component.html',
  styleUrls: ['./sent-list.component.css']
})
export class SentListComponent implements OnInit {

  errorMessage: any;

  // use MatTableDataSource to display the data in the table
  // use sent model to standardized the data structure
  sentList = new MatTableDataSource<ISent>();
  displayedColumns = ['sentTo', 'sentSubject', 'sentTime'];

  constructor(
    private router: Router,
    private sentService: SentService) { }

  ngOnInit() {
    this.sentService.getSentList()
    .subscribe(
      data => {
        this.sentList.data = data;
      },
      error => this.errorMessage = <any>error);
    }

    goto(id) {
      this.router.navigate(['/sent', id]);
    }
}

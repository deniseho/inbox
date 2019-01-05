import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IInbox } from '../inbox.model';
import { InboxService } from '../inbox.service';

@Component({
  selector: 'app-inbox-detail',
  templateUrl: './inbox-detail.component.html',
  styleUrls: ['./inbox-detail.component.css']
})
export class InboxDetailComponent implements OnInit {

  inbox: IInbox | undefined;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inboxService: InboxService
    ) { }

  ngOnInit() {
     const param = this.route.snapshot.paramMap.get('id');
     if (param) {
       const id = +param;
       this.getInbox(id);
     }
  }

  getInbox(id: number) {
    this.inboxService.getInboxDetail(id).subscribe(
      data => this.inbox = data,
      error => this.errorMessage = <any>error);
  }

  goBack(): void {
    this.router.navigate(['/inbox']);
  }
}

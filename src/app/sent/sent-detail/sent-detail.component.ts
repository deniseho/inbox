import { Component, OnInit } from '@angular/core';
import { ISent } from '../sent.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SentService } from '../sent.service';

@Component({
  selector: 'app-sent-detail',
  templateUrl: './sent-detail.component.html',
  styleUrls: ['./sent-detail.component.css']
})
export class SentDetailComponent implements OnInit {

  sent: ISent | undefined;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sentService: SentService
  ) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getSent(id);
    }
  }

  getSent(id: number) {
    this.sentService.getSentDetail(id)
    .subscribe(
      data => this.sent = data,
      error => this.errorMessage = <any>error);
  }

  goBack(): void {
    this.router.navigate(['/sent']);
  }

}

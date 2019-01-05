import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentDetailComponent } from './sent-detail/sent-detail.component';
import { SentListComponent } from './sent-list/sent-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SentListComponent,
    SentDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'sent', component: SentListComponent },
      { path: 'sent/:id', component: SentDetailComponent }
    ])
  ]
})
export class SentModule { }

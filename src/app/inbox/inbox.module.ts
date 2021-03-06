import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InboxService } from './inbox.service';
import { InboxListComponent } from './inbox-list/inbox-list.component';
import { InboxDetailComponent } from './inbox-detail/inbox-detail.component';
import { MatTableModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule( {
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forChild( [
      {
        path: 'inbox',
        component: InboxListComponent
      },
      {
        path: 'inbox/:id',
        component: InboxDetailComponent
      }
    ] )
  ],
  declarations: [
    InboxListComponent,
    InboxDetailComponent
  ],
  providers: [
    InboxService,
  ]
} )
export class InboxModule { }

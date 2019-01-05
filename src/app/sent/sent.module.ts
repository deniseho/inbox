import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentDetailComponent } from './sent-detail/sent-detail.component';
import { SentListComponent } from './sent-list/sent-list.component';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatButtonModule } from '@angular/material';
import { SentService } from './sent.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule( {
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forChild( [
      { path: 'sent', component: SentListComponent },
      { path: 'sent/:id', component: SentDetailComponent }
    ] )
  ],
  declarations: [
    SentListComponent,
    SentDetailComponent
  ],
  providers: [
    SentService
  ]
} )
export class SentModule { }

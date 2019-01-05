import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { InboxListComponent } from './inbox/inbox-list/inbox-list.component';
import { InboxDetailComponent } from './inbox/inbox-detail/inbox-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxListComponent,
    InboxDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    // RouterModule.forRoot([
    //   { path: 'inbox', }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

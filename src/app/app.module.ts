import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatButtonModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InboxModule } from './inbox/inbox.module';
import { SentModule } from './sent/sent.module';

@NgModule( {
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forRoot( [
      // { path: 'sent', component: SentComponent },
      { path: '', redirectTo: 'inbox', pathMatch: 'full' },
      { path: '**', redirectTo: 'inbox', pathMatch: 'full' }
    ] ),
    InboxModule,
    SentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnfularMentoringHeaderComponent } from './shared/components/anfular-mentoring-header/anfular-mentoring-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AnfularMentoringHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

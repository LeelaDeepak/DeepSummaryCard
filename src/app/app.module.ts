import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeepSummaryCardsModule } from 'projects/deep-summary-cards/src/lib/deep-summary-cards.module';
import { ViewComponent } from './view/view.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeepSummaryCardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

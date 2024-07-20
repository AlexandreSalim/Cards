import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLineComponent } from './components/card-line/card-line.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardLineComponent,
    CardItemComponent,
    CardTitleComponent,
    BalanceCardComponent,
    CreditCardComponent,
    ClientCardComponent,
    DebitCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

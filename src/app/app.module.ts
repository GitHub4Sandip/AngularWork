import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CurrencyCodesComponent } from './currency-codes/currency-codes.component';
import { CurrencyService } from './currency.service';
import { CurrencyConversionComponent } from './currency-conversion/currency-conversion.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyCodesComponent,
    CurrencyConversionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

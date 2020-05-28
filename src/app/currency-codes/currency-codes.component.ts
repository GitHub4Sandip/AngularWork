import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { CurrencyCode } from '../currencycode';


@Component({
  selector: 'app-currency-codes',
  templateUrl: './currency-codes.component.html',
  styleUrls: ['./currency-codes.component.css']
})
export class CurrencyCodesComponent implements OnInit {

  currencyCodes: CurrencyCode[];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.getCurrencyCodes();
  }

  getCurrencyCodes() {
    this.currencyService.getCurrencyCodes()
      .subscribe((response => this.currencyCodes = response))
  }

}

import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Conversion } from '../currencyconversion';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-currency-conversion',
  templateUrl: './currency-conversion.component.html',
  styleUrls: ['./currency-conversion.component.css']
})
export class CurrencyConversionComponent implements OnInit {

  conversion: Observable<any>;
  model = {from: '', to: '', quantity: ''};
  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
  }

  calculateCurrencyConversion(from: string, to: string, quantity: string) {
     this.currencyService.calculateCurrencyConversion(from, to, quantity)
      .subscribe((response => this.conversion = response));
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CurrencyCode } from './currencycode';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private currency_codes_service_base_url = '/api/v1/currency-codes'
  private currency_conversion_service_base_url = 'api/v1/currency-converter'
  private currency_conversion_service_url;
  private data: any;

  constructor(private http: HttpClient) { }

  getCurrencyCodes(): Observable<CurrencyCode[]> {
    return this.http.get<CurrencyCode[]>(this.currency_codes_service_base_url)
      .pipe(
        tap(_ => this.log('fetched currency codes')),
        catchError(this.handleError<CurrencyCode[]>('getCurrencyCodes', []))
      );
  }

  /* calculateCurrencyConversion(from: string, to: string, quantity: string): Observable<Conversion> {
    this.currency_conversion_service_url = this.currency_conversion_service_base_url
      + '/from' + `/${from.toString()}` + '/to' + `/${to.toString()}` + '/quantity' + `/${quantity.toString()}`;

    return this.http.get<Conversion>(this.currency_conversion_service_url)
      .pipe(
        tap(_ => this.log('currency conversion is completed')),
        catchError(this.handleError<Conversion>('calculateCurrencyConversion'))
      );
  } */

  calculateCurrencyConversion(from: string, to: string, quantity: string): Observable<any> {
    this.currency_conversion_service_url = this.currency_conversion_service_base_url
      + '/from' + `/${from.toString()}` + '/to' + `/${to.toString()}` + '/quantity' + `/${quantity.toString()}`;

    return this.http.get<any>(this.currency_conversion_service_url)
      .pipe(
        tap(_ => this.log('currency conversion is completed')),
        catchError(this.handleError<any>('calculateCurrencyConversion'))
      );
  } 




  

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log('${operation} failed: ${error.message}');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a Service message with the MessageService */
  private log(message: string) {

  }
}

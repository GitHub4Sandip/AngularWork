export interface Conversion {
    amount: string;
    base_currency_code: string;
    base_currency_name: string;
    rates: Rates;
    status: string;
    updated_date: string;
} 

export interface Rates {
    currency_name: string;
    rate: string;
    rate_for_amount: string;
}
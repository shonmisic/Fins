import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Currency, Expenditure } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ExpendituresService {
  getAllExpenditures(): Observable<Expenditure[]> {
    return of([
      <Expenditure>{
        name: 'Unniver',
        amount: 100,
        currency: Currency.EUR,
      },
      <Expenditure>{
        name: 'Maxi',
        amount: 300,
        currency: Currency.RSD,
      },
      <Expenditure>{
        name: 'Mesara',
        amount: 1400,
        currency: Currency.RSD,
      },
    ]);
  }
}

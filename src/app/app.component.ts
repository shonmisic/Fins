import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

import { Currency, Expenditure } from './models/models';
import { ExpendituresService } from './services/expenditures.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  expenditures$: Observable<Expenditure[]>;

  constructor(private expendituresService: ExpendituresService) {}

  ngOnInit() {
    this.expenditures$ = this.getAllExpenditures();
  }

  private getAllExpenditures(): Observable<Expenditure[]> {
    return this.expendituresService.getAllExpenditures().pipe(
      take(1),
      switchMap(e =>
        of(
          e.map(
            e =>
              <Expenditure>{
                amount: e.amount,
                name: e.name,
                currency: Currency[e.currency],
              }
          )
        )
      )
    );
  }
}

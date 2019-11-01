import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Fins';
  expenditures$ = of([
    <Expenditure>{
      name: 'Unniver',
      amount: 100,
      currency: 'USD'
    },
    <Expenditure>{
      name: 'Maxi',
      amount: 300,
      currency: 'USD'
    },
    <Expenditure>{
      name: 'Mesara',
      amount: 1400,
      currency: 'USD'
    },
  ]);
}

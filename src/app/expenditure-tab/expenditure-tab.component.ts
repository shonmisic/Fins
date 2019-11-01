import { Component, Input } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'fins-expenditure-tab',
  templateUrl: './expenditure-tab.component.html',
  styleUrls: ['./expenditure-tab.component.scss'],
})
export class ExpenditureTabComponent {
  @Input() expenditureName: string;
  @Input() amountSpent: number;
  @Input() currency: string;

  faWindowClose = faWindowClose;
}

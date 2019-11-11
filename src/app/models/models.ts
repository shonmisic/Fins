export interface Expenditure {
  name: string;
  amount: number;
  currency: Currency | string;
}

export enum Currency {
  RSD,
  EUR,
}

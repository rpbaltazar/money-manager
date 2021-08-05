import { Component, OnInit } from '@angular/core';

export interface AccountOverview {
  name: string;
  amount: number;
  currency: string;
}

const ACCOUNT_INFO: AccountOverview[] = [
  { name: 'DBS', amount: 50000, currency: 'SGD' },
  { name: 'Stashaway', amount: 34000, currency: 'SGD' },
  { name: 'Millennium BCP', amount: 1000, currency: 'EUR' },
  { name: 'CGD', amount: 12300, currency: 'EUR' },
  { name: 'Gemini', amount: 90000, currency: 'EUR' }
];

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  title = 'Overview';
  columnsToDisplay: string[] = ['Account Name', 'Amount', 'Currency'];
  dataSource = ACCOUNT_INFO;

  constructor() { }

  ngOnInit(): void {
  }

}

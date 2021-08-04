import { Component, OnInit } from '@angular/core';

export interface AccountOverview {
  name: string;
  amount: number;
  currency: string;
}

const ACCOUNT_INFO: AccountOverview[] = [
  { name: 'Hydrogen', amount: 1.0079, currency: 'H' },
  { name: 'Helium', amount: 4.0026, currency: 'He' },
  { name: 'Lithium', amount: 6.941, currency: 'Li' },
  { name: 'Beryllium', amount: 9.0122, currency: 'Be' },
  { name: 'Boron', amount: 10.811, currency: 'B' },
  { name: 'Carbon', amount: 12.0107, currency: 'C' },
  { name: 'Nitrogen', amount: 14.0067, currency: 'N' },
  { name: 'Oxygen', amount: 15.9994, currency: 'O' },
  { name: 'Fluorine', amount: 18.9984, currency: 'F' },
  { name: 'Neon', amount: 20.1797, currency: 'Ne' },
];

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  title = 'Overview';
  displayedColumns: string[] = ['Account Name', 'Amount', 'Currency'];
  dataSource = ACCOUNT_INFO;

  constructor() { }

  ngOnInit(): void {
  }

}

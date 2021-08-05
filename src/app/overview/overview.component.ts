import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from 'ng-apexcharts';

export interface AccountOverview {
  name: string;
  amount: number;
  currency: string;
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
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
  @ViewChild("chart") chart!: ChartComponent;
  chartOptions: Partial<ChartOptions>;

  title = 'Overview';
  columnsToDisplay: string[] = ['Account Name', 'Amount', 'Currency'];
  dataSource = ACCOUNT_INFO;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Overview",
          data: [30000, 29800, 32000, 50000]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      title: {
        text: 'Overview'
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar"]
      }
    };
    debugger;
  }

  ngOnInit(): void {
  }

}

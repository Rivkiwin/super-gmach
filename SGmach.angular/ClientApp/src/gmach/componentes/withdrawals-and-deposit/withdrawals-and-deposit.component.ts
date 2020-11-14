import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdrawals-and-deposit',
  templateUrl: './withdrawals-and-deposit.component.html',
  styleUrls: ['./withdrawals-and-deposit.component.css']
})
export class WithdrawalsAndDepositComponent implements OnInit {

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['01', '02', '03', '04', '05', '06', '07','08','09','10','11','12'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [650, 1000, 800, 810, 800, 550, 400,500,670], label: 'משיכות'},
    {data: [2800, 480, 400, 190, 860, 270, 900,1000,2000], label: 'הפקדות'}
  ];
  ngOnInit(): void {
  }
}

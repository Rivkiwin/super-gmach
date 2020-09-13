import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'expenditure-and-income-charts',
  templateUrl: './expenditure-and-income-charts.component.html',
  styleUrls: ['./expenditure-and-income-charts.component.css']
})
export class ExpenditureAndIncomeChartsComponent implements OnInit {

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['01', '02', '03', '04', '05', '06', '07','08','09','10','11','12'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'הכנסות'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'הוצאות'}
  ];
  ngOnInit(): void {
  }

}

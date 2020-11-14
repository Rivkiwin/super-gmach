import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdrawals-and-deposit',
  templateUrl: './withdrawals-and-deposit.component.html',
  styleUrls: ['./withdrawals-and-deposit.component.css']
})
export class WithdrawalsAndDepositComponent implements OnInit {

  baseURL;
  constructor(private httpc:HttpClient, @Inject('API_URL')  apiUrl: string) { 
   this.baseURL=`${apiUrl}api/View`;}

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['01', '02', '03', '04', '05', '06', '07','08','09','10','11','12'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData;

  ngOnInit(): void {
    var Deposits:[12];
    var withdrawals:[12];
    this.httpc.get(`${this.baseURL}/getDEposits&withdrawals`).subscribe(data=>{
      Deposits=data["deposits"];
      withdrawals=data["withdrawals"];
      this.barChartData=[
       {data: Deposits, label: 'הפקדות'},
         {data: withdrawals, label: 'משיכות'}
      ]
    })
  }
}

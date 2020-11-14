import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repayment } from 'src/gmach/classes/repayment';
import { LoanService } from 'src/gmach/services/loan.service';

@Component({
  selector: 'app-repayment-edit',
  templateUrl: './repayment-edit.component.html',
  styleUrls: ['./repayment-edit.component.css']
})
export class RepaymentEditComponent implements OnInit {
  repayment:Repayment
  constructor(private LoanService:LoanService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(res=>{
      var id=res.get('id');
      this.LoanService.getRepaymentById(id).subscribe(r=> {
          this.repayment=<Repayment>r;
        })
    })
   
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loan } from 'src/gmach/classes/Loan';
import { LoanService } from 'src/gmach/services/loan.service';

@Component({
  selector: 'app-loan-edit',
  templateUrl: './loan-edit.component.html',
  styleUrls: ['./loan-edit.component.css']
})
export class LoanEditComponent implements OnInit {
   loan:Loan
  constructor(private activeRouter:ActivatedRoute,private LoanService:LoanService) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(res => (this.LoanService.GetById(res.get('id')).subscribe(l=>{
      this.loan=<Loan>l,
      console.log(l)
    })
    ));
  }

}

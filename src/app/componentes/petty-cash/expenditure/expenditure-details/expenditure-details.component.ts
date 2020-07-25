import { Component, OnInit, Input } from '@angular/core';
import { Expenditure } from 'src/app/classes/expenditure';
import { ActivatedRoute } from '@angular/router';
import { ExpressionService } from 'ag-grid-community';
import { ExpenditureService } from 'src/app/services/expenditure.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-expenditure-details',
  templateUrl: './expenditure-details.component.html',
  styleUrls: ['./expenditure-details.component.scss']
})
export class ExpenditureDetailsComponent implements OnInit {

  constructor(private activeRouter:ActivatedRoute,private exService:ExpenditureService) { }
  FromeditEX:FormGroup;
  expenditure: Expenditure;

  ngOnInit(): void {
    //get expenditure by id from the url
    var id;
    this.activeRouter.paramMap.subscribe(res=>(id=res.get('id')));
    this.exService.GetById(id).subscribe(ex=>{this.expenditure=<Expenditure>ex,
      this.FromeditEX=new FormGroup({
        status: new FormControl(this.expenditure.status.Description),
        datePay:new FormControl(this.expenditure.real_date),
        futureDate:new FormControl(this.expenditure.future_date_String),
        amount:new FormControl(this.expenditure.amount)
      })
    });
    console.log(this.expenditure);
    console.log(id);
   //set from
  

     ;
  }
  
 //check validation
  validation=()=>{
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var from=document.getElementsByClassName("needs-validation");
      console.log("hi")
      // Loop over them and prevent submission
      Array.prototype.filter.call(from, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }
  

}

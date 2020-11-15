import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loan } from '../classes/Loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {


  baseUrl: string ;
  // = "http://localhost:62859/api/Loan/";
  constructor(private httpclinet: HttpClient, @Inject('API_URL') apiUrl: string) {
    this.baseUrl=`${apiUrl}api/Loan/`;
 }
 UpdateRepayment(repayment)
 {
   return this.httpclinet.post('https://localhost:5001/api/Repayment/Update',repayment);
 }
 Edit(Loan:Loan)
 {
  return this.httpclinet.post(`${this.baseUrl}Update`,Loan);
 }
 public Delete(LoanId)
  {
    debugger
    console.log(`${this.baseUrl}Delete`);
    return this.httpclinet.post(`${this.baseUrl}Delete`,LoanId);
  }
 GetRepayments()
 {
   return this.httpclinet.get(this.baseUrl+'getRepayments');
 }
 getRepaymentById(id)
 {
   return this.httpclinet.get(this.baseUrl+'getRepaymentById/'+id);
 }
  GetAll()
  {
    return this.httpclinet.get(this.baseUrl+'get');
  }
  GetById( id)
  {
    return this.httpclinet.get(this.baseUrl+'GetById/'+id);
  }
  Add(loan:Loan)
  {
    debugger
    return this.httpclinet.post(`${this.baseUrl}Add`,loan);
  }
  Update(loan:Loan)
  {
    return this.httpclinet.post(this.baseUrl+'Update',loan);
  }
  getFutureBalances()
  {
   return this.httpclinet.get('https://localhost:5001/api/Fund/getFutureBalances');
  }
}

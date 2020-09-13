import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loan } from '../classes/Loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {


  baseUrl: string = "https://localhost:62859/api/Loan/";
  constructor(private httpclinet: HttpClient, @Inject('API_URL') apiUrl: string) {
    // this.baseUrl=`${apiUrl}/api/User`;
 }
  GetAll()
  {
    return this.httpclinet.get(this.baseUrl+'Get');
  }
  GetById( id:number)
  {
    return this.httpclinet.get(this.baseUrl+'GetById/'+id);
  }
  Add(loan:Loan)
  {
    return this.httpclinet.post(this.baseUrl+'Add',loan);
  }
  Update(loan:Loan)
  {
    return this.httpclinet.post(this.baseUrl+'Update',loan);
  }
}

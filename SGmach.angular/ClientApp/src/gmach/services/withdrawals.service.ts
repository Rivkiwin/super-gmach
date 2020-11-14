import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Withdrawals } from '../classes/withdrawals';

@Injectable({
  providedIn: 'root'
})
export class WithdrawalsService {

  baseUrl;
  // ="http://localhost:62859/api/Withdrawals";
  constructor(private http:HttpClient, @Inject('API_URL') apiUrl: string) {
    this.baseUrl=`${apiUrl}api/Withdrawals`;
  }
  Add(Withdrawal:Withdrawals)
  {
   return this.http.post(`${this.baseUrl}/add`,Withdrawal);
  }
  Update(Withdrawal:Withdrawals)
  {
   return this.http.post(`${this.baseUrl}/update`,Withdrawal);
  }
  GetByFund(fundId)
  {
   return this.http.get(`${this.baseUrl}/GetByFund/${fundId}`);
  }
  GetAll()
  {
   return this.http.get(`${this.baseUrl}/GetAll`);
  }
  GetById(Id)
  {
   return this.http.get(`${this.baseUrl}/GetById/${Id}`);
  }
  GetByUser(Id)
  {
   return this.http.get(`${this.baseUrl}/GetByUser/${Id}`);
  }
}

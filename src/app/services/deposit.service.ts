import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { Deposit } from '../classes/Deposit';
@Injectable({
  providedIn: 'root'
})
export class DepositService {
  baseUrl="http://localhost:62859/api/Deposit/";
  List:Deposit[];
  postId;
  constructor(private http:HttpClient) { }
  GetList()
  {
  return  this.http.get(`${this.baseUrl}getList`).pipe(
      catchError(this.handleError));
  }
  GetById(id)
  {
    debugger
    return this.http.get(`${this.baseUrl}getById/${id}`).pipe(
      catchError(this.handleError));
  }
  GetByUserId(id)
  {
    debugger
    return this.http.get(`${this.baseUrl}getByUserId/${id}`).pipe(
      catchError(this.handleError));
  }
  GetByFundId(id)
  {
    debugger
    return this.http.get(`${this.baseUrl}getByFundId/${id}`)
  }
  Update(Deposit:Deposit)
  {
    this.http.post(`${this.baseUrl}update`,Deposit).subscribe({
      next: data => this.postId = data,
      error: error => console.error('There was an error!', error)
    }
    )
  }
  
  Add(Deposit:Deposit)
  {
    debugger
  return  this.http.post(`${this.baseUrl}AddDeposit`, Deposit)
     
  }

  
  handleError(error: HttpErrorResponse){
    console.log("erro on get data");
      return throwError(error);
  }
}

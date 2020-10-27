import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Income } from "src/gmach/classes/Income";
import { Body } from "@angular/http/src/body";


@Injectable({
  providedIn: 'root'
})
export class  IncomeService {
  // baseUrl: string;
  baseUrl;
  // ="http://localhost:62859/api/Income";
  postId: object;
  constructor(private http: HttpClient, @Inject('API_URL') apiUrl: string) {
    this.baseUrl=`${apiUrl}api/Income`;

  }
  public add(income: Income) {
   return this.http.post(`${this.baseUrl}/Add`,income);


  }
  public Get() {
    return this.http.get(`${this.baseUrl}/getList`)
    // http://localhost:4200/user/GetUsersList
  }

 // public getAll_Future_expenditures() {
    // return this.list_Future_expenditures;
  //}
 // public getAll_Current_expenditures() {
    // return this.list_Current_expenditures;
 // }
}

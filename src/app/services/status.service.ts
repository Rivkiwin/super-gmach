import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { status } from '../classes/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
baseURL="http://localhost:62859/api/Status/";

  constructor(private http:HttpClient) {
    
   }
  public GetStatus(){
   return this.http.get(`${this.baseURL}getStatusList`);
  }
}

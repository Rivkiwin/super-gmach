import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

import { ManagementStatusDTO } from '../classes/management-status-dto';
@Injectable({
  providedIn: 'root'
})
export class ManagmentStatusService {
   Status:ManagementStatusDTO[];
  baseUrl:string="http://localhost:62859/api/management_Status/"
  constructor(private http: HttpClient) { }
    public GetAll()
    {
     return this.http.get(`${this.baseUrl}get`);
    }
    public GetByName(name)
    {
     
        this.GetAll().subscribe(x=>{
           this.Status=<ManagementStatusDTO[]>x,
          this.Status.forEach(status => {
            if(status.Name==name)
            return status;
        }) 
        });
        this.Status.forEach(status => {
          if(status.Name==name)
          return status;
      }) 
        return null
        
     }
    
}

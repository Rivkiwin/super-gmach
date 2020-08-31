import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { ManagementStatusDTO } from 'src/gmach/classes/management-status-dto';
@Injectable({
  providedIn: 'root'
})
export class ManagmentStatusService {
   Status:ManagementStatusDTO[];
  baseUrl:string;
  constructor(private http: HttpClient, @Inject('API_URL') apiUrl: string) {
    this.baseUrl=`${{apiUrl}}api/management_Status/`
  }
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

import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { status } from 'src/gmach/classes/status';

@Injectable({
  providedIn: 'root'
})

export class StatusService {
 baseUrl:string;

  constructor(private http:HttpClient, @Inject('API_URL') apiUrl: string) {
    this.baseUrl=`${{apiUrl}}//api/Status/`;}

  public GetStatus(){
   return this.http.get(`${this.baseUrl}getStatusList`);
  }
}

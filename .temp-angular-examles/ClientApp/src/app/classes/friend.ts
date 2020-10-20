export enum StatusFriendE{
    Married,
    Unmarried
}

import { ManagementStatusDTO } from './management-status-dto';
import { Communication } from './communication';


export class Friend {
     Bank:Number;
      Id:Number;
      Id_user:Number;
      First_name:String;
      Last_name:String;
      //
      phon1:Number;
      phon2:Number;
      _Manager:Number;
      Vip:boolean;
      Friend:boolean;
      Status_user:StatusFriendE;
      Management_status:ManagementStatusDTO;
      Communication_ways:Communication ;
      Bank_Details;
      Remarks;
      Joining_date;
      Scoring;
      Father_name;
     Status_reason;
     RachelLea;
    funds:number[]=[];
    
    constructor()
    {}
}

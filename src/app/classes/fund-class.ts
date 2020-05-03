export enum StatusE{
    active,Waiting_for_approval,inactive 
  }
export class FundClass {
    static cnt:number;
    name:string;
    id:number;
    Nun_friends:number;
    Required_month:number;
    Required_vip:boolean;
    Details:string;
    Status:StatusE;
    constructor(name:string,status:StatusE,Required_month?:number,Required_vip?:boolean,details?:string,num_friends?:number,)
    {
        FundClass.cnt=FundClass.cnt++;
          this.name=name;
          this.id=1;
          this.Required_month=Required_month?Required_month:0;
          this.Required_vip=Required_vip?Required_vip:false;     
          this.Details=details; 
          this.Nun_friends=num_friends?num_friends:0;
          this.Status=status;
    }
    
}
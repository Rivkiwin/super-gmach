import { status } from './status';

export enum StatusE {
  active,
  Waiting_for_approval,
  inactive,
}
export class FundClass {
  Fund_name;
  Status:status;
  Required_months;
  required_vip;
  Comments;
  date_create;
  Id;
  balance;
    // constructor(name:string,status:StatusE,Required_month?:number,Required_vip?:boolean,details?:string)
    // {
    //       FundClass.cnt=FundClass.cnt++;
    //       this.name=name;
    //       this.id=1;
    //       this.Required_month=Required_month?Required_month:0;
    //       this.Required_vip=Required_vip;     
    //       this.Details=details; 
    //       this.Nun_friends=0;
    //       console.log(this.Nun_friends);
    //       this.Status=status;
    // }
    
}
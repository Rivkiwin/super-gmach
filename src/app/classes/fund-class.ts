export enum StatusE {
  active,
  Waiting_for_approval,
  inactive,
}
export class FundClass {
    [x: string]: any;
    static cnt:number;
    name:string;
    id:number;
    Nun_friends:Number=0;
    Required_month:Number=0;
    Required_vip:boolean;
    Details:string;
    Status:StatusE;
    constructor(name:string,status:StatusE,Required_month?:number,Required_vip?:boolean,details?:string)
    {
          FundClass.cnt=FundClass.cnt++;
          this.name=name;
          this.id=1;
          this.Required_month=Required_month?Required_month:0;
          this.Required_vip=Required_vip?Required_vip:false;     
          this.Details=details; 
          this.Nun_friends=0;
          console.log(this.Nun_friends);
          this.Status=status;
    }
    
}
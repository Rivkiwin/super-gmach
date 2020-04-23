export class FundClass {
    static cnt:number;
    name:string;
    id:number;
    Required_month:number;
    Required_vip:boolean;
    num_friends:number;
    constructor(name:string,Required_month?:number,Required_vip?:boolean)
    {
        FundClass.cnt=FundClass.cnt++;
          this.name=name;
          this.id=1;
          this.Required_month=Required_month?Required_month:0;
          this.Required_vip=Required_vip?Required_vip:false;      
    }
    
}
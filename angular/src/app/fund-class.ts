export class FundClass {
    static cnt:number;
    name:string;
    id:number;
    constructor(name:string)
    {
        FundClass.cnt=FundClass.cnt++;
          this.name=name;
          this.id=1;
         
    }
    
}
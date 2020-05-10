export enum StatusFriendE{
    Married,
    unmarried
}

import { Data } from '@angular/router';
import { EmailValidator } from '@angular/forms';


export class Friend {
    funds:{};
    ID:number;
    First_name:string;
    Last_name:string;
    Status:StatusFriendE;
    Communication:{
    City:string,
    Street:string,
    num_street:number
    Phon1:number,
    Phon2:number,
    Email:EmailValidator}
    Join_date:Data;
    Vip:boolean;
    Payment_details:{
      credit:boolean;
      card_number:number;
      CVV:number;
      validity:Data;
      collection_dateCard:Data;
    };   
    bank_details:{
        Accoun_number:number;
        Branch:string;
        Bank:string;
        collection_date:Data;
    }
    ceiling:number;
    Direct_debit:boolean;
    constructor( ceiling:number,ID:number,fname:string,lname:string,status:StatusFriendE,city:string,Street:string,Phon1:number,num_street:number,Vip:boolean, card_number:number,  CVV:number,validity:Data,credit:boolean, Bank:string, Accoun_number:number,Branch:string, Phon2?:number,Email?:EmailValidator,collection_dateCard?:Data,collection_date?:Date, Direct_debit?:boolean  )
    {
     this.Direct_debit=Direct_debit?Direct_debit:false;this.ceiling=ceiling;   
     this.ID=ID; this.First_name=fname;this.Vip=Vip
     this.Last_name=lname;this.Status=status;
     this.Communication.City=city;this.Communication.Street=Street;
     this.Communication.Phon1=Phon1;this.Communication.Phon2=Phon2?Phon2:null; this.Communication.num_street=num_street;
     this.Communication.Email=Email?Email:null;
     this.Payment_details.CVV=CVV;this.Payment_details.card_number=card_number;this.Payment_details.validity=validity;this.Payment_details.credit=credit;
     this.bank_details.Accoun_number=Accoun_number;
     this.bank_details.Bank=Bank;
     this.bank_details.Branch=Branch;
     this.bank_details.collection_date=collection_date;this.Payment_details.collection_dateCard=collection_dateCard;
     this.Join_date=new Date();
    }
}

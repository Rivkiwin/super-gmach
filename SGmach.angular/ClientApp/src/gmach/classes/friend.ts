export enum StatusFriendE{
    Married,
    Unmarried
}

import { Data } from '@angular/router';
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
    funds:number[]=[];
    
    constructor()
    {}

    // constructor( ceiling:number,ID:number,fname:string,lname:string,status:StatusFriendE,city:string,Street:string,Phon1:string,num_street:number,Vip:boolean, card_number:number,  CVV:number,validity:Data,credit:boolean, Bank:string, Accoun_number:number,Branch:string, Phon2?:string,Email?:string,collection_dateCard?:Data,collection_date?:Date, Direct_debit?:boolean  )
    // {
    //  this.Direct_debit=Direct_debit?Direct_debit:false;this.ceiling=ceiling;   
    //  this.Id=ID; this.First_name=fname;this.Vip=Vip
    // //  this.setCommunication(lname, status, city, Street, Phon1, Phon2, num_street, Email);
    // //  this.Payment_details.CVV=CVV;this.Payment_details.card_number=card_number;this.Payment_details.validity=validity.toString();this.Payment_details.credit=credit;
    // //  this.set_Bank_details(Accoun_number, Bank, Branch, collection_date, collection_dateCard);
    //  this.Join_date=new Date();

    // }

    // private set_Bank_details(Accoun_number: number, Bank: string, Branch: string, collection_date: Date, collection_dateCard: Data) {
    //     this.bank_details.Accoun_number = Accoun_number;
    //     this.bank_details.Bank = Bank;
    //     this.bank_details.Branch = Branch;
    //     this.bank_details.collection_date = collection_date.toString();
    //     this.Payment_details.collection_dateCard = collection_dateCard.toString();
    // }

    // private setCommunication(lname: string, status: StatusFriendE, city: string, Street: string, Phon1: string, Phon2: string, num_street: number, Email: string) {
    //     this.Last_name = lname;
    //     this.Status = status;
    //     this.Communication.City = city;
    //     this.Communication.Street = Street;
    //     this.Communication.Phon1 = Phon1;
    //     this.Communication.Phon2 = Phon2 ? Phon2 : null;
    //     this.Communication.num_street = num_street;
    //     this.Communication.Email = Email ? Email : null;
    // }
}

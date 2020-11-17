import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";

import { from } from "rxjs";

import { FundClass, StatusE } from "src/gmach/classes/fund-class";

import { FundServiceService } from "src/gmach/services/fund-service.service";

import { FriendsService } from "src/gmach/services/friends.service";

import { FormControl, FormGroup } from "@angular/forms";

import { validation } from "src/ts/Validation";

import { DatePipe } from "@angular/common";

@Component({

  selector: "app-fund-details",

  templateUrl: "./fund-details.component.html",

  styleUrls: ["./fund-details.component.scss"],

  providers:[DatePipe]

})

export class FundDetailsComponent implements OnInit {

  [x: string]: any;

  statusE = StatusE;

  key = Object.values;

  fund: FundClass;

  numFriends = 10;

  Details: FormGroup;

  message = {

    title: "",

    body: "",

    href: "",

    buttonText: "שמור ",

    click: "this.save()",

  };

  Fund: any;

 

  constructor(

    private FundServiceService: FundServiceService,

    private activateRoute: ActivatedRoute,

    private DatePipe: DatePipe

  ) {}

 

  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe((res) =>

      this. FundServiceService.GetById(res.get("id")).subscribe((f) => {

        (this.fund = <FundClass>f), console.log(f);

        debugger;

        this.Details = new FormGroup({

          Required_months: new FormControl(this.fund.required_months),

          Required_VIP: new FormControl(this.fund.required_vip),

        });

      })

    );

  }

 

  //me:)

  Save(event) {

    debugger;

    if (event.target.id != "Add-B") {

      return;

    }

    debugger;

    validation();{

      this.fund.Required_months= this.Details.get("Required_months").value;

      this.fund.required_vip= this.Details.get("Required_VIP").value;

    //  this.fund.remark= this.Details.get("remark").value;

 

      this.FundServiceService.Save(this.fund).subscribe({

      next: (data) => {

        debugger;

        this.message.title = "השינוי נשמר בהצלחה";

        this.message.body =

          "הפרטים נשמרו בהצלחה לחזרה לרשימת ההלווואות לחץ אישור";

        this.message.href = "fund/FundList";

      },

      error: (error) => {

        this.message.title = "יש תקלה בשמירה";

        this.message.body = "הפרטים לא נשמרו אנא פנה לתמיכה";

        this.message.href = "fund/FundList";

      },

      

    });

 

  }

}

}
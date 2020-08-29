import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'popper.js';
import 'bootstrap';
import {AuthorizeService} from "../../api-authorization/authorize.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'gmach-home',
  templateUrl: './gmach.home.component.html',
  styleUrls: ['./gmach.home.component.scss']

})
export class GmachHomeComponent implements OnInit{
  title = 'Super Gmach';
  gmachName: Observable<string>;

  constructor(private router:Router ,private authorizeService: AuthorizeService){}



  ngOnInit() {
    this.gmachName = this.authorizeService.getUser().pipe(map(u => u && u.gmachName));
  }

}

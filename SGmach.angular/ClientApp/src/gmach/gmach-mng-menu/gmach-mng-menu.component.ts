import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {AuthorizeService} from "src/api-authorization/authorize.service";

@Component({
  selector: 'gmach-mng-menu',
  templateUrl: './gmach-mng-menu.component.html',
  styleUrls: ['./gmach-mng-menu.component.css']
})
export class GmachMngMenuComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  public gmachName: Observable<string>;
  href;
  constructor(private authorizeService: AuthorizeService,private router:Router) { }


  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.gmachName = this.authorizeService.getUserGmach();
    this.href = this.router.url;
    
    console.log(this.router.url);
  }
}

import { Component, OnInit } from '@angular/core';
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
  public userName: Observable<string>;

  constructor(private authorizeService: AuthorizeService) { }


  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
  }
}

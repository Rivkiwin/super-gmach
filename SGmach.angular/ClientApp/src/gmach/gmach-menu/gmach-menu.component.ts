import { Component, OnInit } from '@angular/core';
 import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {AuthorizeService} from "src/api-authorization/authorize.service";

@Component({
  selector: 'gmach-menu',
  templateUrl: './gmach-menu.component.html',
  styleUrls: ['./gmach-menu.component.css']
})
export class GmachMenuComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  public gmachName: Observable<string>;

  constructor(private authorizeService: AuthorizeService) { }


  ngOnInit() {
     this.gmachName = this.authorizeService.getUserGmach().pipe(map(u => u && u));
  }
}

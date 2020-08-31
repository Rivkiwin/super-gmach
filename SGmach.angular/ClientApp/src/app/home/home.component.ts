import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {AuthorizeService} from "../../api-authorization/authorize.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public isAuthenticated: Observable<boolean>;
  public gmachName: Observable<string>;

  constructor(private authorizeService: AuthorizeService) { }


  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.gmachName = this.authorizeService.getUserGmach();
  }

}

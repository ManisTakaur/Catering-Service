import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()

export class AdminAuthenticationGuardService implements CanActivate{

  constructor( private auth: AuthenticationService, private userService: UserService) { }

  canActivate(): Observable<boolean>{
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin);

  }

}

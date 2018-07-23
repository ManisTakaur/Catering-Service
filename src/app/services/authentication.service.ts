import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import { AppUser } from '../models/app-user';
//import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user$: Observable<firebase.User>; //user$ type observable variable 

  constructor( public userService: UserService,  public afAuth: AngularFireAuth, private route: ActivatedRoute ) { 
    this.user$=afAuth.authState;
  }

  login() {
    let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl); 
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        if (user) 
         return this.userService.get(user.uid);
        else 
         return Observable.of(null);
      
      });
  }

}

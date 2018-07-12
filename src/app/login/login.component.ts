import { Component} from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 error :any;
 constructor(public auth: AuthenticationService) {
}

  login() {
    this.auth.login();
  }


}

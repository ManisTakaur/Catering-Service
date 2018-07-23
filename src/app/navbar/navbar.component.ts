import { Component } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  appUser: AppUser;

  constructor(private auth: AuthenticationService ) { 
    auth.appUser$.subscribe(appUser => this.appUser= appUser );
  }

  logout() {
    this.auth.logout();
  }

}

import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AppUser } from '../models/app-user';

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

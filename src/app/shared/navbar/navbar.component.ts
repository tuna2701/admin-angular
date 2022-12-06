import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/lib/authentication.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // public user: User;
  public Username: any;
  constructor(private authenticationService: AuthenticationService) { 
    this.Username = JSON.parse(localStorage.getItem('user')).fullName;
  }

  ngOnInit(): void {

  }
  
  logout() {
    this.authenticationService.logout();
  }  
}

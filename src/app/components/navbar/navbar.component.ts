import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private loginService: LoginService, private router: Router) {}

  isLoggedIn$ = this.loginService.isLoggedIn();

  logout() {
    this.loginService.logout();
    this.router.navigate(['login'])
  }
}

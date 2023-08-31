import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blood-bank-app';

  constructor(private loginService: LoginService) {}

  isLogin$ = this.loginService.isLoggedIn();
}
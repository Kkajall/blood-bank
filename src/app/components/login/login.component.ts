import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage = '';
  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) { }

  onSubmit(formData: NgForm) {
    this.http.get(`http://localhost:8080/user/authenticate/${formData.value['email']}/${formData.value['password']}`,
      { responseType: 'text' }
    )
      .subscribe(
        (response) => {
          console.log(response);
          localStorage.setItem('username', formData.value['email']);
          this.http.get<User>(`http://localhost:8080/user/getUser/${formData.value['email']}`).subscribe(
            (data) => {
              console.log(data);
              localStorage.setItem('userId', data.userId);
              localStorage.setItem('role', data.role);
              this.loginService.login();
              if (localStorage.getItem('role') === 'user') {
                this.router.navigate(['/home'])
              }
              else {
                this.router.navigate(['/adminuser'])
              }
            }
          )



        },
        (error) => {
          console.log(error);
          this.errorMessage = 'invalid credentials';
        }
      )
  }
}

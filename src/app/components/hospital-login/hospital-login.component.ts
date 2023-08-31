import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Hospital } from '../model/hospital.model';

@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.css']
})
export class HospitalLoginComponent {


  errorMessage = '';
  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) { }


  onSubmit(formData: NgForm) {
    this.http.get(`http://localhost:8080/hospital/authenticate/${formData.value['email']}/${formData.value['password']}`,
      { responseType: 'text' }
    )
      .subscribe(
        (response) => {
          console.log(response);
          localStorage.setItem('username', formData.value['email']);
          this.http.get<Hospital>(`http://localhost:8080/hospital/getByUsername/${formData.value['email']}`).subscribe(
            (data) => {
              console.log(data);
              localStorage.setItem('userId', data.hospitalId);
              localStorage.setItem('role', 'Hospital');
              this.loginService.login();
              // this.router.navigate(['/adminuser'])
              this.router.navigate(['/hospitalhome'])
              // if (localStorage.getItem('role') === 'hospital') {
              //   this.router.navigate(['/hospitalhome'])
               

              // }
              // else {
              //   // this.router.navigate(['/adminuser'])
              // }
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

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'], 
})
export class SignupComponent {

  constructor(private http: HttpClient) {}

  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      role: new FormControl(null, [Validators.required]),
      bloodgroup: new FormControl(null, [Validators.required]),
      address: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl(null, [Validators.required])
    })
  }

  onSubmit(){
    // console.log(form.value);
    console.log(this.signupForm);
    this.http.post('http://localhost:8080/user/adduser', this.signupForm.value,
     {responseType: 'text'}
    ).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}

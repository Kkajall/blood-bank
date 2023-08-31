import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-blood',
  templateUrl: './add-blood.component.html',
  styleUrls: ['./add-blood.component.css']
})
export class AddBloodComponent {
  constructor(private http: HttpClient) {}

  errorMessage = ''
  successMessage = '';
  onSubmit(formData: NgForm){
    console.log(formData.value)
    const patchData = {
      bloodgroup: formData.value.bgroup,
      quantity: formData.value.quantity,
      expirydate: formData.value.edate
    };

    let url = `http://localhost:8080/hospital/addBloodDetails/${formData.value.hospitalname}`
    this.http.patch(url, JSON.parse(JSON.stringify(patchData)), {responseType: 'text'}).subscribe(
      data => {
        console.log(data);
        this.successMessage = data;
        setTimeout(() => {
          this.successMessage = ''
        }, 3000) 
      },
      error => console.log(error)
    );
    
  }
  
  
}

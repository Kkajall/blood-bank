import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-blood',
  templateUrl: './update-blood.component.html',
  styleUrls: ['./update-blood.component.css']
})
export class UpdateBloodComponent {

  constructor(private http: HttpClient) {}

  errorMessage = ''

  onSubmit(formData: NgForm){
    console.log(formData.value.bgroup)
    this.http.patch(`http://localhost:8080/hospital/updateBloodDetailsQuantity/${formData.value.hospitalname}/${formData.value.bgroup}/${formData.value.quantity}`, null, {responseType:'text'})
    .subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}

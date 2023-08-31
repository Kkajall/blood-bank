import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError, EMPTY, Subject, tap } from 'rxjs';
import { HospitalBlood } from '../model/hospital-blood.model';

@Component({
  selector: 'app-get-blood',
  templateUrl: './get-blood.component.html',
  styleUrls: ['./get-blood.component.css']
})
export class GetBloodComponent {
  errorMessage = ''
  hospitalBloodDetails: HospitalBlood[];

  constructor(private http: HttpClient, private changeDetectorRef: ChangeDetectorRef) {}

  

  onSubmit(form: NgForm) {
    console.log(form.value)
    
    this.http.get<HospitalBlood[]>(`http://localhost:8080/hospital/getByBloodGroup/${form.value['bloodgroup']}/${form.value['location']}`).pipe(
      tap((data) => console.log(data)),
      catchError((error) => {
        console.log(error);
        return EMPTY;
      })
    )
    .subscribe(
      (data) => {
        this.hospitalBloodDetails = data;
        console.log(this.hospitalBloodDetails)
      },
      (error) => console.log(error)
    )
  }

}

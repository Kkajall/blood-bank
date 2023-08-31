import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tap } from 'rxjs';
import { BdCamp } from '../model/bdcamp.model';
// import { ToastService } from '../shared/toast.service';

@Component({
  selector: 'app-donate-blood',
  templateUrl: './donate-blood.component.html',
  styleUrls: ['./donate-blood.component.css'],
})
export class DonateBloodComponent {

  constructor(private http: HttpClient) {}

  errorMessage = ''
  successMessage = ''
  bookedCampIds=[]
  bdcamps: BdCamp[];
  // onSubmit(formData: NgForm){
  //   console.log(formData.value)
  // }
  onSubmit(formData: NgForm){
    console.log(formData.value)
    this.http.get<BdCamp[]>(`http://localhost:8080/bdcamp/findByLocation/${formData.value['location']}`)
    .pipe(
      tap((data) => console.log(data))
    ).subscribe(
      (data) => {
        console.log(data);
        this.bdcamps = data;
      },
      (error) => console.log(error)
    )
  }

  onBookAppointment(bdcamp: BdCamp){
    let userId=localStorage.getItem('userId')
    this.http.patch('http://localhost:8080/user/bookedappointments/'+userId+'/'+bdcamp.bdId,null,
      {responseType: 'text'}
    )
    .subscribe(
      (data)=>{
        console.log(data);
        // this.toastService.show('Registerd to Blood Donation Camp', { classname: 'bg-success text-light', delay: 3000 });

      },
      (error)=>{
        console.log(error);
        // this.toastService.show('Some error occured', { classname: 'bg-danger text-light', delay: 3000 });
      }
      )


    




  }
  



}


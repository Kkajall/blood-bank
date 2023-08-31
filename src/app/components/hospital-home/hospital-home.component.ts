import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hospital } from '../model/hospital.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-hospital-home',
  templateUrl: './hospital-home.component.html',
  styleUrls: ['./hospital-home.component.css']
})
export class HospitalHomeComponent implements OnInit {
  hospital: Hospital;
  userName = '';
  userList:User[];
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.userName = localStorage.getItem('username');
    console.log(this.userName);
    this.http.get<Hospital>(`http://localhost:8080/hospital/getByUsername/${this.userName}`).subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('userId', data.hospitalId);
        this.hospital = data;
        console.log(this.hospital);

      }
    )
  }



  viewDonors(id: number) {

    this.http.get<User[]>('http://localhost:8080/bdcamp/getAllUsers/' + id)
      .subscribe(
        (data) => {
          console.log(data)
          this.userList=data

        },
        (error) => console.log(error)
      );







  }

}



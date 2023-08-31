import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit{
  user : User;
  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    this.http.get<User>(`http://localhost:8080/user/getAllUsers`).subscribe(
    (data) => {
      console.log(data);
      localStorage.setItem('userId', data.userId);
      this.user = data;
    }
  )
  }


}

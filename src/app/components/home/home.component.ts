import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user : User;
  userName = '';
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
   this.userName = localStorage.getItem('username');
   console.log(this.userName);
   this.http.get<User>(`http://localhost:8080/user/getUser/${this.userName}`).subscribe(
    (data) => {
      console.log(data);
      localStorage.setItem('userId', data.userId);
      this.user = data;
    }
  )
  }

}

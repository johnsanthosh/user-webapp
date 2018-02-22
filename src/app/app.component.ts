import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users: { firstName: string, lastName: string, age: string, phoneNumber: string };

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.fetchUserList();
  }

  fetchUserList() {
    this.userService.getUsers().subscribe((data => {
      this.users = data;
    }));
  }
}

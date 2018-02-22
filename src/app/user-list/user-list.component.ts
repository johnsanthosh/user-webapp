import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: { firstName: string, lastName: string, age: string, phoneNumber: string };
  @Output() userListUpdated = new EventEmitter<{ name: string }>();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe((response => {
      console.log(response);
      this.userListUpdated.emit({name: 'User ' + id + ' Deleted'});
    }));
  }

}

import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('f') submittedForm: NgForm;
  @Output() userListUpdated = new EventEmitter<{ name: string }>();
  user: { firstName: string, lastName: string, age: string, phoneNumber: string };

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user = {firstName: '', lastName: '', age: '', phoneNumber: ''};
  }

  onSubmit() {
    this.user.firstName = this.submittedForm.value.firstName;
    this.user.lastName = this.submittedForm.value.lastName;
    this.user.age = this.submittedForm.value.age;
    this.user.phoneNumber = this.submittedForm.value.phoneNumber;
    this.userService.addUser(this.user).subscribe((response => {
      this.userListUpdated.emit({name: 'New user added'});
    }));
    this.submittedForm.resetForm();
  }

}

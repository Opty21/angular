import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(public userService:UserService){}
  users: string[];

  ngOnInit(): void {
    this.users = this.userService.getUsers(false);
  }
}

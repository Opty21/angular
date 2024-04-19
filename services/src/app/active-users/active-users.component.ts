import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  constructor(public userService:UserService){}
  users: string[];

  ngOnInit(): void {
    this.users = this.userService.getUsers(true);
  }
}

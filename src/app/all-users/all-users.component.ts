import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  

  constructor(private userService: UserService, private router: Router) { }

  users:any;
  ngOnInit(): void {

    this.userService.getAllUsers().subscribe(response => {
      this.users=response;
  })
}

}

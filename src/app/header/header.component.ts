import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  flag= false;
  constructor(private userService:UserService) {

   }

  ngOnInit(): void {
  this.userService.setFlag(false);
    this.userService.getFlag().subscribe(flag => {

      this.flag=flag;
    });
  }

}

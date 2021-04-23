import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-tweets',
  templateUrl: './my-tweets.component.html',
  styleUrls: ['./my-tweets.component.css']
})
export class MyTweetsComponent implements OnInit {

 
  constructor(private userService: UserService, private router: Router) { }
  tweet:any;
  ngOnInit(): void {
    this.userService.getAllTweets().subscribe(response => {
      this.tweet=response;
  })

  }

  delete(index:any)
  {
    this.userService.deletTweet(index).subscribe(response =>{
      
    },(error)=>{
      this.ngOnInit();
    }
      );
  }

}


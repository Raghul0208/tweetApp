import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {
  //likeArray: any;
  likeArray: Array<boolean> = [];
  replyDesc: String;
  reply: Array<boolean>=[];

  constructor(private userService: UserService, private router: Router) {
    this.replyDesc='';
   }
  tweets: any;
  posttweetsform: any;


  ngOnInit(): void {
    // this.likeArray=false;
    
    this.userService.gettweets().subscribe(response => {

      this.tweets = response;
      this.tweets.forEach((tweet: any) => {
        var date1 = new Date(tweet.date).getTime();
        var date2 = new Date().getTime();
        var msec = date2 - date1;
        var mins = Math.floor(msec / 60000);
        var hrs = Math.floor(mins / 60);
        var days = Math.floor(hrs / 24);
        var yrs = Math.floor(days / 365);

        if(mins<60)
        {
          tweet.date=mins+' mins ago';
        }
        else if(mins>60 && hrs<=24)
        {
            tweet.date=hrs+' hours ago';
        }
        else{
          tweet.date=days+' days ago';
        }
        


        this.likeArray.push(false);
        this.reply.push(false);
        this.replyDesc='';
        
      });
    })

    this.posttweetsform = new FormGroup({
      'emailId': new FormControl(sessionStorage.getItem('email'),),
      'tweetDesc': new FormControl('',)
    })


  }

  posttweet(posttweetsform: any) {
    console.log(posttweetsform);

    this.userService.addtweet(posttweetsform.value).subscribe((response: any) => {
      console.log(response)

    }, (error) => {
      console.log(error);
      this.ngOnInit();
    })
  }

  like(index: any) {
    this.likeArray[index] = true;
  }

  unlike(index: any) {
    this.likeArray[index] = false;
  }

  postcomment(index:any,i:any){
    const request= ({
      email:sessionStorage.getItem('email'),
      tweetId:index,
      replyDesc:this.replyDesc
    });
    this.userService.postcomments(request).subscribe((response: any)=>{
      console.log(response);
    }, (error) => {
      console.log(error);
      this.ngOnInit();
      this.reply[i]=false;
    })
    console.log(index);
  }


}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user.service';
import { AuthenticationService } from './authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm:any;
  errorMessage:any;
  constructor(private userService:UserService,private router:Router) { 
    
    
  }
  

  ngOnInit() {
   
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
      })

  }

  loginsubmit(loginForm:any)
  {
    console.log(loginForm);
    this.errorMessage=null;
    this.userService.loginuser(loginForm.value).subscribe((response:any) =>{
      console.log(response)
      if(response.errorMessage!==null)
      {
        this.errorMessage=response.errorMessage;
      }
      else{
        this.userService.setFlag(true);
        sessionStorage.setItem('email', response.email);
        this.router.navigate(['/homepage'])
      }
    },(error) => {
      console.log(error);
       })
  }
  

}

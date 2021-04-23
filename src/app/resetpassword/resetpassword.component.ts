import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  resetpasswordform:any;
  errorMessage:any;
  successMessage:any;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit()
  {
    this.resetpasswordform = new FormGroup({
      'oldpassword': new FormControl('', [Validators.required]),
      'newpassword': new FormControl('', [Validators.required]),
      'emailId': new FormControl(sessionStorage.getItem('email'),)
      
      })
  }

  resetpassword(resetpasswordform:any)
   {
    console.log(resetpasswordform);
    
    this.userService.resetpass(resetpasswordform.value).subscribe((response:any) =>{  
      console.log(response);

      if(response.errorMessage!==null)
      {
        this.errorMessage=response.errorMessage;
      }
      else{
        this.router.navigate(['/login'])
      }
    },(error) => {
      console.log(error);
       })
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { LoginComponent } from './login/login.component';
import { MyTweetsComponent } from './my-tweets/my-tweets.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SignupComponent } from './signup/signup.component';
import { TwitterComponent } from './twitter/twitter.component';

const routes: Routes = [{path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},{path:"",component:LoginComponent},{path:"homepage",component:TwitterComponent},{path:"reset",component:ResetpasswordComponent},{path:"allUsers",component:AllUsersComponent},{path:"myTweet",component:MyTweetsComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

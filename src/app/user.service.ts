import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public flag = new Subject<any>();

  public setFlag(message: any) {
  this.flag.next(message);
  }  
   public getFlag(): Observable<any> {
  return this.flag.asObservable();
  }
 
  constructor(private httpClient: HttpClient) {
   
  }

  addUser(user:any) {
    console.log(JSON.stringify(user));
    return this.httpClient.post("http://localhost:8090/api/v1.0/tweets/register", user);
  }

  

  loginuser(user:any){
    console.log(JSON.stringify(user));
    return this.httpClient.post("http://localhost:8090/api/v1.0/tweets/login", user);
  }

  gettweets(){
    return this.httpClient.get("http://localhost:8090/api/v1.0/tweets/gettweets");
  }

  addtweet(user:any){
    return this.httpClient.post("http://localhost:8090/api/v1.0/tweets/posttweet",user);
  }

  resetpass(user:any)
  {
    return this.httpClient.put("http://localhost:8090/api/v1.0/tweets/reset",user);
  }

  postcomments(user:any)
  {
    return this.httpClient.post("http://localhost:8090/api/v1.0/tweets/reply",user);
  }

  getAllUsers()
  {
    return this.httpClient.get("http://localhost:8090/api/v1.0/tweets/getallUsers");
  }

  getAllTweets()
  {
    return this.httpClient.get("http://localhost:8090/api/v1.0/tweets/UsersTweet/?email="+sessionStorage.getItem('email'));
  }

  deletTweet(index:any)
  {
    return this.httpClient.delete("http://localhost:8090/api/v1.0/tweets/delete/?tweetId="+index);
  }

}

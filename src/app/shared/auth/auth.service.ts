import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { TokenStorage } from './token-storage.service';
import { UserService } from '../../services';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  token: string;
  apiUrl: string = environment.api.url;
  constructor(private tokenStorage: TokenStorage,private http: HttpClient, private userService: UserService) {}

  signupUser(email: string, password: string) {
    //your code for signing up the new user
  }


  login(username: string, password: string): Observable<User> {
    // return this.http.post<any>(this.apiUrl + '/users/authenticate', { username: username, password: password })
    //     .pipe(map(user => {
    //         // login successful if there's a jwt token in the response
    //         if (user && user.token) {
    //             // store user details and jwt token in local storage to keep user logged in between page refreshes
    //             //localStorage.setItem('currentUser', JSON.stringify(user));
    //             sessionStorage.setItem('currentUser', JSON.stringify(user));
    //         }

    //         return user;
    //     }));
    if(username=="test2" && password=="test")
    {
      var user1 = new User();
      user1.id = 1;
      user1.username = "test";
      user1.role = "sample";
      user1.token = "token";
      sessionStorage.setItem('currentUser', JSON.stringify(user1));
      return Observable.of<User>(user1);
    }
    return null;
}

  signinUser(email: string, password: string) {
    
    if(email=="test" && password=="test"){
      var user1 = new User();
      user1.id = 1;
      user1.username = "test";
      user1.role = "assignee";
      this.tokenStorage.setAccessToken(JSON.stringify(user1));      
    }
    else if(email=="hr" && password=="hr"){
      var user2 = new User();
      user2.id = 2;
      user2.username = "hr";
      user2.role = "hr";
      this.tokenStorage.setAccessToken(JSON.stringify(user2));
    }
  }

  logout() {   
    this.tokenStorage.clear();
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    this.token = null;
  }

  getToken() {    
    return this.token;
  }

  isAuthenticated() {
    //let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(currentUser && currentUser.token){
        this.token = currentUser.token;            
    }
    //this.token = this.tokenStorage.getAccessToken();
    if(this.token!=null){
      return true;
    }
     return false;
  }
}

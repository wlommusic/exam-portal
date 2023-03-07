import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { APIURL } from './helper';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  // generate token
  public generateToken(loginData: any) {
    return this.http.post(`${APIURL}/get-token`, loginData);
  }
  // set token
  public setToken(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  //get current user
  public getCurrentUser() {
    return this.http.get(`${APIURL}/current-user`);
  }

  //
  public isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token == undefined || token == null || token == '') {
      return false;
    } else {
      return true;
    }
  }
  //
  public logout() {
    localStorage.removeItem('token');
    return true;
  }
  //
  public getToken() {
    return localStorage.getItem('token');
  }
  //
  public setUser(user: any) {
    return localStorage.setItem('user', JSON.stringify(user));
  }
  //
  public getUser() {
    let user = localStorage.getItem('user');
    if (user != null) {
      return JSON.parse(user);
    } else {
      this.logout();
      return null;
    }
  }
  //
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}

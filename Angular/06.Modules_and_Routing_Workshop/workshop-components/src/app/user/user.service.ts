import { Injectable } from '@angular/core';
import { User, UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserForAuth | undefined;
  USER_KEY = '[user]';



  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    try {
      const localStorageUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(localStorageUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login() {
    this.user = {
      id: '5fa64ca72183ce1728ff3726',
      username: 'petko',
      email: 'petkopetkov@abv.bg',
      tel: '123-123-123-123',
      password: '123123',
      rePassword: '123123',
    };

    this.http
      .post<User>(`${apiUrl}/login`, {
        email: this.user.email,
        password: this.user.password,
      })
      .subscribe();

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  register() {
    this.user = {
      id: '5fa64ca72183ce1728ff3726',
      username: 'petko',
      email: 'petkopetkov@abv.bg',
      tel: '123-123-123-123',
      password: '123123',
      rePassword: '123123',
    };

    this.http
      .post<User>(`${apiUrl}/register`, {
        username: this.user.username,
        email: this.user.email,
        tel: this.user.tel,
        password: this.user.password,
        rePassword: this.user.rePassword,
      })
      .subscribe((user) => {
        console.log(user);
        
      });
  }

  logout() {
    this.user = undefined;

    localStorage.removeItem(this.USER_KEY);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }


  getUsers () {
      return this.http.get<User[]>(this.apiUrl);
  };

  getSingleUser(id: string) {
    return this.http.get<User>(`${this.apiUrl}/${id}`)
  }
}

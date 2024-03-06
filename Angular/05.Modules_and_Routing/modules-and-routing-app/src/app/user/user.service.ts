import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
API: string = 'https://jsonplaceholder.typicode.com/users';
  constructor() { }
}

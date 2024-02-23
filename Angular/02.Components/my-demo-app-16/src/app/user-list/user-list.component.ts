import { Component } from '@angular/core';

// type User = {
//     name: string;
//     age: number;
//     status: string;
// }

interface User {
    name: string;
    age: number;
    status: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    users = [
        {name: 'Pesho', age: 20, status: 'red'},
        {name: 'Ivan', age: 33, status: 'blue'},
        {name: 'Petya', age: 34, status: 'orange'},
        {name: 'Maya', age: 45, status: 'green'},
        {name: 'Nena', age: 66, status: 'brown'}
    ] as User[];

    
}



import { Component } from '@angular/core';

type User = {
    name: string;
    age: number;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    users = [
        {name: 'Pesho', age: 20},
        {name: 'Ivan', age: 33},
        {name: 'Petya', age: 34},
        {name: 'Maya', age: 45},
        {name: 'Nena', age: 66}
    ] as User[];

    
}



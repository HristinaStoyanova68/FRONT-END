import { Component, OnInit } from '@angular/core';
// import { User } from './types/user';
import { UserService } from './user.service';
import { JsonPlaceholderUser, User } from './types/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
   
})
export class AppComponent implements OnInit{
    title = 'my-app-playground';

    //when use private property:
    appUsers: JsonPlaceholderUser[] = [];

    isLoading = true;

    constructor(private userService: UserService) {
        this.appUsers = this.userService.users;
    }

    ngOnInit(): void {
        this.userService.getUsers().then((users) => {
            console.log('users: ', users);
            this.appUsers = users;
            setTimeout(() => {
                this.isLoading = false;
            }, 3000);
        });

    }

    setUsers(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
        //Add validations for inputs ???
        //Transformation of the input
        
        this.userService.addUser(inputName, inputAge);
        //Add additional logic functionality
    }

    //when use public property:
    // constructor(public userService: UserService) {}

    // setUsers(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    //     this.userService.addUser(inputName, inputAge);
    //     //Add additional logic functionality
    // }
}

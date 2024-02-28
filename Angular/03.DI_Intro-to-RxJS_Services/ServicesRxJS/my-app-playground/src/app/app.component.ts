import { Component } from '@angular/core';
// import { User } from './types/user';
import { UserService } from './user.service';
import { User } from './types/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
   
})
export class AppComponent {
    title = 'my-app-playground';

    //when use private property:
    appUsers: User[] = [];

    constructor(private userService: UserService) {
        this.appUsers = this.userService.users;
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

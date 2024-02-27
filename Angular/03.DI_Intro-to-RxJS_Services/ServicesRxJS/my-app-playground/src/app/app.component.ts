import { Component } from '@angular/core';
import { User } from './types/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
   
})
export class AppComponent {
    title = 'my-app-playground';
    users: User[] = [
        { name: 'Pesho', age: 20 },
        { name: 'Ivan', age: 22 },
        { name: 'Mimi', age: 33 },
        { name: 'Raya', age: 44 }
    ];

    addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {

        const user: User = {
            name: inputName.value,
            age: Number(inputAge.value),
        }

        // debugger;
        this.users.push(user);//change can not see in view
        // this.users = [...this.users, user];//change can see in view
        // console.log(this.users);

        inputName.value = '';
        inputAge.value = '';
    }
    //when we manually change detection
    // constructor(private cd: ChangeDetectorRef) {
    //     setTimeout(() => {
    //         this.title = 'Changed from Detector!';
    //         this.cd.detectChanges();
    //     }, 3000);
    // }
}

import { Injectable, OnDestroy } from '@angular/core';
import { User } from './types/user';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()

export class UserService implements OnDestroy{

  users: User[] = [
    { name: 'Pesho', age: 20 },
    { name: 'Ivan', age: 22 },
    { name: 'Mimi', age: 33 },
    { name: 'Raya', age: 44 }
];

ngOnDestroy(): void {
    //clear terminal, detach from events
}

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

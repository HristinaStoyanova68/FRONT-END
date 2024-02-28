import { Injectable, OnDestroy } from '@angular/core';
import { JsonPlaceholderUser, User } from './types/user';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()

export class UserService implements OnDestroy{
    URL = 'https://jsonplaceholder.typicode.com/users';

  users: JsonPlaceholderUser[] = [];

  constructor (private http: HttpClient) {

  }

ngOnDestroy(): void {
    //clear terminal, detach from events
}

getUsers () {
    // return fetch(this.URL).then(res => res.json());
    return this.http.get<JsonPlaceholderUser[]>(this.URL);
}

addUser(inputName: HTMLInputElement, inputEmail: HTMLInputElement) {

    const user= {
        name: inputName.value,
        email: inputEmail.value,
    } as JsonPlaceholderUser

    // debugger;
    // this.users.push(user);//change can not see in view
    // this.users = [...this.users, user];//change can see in view
    // console.log(this.users);

    inputName.value = '';
    inputEmail.value = '';
}
//when we manually change detection
// constructor(private cd: ChangeDetectorRef) {
//     setTimeout(() => {
//         this.title = 'Changed from Detector!';
//         this.cd.detectChanges();
//     }, 3000);
// }
}

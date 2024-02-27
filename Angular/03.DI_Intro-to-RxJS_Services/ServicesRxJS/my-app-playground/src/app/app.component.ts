import { ChangeDetectorRef, Component } from '@angular/core';
import { User } from './types/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'my-app-playground';
    users: User[] = [
        { name: 'Pesho', age: 20 },
        { name: 'Ivan', age: 22 },
        { name: 'Mimi', age: 33 },
        { name: 'Raya', age: 44 }
    ];

    constructor() {
        setTimeout(() => {
            this.title = 'Changed from Angular!';
        }, 3000);
    }


    //when we manually change detection
    // constructor(private cd: ChangeDetectorRef) {
    //     setTimeout(() => {
    //         this.title = 'Changed from Detector!';
    //         this.cd.detectChanges();
    //     }, 3000);
    // }
}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../types/user';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnChanges {
    @Input('users') userListData: User[] = [];

    constructor(private cd: ChangeDetectorRef) {}

    ngOnChanges(changes: SimpleChanges): void {
        console.log({ changes });
    }

    refresh() {
        this.cd.detectChanges();
    }

    // constructor(private cd: ChangeDetectorRef) {
        // setTimeout(() => {
        //     this.title = 'Changed from Angular!';
        // }, 3000);

        // setInterval(() => {
        //     this.cd.detectChanges();
        //     console.log('Changes detected!');

        // }, 3000);
// debugger;
        // if (this.userListData.length % 9 === 0) {
        //     this.cd.detectChanges();
        //     console.log('Changes detected!');
        // };
    // }
}

import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'my-app-playground';

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

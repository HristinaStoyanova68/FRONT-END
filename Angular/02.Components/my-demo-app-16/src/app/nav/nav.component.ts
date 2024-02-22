import { Component } from "@angular/core";

@Component({
    selector: 'app-nav',
    template: `
        <div>
            <div id="nav-wrapper">Hello Navigation</div>
            <div>{{ titleVar }}</div>
        </div>
    `,
    styles: [
        `
            #nav-wrapper: {
                background-color: red;
            }
        `,
    ]
})

export class NavComponent {
    titleVar = 'zdr Navigation';
};


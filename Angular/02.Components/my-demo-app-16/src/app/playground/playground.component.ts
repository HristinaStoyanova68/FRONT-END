import { Component } from '@angular/core';

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {

    greenBackground = 'background-green';
    isToggle = false;

    imgUrl = 'https://images.unsplash.com/photo-1708458927308-f798522882a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D';


    handleClick() {
        console.log('clicked');

        this.isToggle = !this.isToggle;
        console.log(this.isToggle);
    }

    //first way : getting just value
    // handleInput(usernameValue: string) {
    //     console.log('username: ', usernameValue);
        
    // }

    // second way for getting all :htmlElement and its value
    handleInput(usernameInput: HTMLInputElement) {
        console.log('username: ', usernameInput, usernameInput.value);
        
    }
}

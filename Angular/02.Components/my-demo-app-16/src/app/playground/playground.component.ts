import { Component, OnDestroy, OnInit } from '@angular/core';


const IMG_URL = 'https://images.unsplash.com/photo-1708458927308-f798522882a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D';

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, OnDestroy{

    greenBackground = 'background-green';
    isToggle = false;

    imgUrl = IMG_URL;

    ngOnInit() {
        // debugger;
        console.log('Component Created!');
    }

    ngAfterViewInit() {
        // debugger;
        console.log('After Init!');
    }

    ngOnDestroy() {
        //clean up of stuff
        console.log('On Destroy!');
    }

    ngDoCheck() {
        if (this.isToggle === true) {
            console.log({isToggle: this.isToggle});
            
        }
    }

    handleClick() {
        console.log('clicked');

        this.isToggle = !this.isToggle;
        // console.log(this.isToggle);
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

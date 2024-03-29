import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // @ViewChild('loginForm') loginForm: NgForm | undefined;

  //Renders static content
  //ngOnInit(): void {}

  //Renders the final content + dynamic content
  //ngAfterViewInit(): void {}

  //First way - without @ViewChild:
  formSubmitHandler(form: NgForm) {

    // form.value => must have ngModel on input
    
    const {email, password} = form?.value;

    if (form?.invalid) {
      console.log('Form is invalid!');

      return;
    }

    console.log('invalid', form.invalid);
    
    console.log(form.value);

    // Ways to clear form (reseting the data)
    // form.reset();
    form.setValue({email: '', password: ''});
  }

  //Second way -with @ViewChild:
  // formSubmitHandler() {
  //   if (!this.loginForm) {
  //     return;
  //   }

  //   const form = this.loginForm;

    // form.value => must have ngModel on input
    // const {email, password} = form?.value;
    
    // console.log(form.value);

    // Ways to clear form (reseting the data)
    // form.reset();
//     form.setValue({email: '', password: ''})
//   }
}

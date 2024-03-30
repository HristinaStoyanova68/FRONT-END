import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.maxLength(4)]],
  });

  ngAfterViewInit() {
    if (this.registerForm) {
      this.registerForm.valueChanges.subscribe((x) => {
        console.log(x);
        
      })
    }
  }

  constructor(private fb: FormBuilder) {}

  handleSubmit(): void {
    console.log(this.registerForm.value);

    const {email, password} = this.registerForm?.value;

    if (this.registerForm?.invalid) {
      console.log('RegisterForm is invalid!');

      return;
    }

    console.log('invalid', this.registerForm.invalid);
    
    console.log(this.registerForm.value);

    // Ways to clear form (reseting the data)
    // form.reset();
    this.registerForm.setValue({email: '', password: ''});
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'GreenHaven';
  passwordInput: any;
  eyeIconInput: any;

  registrationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })



  togglePasswordVisibility() {
    this.passwordInput = document.getElementById('password');
    this.eyeIconInput = document.querySelector('.eye-icon')

    if (this.passwordInput.type === 'password') {
      this.passwordInput.type = 'text';
      this.eyeIconInput.classList.remove('fa-eye-slash');
      this.eyeIconInput.classList.add('fa-eye');
    } else {
      this.passwordInput.type = 'password';
      this.eyeIconInput.classList.remove('fa-eye');
      this.eyeIconInput.classList.add('fa-eye-slash');
    }

  }
}


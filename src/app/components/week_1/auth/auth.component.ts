import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  signInForm: FormGroup;

  // email = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('', [Validators.required]);
  hide = true;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.signInForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
   }

  get email() : FormControl{
    return this.email.get('email') as FormControl
  }

  get password() : FormControl{
    return this.signInForm.get('password') as FormControl
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signin(this.email.value["email"], this.password.value["password"]);
    this.router.navigate(['home']);
  }
  

  // getEmailErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  // getPasswordErrorMessage() {
  //   if (this.password.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   return this.password.hasError('password') ? 'Not a valid password' : '';
  // }
}

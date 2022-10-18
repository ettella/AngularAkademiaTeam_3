import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  signInForm: FormGroup;
  hide = true;

  constructor(
    private authService: AuthService,
    public fb: FormBuilder,
    private router: Router
  ) {
    this.signInForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

   get email(): FormControl {
    return this.signInForm.get('email') as FormControl;
  }

   get password(): FormControl {
    return this.signInForm.get('password') as FormControl;
  }

  ngOnInit(): void {
    if (this.authService.isSignedIn()) {
      this.router.navigate(['/task-1'])
    }
  }

  protected onSubmit(): void {
    this.authService.signin(this.email.value, this.password.value);
    this.router.navigate(['home']);
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter your email!';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter your password!';
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';
  }
}

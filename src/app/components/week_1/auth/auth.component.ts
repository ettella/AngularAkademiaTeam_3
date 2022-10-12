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
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.signInForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get email() : FormControl{
    return this.signInForm.get('email') as FormControl
  }

  get password() : FormControl{
    return this.signInForm.get('password') as FormControl
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signin(this.signInForm.value["email"], this.signInForm.value["password"]);
    this.router.navigate(['home']);
  }

}

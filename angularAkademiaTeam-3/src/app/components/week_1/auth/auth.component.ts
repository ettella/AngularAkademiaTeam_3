import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  signInForm: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.signInForm = fb.group({
      username: ['', Validators.required], //lowercase and numbers only
      password: ['', Validators.required],
    });
  }

  get username() : FormControl{
    return this.signInForm.get('username') as FormControl
  }

  get password() : FormControl{
    return this.signInForm.get('password') as FormControl
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signin(this.signInForm.value["username"], this.signInForm.value["password"])
  }

}

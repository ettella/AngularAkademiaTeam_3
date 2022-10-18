import { AuthService } from '../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isSignedIn() {
    return this.authService.isSignedIn();
  }

  signout() {
    this.authService.signOut()
  }

}

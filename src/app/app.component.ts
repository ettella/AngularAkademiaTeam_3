import { Component } from '@angular/core';
import { AuthService } from './components/week_1/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularAkademiaTeam-3';

  constructor(private authService: AuthService){}

  isSignedIn(){
    this.authService.isSignedIn();
  }
}

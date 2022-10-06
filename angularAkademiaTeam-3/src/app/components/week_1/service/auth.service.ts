import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

const userName = "admin@admin.com"
const password = "admin"

@Injectable({providedIn: 'root'})
export class AuthService {


  constructor(private router: Router) {}
  signin(username: string, pass: string) {
    if (username == userName && pass == password) {
      localStorage.setItem("signedin", "true")
    }
  }

  isSignedIn() {
    return localStorage.getItem("signedin") === "true"
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['/'])
  }
}

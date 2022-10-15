import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const EMAIL = 'admin@admin.com';
const PASSWORD = 'admin';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private router: Router) {}

  signin(email: string, pass: string): void {
    if (email == EMAIL && pass == PASSWORD) {
      localStorage.setItem('signedin', 'true');
    }
  }

  isSignedIn(): boolean {
    return localStorage.getItem('signedin') === 'true';
  }

  signOut(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}

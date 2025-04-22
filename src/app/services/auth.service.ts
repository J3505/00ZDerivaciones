import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentRole: string | null = null;

  private users = [
    { username: 'admin', role: 'admin', password: '123' },
    { username: 'profe', role: 'profesor', password: '123' },
    { username: 'tutor', role: 'tutor', password: '123' },
  ];

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      this.currentRole = user.role;
      switch (user.role) {
        case 'profesor':
          this.router.navigate(['/profesor/inicio']);
          break;
        case 'tutor':
          this.router.navigate(['/tutor/inicio']);
          break;
        case 'admin':
          this.router.navigate(['/admin/dashboard']);
          break;
      }
      return true;
    }
    return false;
  }

  logout() {
    this.currentRole = null;
    this.router.navigate(['/login']);
  }

  getRole(): string | null {
    return this.currentRole;
  }

  isAuthenticated(): boolean {
    return !!this.currentRole;
  }

}

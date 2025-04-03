import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentRole: string | null = null;

  private users = [
    { username: 'admin@senati.pe', role: 'admin', password: '123' },
    { username: 'profe@senati.pe', role: 'profesor', password: '123' },
    { username: 'tutor@senati.pe', role: 'tutor', password: '123' },
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
          this.router.navigate(['/admin/inicio']);
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

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

   // login
  //  email: string = '';
   // password: string = '';
   passwordVisible: boolean = false;
   currentRoleIndex: number = 0;

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      this.error = '';
    } else {
      this.error = 'Credenciales incorrectas';
    }
  }



  roles = [
    { role: 'tutor', label: 'Tutor', iconClass: 'fas fa-user-graduate', color: 'blue' },
    { role: 'profesor', label: 'Profesor', iconClass: 'fas fa-chalkboard-teacher', color: 'green' },
    { role: 'admin', label: 'Admin', iconClass: 'fas fa-user-tie', color: 'purple' }
  ];

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  showRole(index: number) {
    this.currentRoleIndex = index;
  }

  getRoleClasses(index: number): string {
    return `
      icon-transition absolute mx-auto w-20 h-20 bg-${this.roles[index].color}-100 rounded-full flex flex-col items-center justify-center
      ${index === this.currentRoleIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
    `;
  }

  getIndicatorClasses(index: number): string {
    return `
      w-2 h-2 rounded-full ${index === this.currentRoleIndex ? 'bg-blue-400' : 'bg-gray-300'} focus:outline-none
    `;
  }
}

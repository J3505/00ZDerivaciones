import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [ CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  role: string | null = null;

  constructor(private authService: AuthService) {
    this.role = this.authService.getRole();
  }

  logout() {
    this.authService.logout();
  }
  navLinks: { icon?: string; label: string; href: string; roles: string[] }[] = [
    {  icon: 'fa-home', label: 'Inicio', href: '/profesor/inicio', roles: ['profesor'] },
    {  icon: 'fa-user', label: 'Estudiantes', href: '/profesor/estudiantes', roles: ['profesor'] },
    {  icon: 'fa-cogs', label: 'Derivaciones', href: '/profesor/derivaciones', roles: ['profesor'] },
    {  icon: 'fa-envelope', label: 'Historial', href: '/profesor/historial', roles: ['profesor'] },
    {  icon: 'fa-home',  label: 'Inicio', href: '/tutor/inicio', roles: ['tutor'] },
    {  icon: 'fa-user',  label: 'Ver Derivaciones', href: '/tutor/ver-derivaciones', roles: ['tutor'] },
    {  icon: 'fa-cogs',  label: 'Historial', href: '/tutor/historial', roles: ['tutor'] }
  ];
  // navLinks = [
  //   { icon: 'fa-home', label: 'Inicio', href: '/profesor/inicio' },
  //   { icon: 'fa-user', label: 'Estudiantes', href: '/profesor/estudiantes' },
  //   { icon: 'fa-cogs', label: 'Derivaciones', href: '/profesor/derivaciones' },
  //   { icon: 'fa-envelope', label: 'Historial', href: '/profesor/historial' }
  // ];


  // Dispositivos moviles.
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // links ={
  //   profesores :[
  //     { path:'url', label: ' Inicio' ,Icon:'icono' },
  //     { path:'url', label: ' Inicio' ,Icon:'icono' },
  //     { path:'url', label: ' Inicio' ,Icon:'icono' },
  //     { path:'url', label: ' Inicio' ,Icon:'icono' },
  //   ],

  //   tutor :[
  //     { path:'url', label: ' Inicio' ,Icon:'icono' },
  //     { path:'url', label: ' Inicio' ,Icon:'icono' },
  //     { path:'url', label: ' Inicio' ,Icon:'icono' },

  //     ]
  //   }
}

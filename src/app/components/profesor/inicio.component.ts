import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { DataService, Notificacion, RespuestaTutor } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [ NavbarComponent, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {
  user: string | null = null;
  fecha: string = '';
  hora: string = '';
  contadores: { enviados: number; recibidos: number } = { enviados: 0, recibidos: 0 };
  respuestasTutor: RespuestaTutor[] = [];
  notificaciones: Notificacion[] = [];

  constructor(private authService: AuthService, private dataService: DataService) {}

  ngOnInit() {
    this.user = this.authService.getRole();
    const now = new Date();
    this.fecha = now.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).replace(/\//g, '/');
    this.hora = now.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    this.contadores = this.dataService.getContadoresProfesor();
    this.respuestasTutor = this.dataService.getRespuestasTutor();
    this.notificaciones = this.dataService.getNotificaciones();
  }
}

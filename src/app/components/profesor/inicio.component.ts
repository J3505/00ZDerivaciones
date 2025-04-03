import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { DataService, RespuestaTutor } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  imports: [ NavbarComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  user: string | null = null;
  fecha: string = '';
  hora: string = '';
  contadores: { enviados: number; recibidos: number } = { enviados: 0, recibidos: 0 };
  respuestas: RespuestaTutor[] = [];

  constructor(private authService: AuthService, private dataService: DataService) {}

  ngOnInit() {
    // Obtener el rol del usuario
    this.user = this.authService.getRole();

    // Obtener la fecha y hora actual
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

    // Obtener contadores y respuestas
    this.contadores = this.dataService.getContadores();
    this.respuestas = this.dataService.getRespuestasTutor();
  }
}

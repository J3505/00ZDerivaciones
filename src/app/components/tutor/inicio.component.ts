import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { DataService, Derivacion, RespuestaTutor } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalVerDerivacionComponent } from "../shared/modal-ver-derivacion/modal-ver-derivacion.component";

@Component({
  selector: 'app-inicio',
  imports: [NavbarComponent, RouterModule, CommonModule, ModalVerDerivacionComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioTutorComponent implements OnInit {
  user: string | null = null;
  fecha: string = '';
  hora: string = '';
  contadores: { recibidos: number; respondidos: number } = { recibidos: 0, respondidos: 0 };
  derivaciones: Derivacion[] = [];
  isModalOpen: boolean = false; // Controla si el modal está abierto
  selectedDerivacionId: number | null = null; // ID de la derivación seleccionada

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
    this.contadores = this.dataService.getContadoresTutor();
    this.derivaciones = this.dataService.getDerivaciones().filter(d => !d.responded);
  }

  // Método para abrir el modal
  openModal(derivacionId: number) {
    this.selectedDerivacionId = derivacionId;
    this.isModalOpen = true;
  }

  // Método para cerrar el modal
  closeModal() {
    this.isModalOpen = false;
    this.selectedDerivacionId = null;
    this.derivaciones = this.dataService.getDerivaciones().filter(d => !d.responded); // Actualizar la lista
  }

}

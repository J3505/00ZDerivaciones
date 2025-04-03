import { Component, OnInit } from '@angular/core';
import { DataService, Derivacion, Estudiante } from '../../services/data.service';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { ModalVerDerivacionComponent } from '../shared/modal-ver-derivacion/modal-ver-derivacion.component';

@Component({
  selector: 'app-ver-derivados',
  imports: [NavbarComponent, ModalVerDerivacionComponent],
  templateUrl: './ver-derivados.component.html',
  styleUrl: './ver-derivados.component.scss'
})
export class VerDerivadosComponent implements OnInit {
  derivaciones: Derivacion[] = [];
  selectedDerivacion: Derivacion | undefined;
  selectedEstudiante: Estudiante | undefined;
  isModalOpen: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.derivaciones = this.dataService.getDerivaciones();
  }

  openModal(derivacion: Derivacion) {
    this.selectedDerivacion = derivacion;
    this.selectedEstudiante = this.dataService.getEstudianteById(derivacion.estudianteId);
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedDerivacion = undefined;
    this.selectedEstudiante = undefined;
  }
}

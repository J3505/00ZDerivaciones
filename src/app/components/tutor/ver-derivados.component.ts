import { Component, OnInit } from '@angular/core';
import { DataService, Derivacion } from '../../services/data.service';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { ModalVerDerivacionComponent } from '../shared/modal-ver-derivacion/modal-ver-derivacion.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver-derivados',
  imports: [NavbarComponent, ModalVerDerivacionComponent, CommonModule],
  templateUrl: './ver-derivados.component.html',
  styleUrl: './ver-derivados.component.scss'
})
export class VerDerivadosComponent implements OnInit {

  derivaciones: Derivacion[] = [];
  selectedDerivacionId: number | null = null;
  // selectedDerivacion: Derivacion | undefined;
  // selectedEstudiante: Estudiante | undefined;
  isModalOpen: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.derivaciones = this.dataService.getDerivaciones();
  }

  // openModal(derivacion: Derivacion) {
  //   this.selectedDerivacion = derivacion;
  //   this.selectedEstudiante = this.dataService.getEstudianteById(derivacion.estudianteId);
  //   this.isModalOpen = true;
  // }

  // closeModal() {
  //   this.isModalOpen = false;
  //   this.selectedDerivacion = undefined;
  //   this.selectedEstudiante = undefined;
  // }
  openModal(derivacionId: number) {
    this.selectedDerivacionId = derivacionId;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedDerivacionId = null;
    this.derivaciones = this.dataService.getDerivaciones();
  }
}

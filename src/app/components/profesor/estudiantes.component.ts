import { Component, OnInit } from '@angular/core';
import { DataService, Estudiante } from '../../services/data.service';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { ModalComponent } from '../shared/modal/modal.component';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  imports: [NavbarComponent, RouterLink, ModalComponent, Dialog, ButtonModule, InputTextModule, CommonModule, FormsModule, InputTextModule],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.scss',
})
export class EstudiantesComponent implements OnInit {
  visible: boolean = false;
  showDialog() {
    this.visible = true;
}

  estudiantes: Estudiante[] = [];
  isModalOpen: boolean = false;
  periodo: string = '2025-10';
  curso: string = 'Seminario';
  cfp: string = 'Ayacucho';
  semestre: string = 'V';
  carrera: string = 'nose';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.estudiantes = this.dataService.getEstudiantes();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveEstudiante(estudiante: Estudiante) {
    this.dataService.addEstudiante(estudiante);
    this.estudiantes = this.dataService.getEstudiantes();
    this.closeModal();
  }

  importFromExcel() {
    this.dataService.importEstudiantesFromExcel();
    this.estudiantes = this.dataService.getEstudiantes();
  }

  searchEstudiante() {
    // Simulación de búsqueda (puedes implementarla según necesites)
    console.log('Buscar estudiante');
  }


  
}

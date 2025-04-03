import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { DataService, Derivacion, Estudiante } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-derivaciones',
  imports: [NavbarComponent, FormsModule],
  templateUrl: './derivaciones.component.html',
  styleUrl: './derivaciones.component.scss'
})
export class DerivacionesComponent implements OnInit{

  estudiante: Estudiante | undefined;
  motivo: string = '';
  derivaciones: Derivacion[] = [];
  periodo: string = '2025-10';
  curso: string = 'Seminario';
  cfp: string = 'Ayacucho';
  semestre: string = 'V';
  carrera: string = 'nose';
  error: string = '';

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const estudianteId = +id;
      this.estudiante = this.dataService.getEstudianteById(estudianteId);
      if (this.estudiante) {
        const derivaciones = this.dataService.getDerivacionesByEstudianteId(estudianteId);
        this.derivaciones = derivaciones || [];
      } else {
        this.error = 'Estudiante no encontrado';
      }
    } else {
      this.error = 'ID de estudiante no proporcionado';
    }
  }

  agregarDerivacion() {
    if (this.estudiante && this.motivo) {
      const nuevaDerivacion: Derivacion = {
        id: this.dataService.getDerivaciones().length + 1,
        estudianteId: this.estudiante.id,
        motivo: this.motivo,
        fecha: new Date().toISOString().split('T')[0],
      };
      this.dataService.addDerivacion(nuevaDerivacion);
      this.derivaciones = this.dataService.getDerivacionesByEstudianteId(this.estudiante.id);
      this.motivo = '';
    }
  }

  searchEstudiante() {
    // Simulación de búsqueda
    console.log('Buscar estudiante');
  }
}

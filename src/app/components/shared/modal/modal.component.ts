import { Component, EventEmitter, Input, Output }  from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Estudiante } from '../../../services/data.service';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Estudiante>();
  @Output() importExcel = new EventEmitter<void>();

  estudiante: Estudiante = {
    id: 0,
    nombre: '',
    apellido: '',
    curso: 'Seminario',
    telefono: '',
    correo: '',
    carrera: 'Software',
    semestre: 'V',
    periodo: '2025-10',
    cfp: 'Ayacucho',
  };

  closeModal() {
    this.close.emit();
  }

  saveEstudiante() {
    this.save.emit(this.estudiante);
    this.resetForm();
  }

  importFromExcel() {
    this.importExcel.emit();
    this.closeModal();
  }

  private resetForm() {
    this.estudiante = {
      id: 0,
      nombre: '',
      apellido: '',
      curso: 'Seminario',
      telefono: '',
      correo: '',
      carrera: 'nose',
      semestre: 'V',
      periodo: '2025-10',
      cfp: 'Ayacucho',
      foto:'https://i.pinimg.com/736x/73/ce/7d/73ce7d2666204edceb3594eb192ceae0.jpg'
    };
  }
}

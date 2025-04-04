import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService, Derivacion, Estudiante } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-modal-ver-derivacion',
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-ver-derivacion.component.html',
  styleUrl: './modal-ver-derivacion.component.scss'
})
export class ModalVerDerivacionComponent {
  @Input() isOpen: boolean = false;
  @Input() derivacionId: number | null = null;
  @Output() close = new EventEmitter<void>();

  estudiante: Estudiante | undefined;
  derivacion: Derivacion | undefined;
  respuesta: string = '';
  responded: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnChanges() {
    if (this.derivacionId) {
      this.derivacion = this.dataService.getDerivaciones().find(d => d.id === this.derivacionId);
      if (this.derivacion) {
        this.estudiante = this.dataService.getEstudianteById(this.derivacion.estudianteId);
        this.responded = this.derivacion.responded;
        this.respuesta = this.derivacion.respuestaTutor || '';
      }
    }
  }

  closeModal() {
    this.close.emit();
  }

  enviarRespuesta() {
    if (this.derivacionId && this.respuesta) {
      this.dataService.updateDerivacion(this.derivacionId, this.respuesta);
      this.closeModal();
    }
  }
}

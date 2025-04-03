import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Derivacion, Estudiante } from '../../../services/data.service';


@Component({
  selector: 'app-modal-ver-derivacion',
  imports: [],
  templateUrl: './modal-ver-derivacion.component.html',
  styleUrl: './modal-ver-derivacion.component.scss'
})
export class ModalVerDerivacionComponent {
  @Input() isOpen: boolean = false;
  @Input() estudiante: Estudiante | undefined;
  @Input() derivacion: Derivacion | undefined;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}

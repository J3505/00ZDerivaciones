import { Component, OnInit } from '@angular/core';
import { DataService, Derivacion } from '../../services/data.service';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-historial',
  imports: [NavbarComponent],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.scss'
})
export class HistorialTutorComponent implements OnInit{
  derivaciones: Derivacion[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.derivaciones = this.dataService.getDerivaciones().filter(d => d.responded);
  }
}

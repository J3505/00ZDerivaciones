import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { DataService, Derivacion } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historial',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.scss'
})
export class HistorialComponent implements OnInit {
  derivaciones: Derivacion[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.derivaciones = this.dataService.getDerivaciones();
  }
}

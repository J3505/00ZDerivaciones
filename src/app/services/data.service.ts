import { Injectable } from '@angular/core';

export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  curso: string;
  telefono: string;
  correo: string;
  carrera?: string;
  semestre?: string;
  periodo?: string;
  cfp?: string;
  foto?:string;
}

export interface Derivacion {
  id: number;
  estudianteId: number;
  motivo: string;
  fecha: string;
}
export interface RespuestaTutor {
  id: number;
  mensaje: string;
}
export interface RespuestaTutor {
  id: number;
  derivacionId: number;
  mensaje: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private estudiantes: Estudiante[] = [
    { id: 1234567, nombre: 'Jesús', apellido: 'Alonso', curso: 'Seminario', telefono: '980 259 452', correo: 'alonstarkj@gmail.com', carrera: 'nose', semestre: 'V', periodo: '2025-10', cfp: 'Ayacucho', foto:'https://i.pinimg.com/736x/73/ce/7d/73ce7d2666204edceb3594eb192ceae0.jpg' },
    { id: 1234567, nombre: 'Jesús', apellido: 'Alonso', curso: 'Seminario', telefono: '980 259 452', correo: 'alonstarkj@gmail.com', carrera: 'nose', semestre: 'V', periodo: '2025-10', cfp: 'Ayacucho', foto:'https://i.pinimg.com/736x/73/ce/7d/73ce7d2666204edceb3594eb192ceae0.jpg' },
    { id: 1234567, nombre: 'Jesús', apellido: 'Alonso', curso: 'Seminario', telefono: '980 259 452', correo: 'alonstarkj@gmail.com', carrera: 'nose', semestre: 'V', periodo: '2025-10', cfp: 'Ayacucho', foto:'https://i.pinimg.com/736x/73/ce/7d/73ce7d2666204edceb3594eb192ceae0.jpg' },
    { id: 1234567, nombre: 'Jesús', apellido: 'Alonso', curso: 'Seminario', telefono: '980 259 452', correo: 'alonstarkj@gmail.com', carrera: 'nose', semestre: 'V', periodo: '2025-10', cfp: 'Ayacucho', foto:'https://i.pinimg.com/736x/73/ce/7d/73ce7d2666204edceb3594eb192ceae0.jpg' },
    { id: 1234567, nombre: 'Jesús', apellido: 'Alonso', curso: 'Seminario', telefono: '980 259 452', correo: 'alonstarkj@gmail.com', carrera: 'nose', semestre: 'V', periodo: '2025-10', cfp: 'Ayacucho', foto:'https://i.pinimg.com/736x/73/ce/7d/73ce7d2666204edceb3594eb192ceae0.jpg' },
    { id: 1234567, nombre: 'Jesús', apellido: 'Alonso', curso: 'Seminario', telefono: '980 259 452', correo: 'alonstarkj@gmail.com', carrera: 'nose', semestre: 'V', periodo: '2025-10', cfp: 'Ayacucho', foto:'https://i.pinimg.com/736x/73/ce/7d/73ce7d2666204edceb3594eb192ceae0.jpg' },
  ];

  private derivaciones: Derivacion[] = [
    { id: 1, estudianteId: 1234567, motivo: 'Falta de atención', fecha: '2025-03-01' },
    { id: 2, estudianteId: 1234567, motivo: 'Tarea incompleta', fecha: '2025-03-15' },
  ];

  private respuestasTutor: RespuestaTutor[] = [
    { id: 1, derivacionId: 1, mensaje: 'El estudiante no asiste a clases en lo que va del curso' },
    { id: 2, derivacionId: 2, mensaje: 'El estudiante no asiste a clases en lo que va del curso' },
  ];

  getEstudiantes(): Estudiante[] {
    return this.estudiantes;
  }

  getEstudianteById(id: number): Estudiante | undefined {
    return this.estudiantes.find((e) => e.id === id);
  }

  addEstudiante(estudiante: Estudiante) {
    this.estudiantes.push(estudiante);
  }

  importEstudiantesFromExcel(): Estudiante[] {
    // Simulación de importación desde Excel
    const nuevosEstudiantes: Estudiante[] = [
      { id: 1234568, nombre: 'María', apellido: 'Gómez', curso: 'Seminario', telefono: '987 654 321', correo: 'maria.gomez@gmail.com', carrera: 'nose', semestre: 'V', periodo: '2025-10', cfp: 'Ayacucho', foto:'https://i.pinimg.com/736x/73/ce/7d/73ce7d2666204edceb3594eb192ceae0.jpg' },
      { id: 1234569, nombre: 'Pedro', apellido: 'López', curso: 'Seminario', telefono: '912 345 678', correo: 'pedro.lopez@gmail.com', carrera: 'nose', semestre: 'V', periodo: '2025-10', cfp: 'Ayacucho', foto:'https://i.pinimg.com/736x/73/ce/7d/73ce7d2666204edceb3594eb192ceae0.jpg' },
    ];
    this.estudiantes.push(...nuevosEstudiantes);
    return nuevosEstudiantes;
  }

  getDerivaciones(): Derivacion[] {
    return this.derivaciones;
  }

  getDerivacionesByEstudianteId(estudianteId: number): Derivacion[] {
    return this.derivaciones.filter((d) => d.estudianteId === estudianteId);
  }

  addDerivacion(derivacion: Derivacion) {
    this.derivaciones.push(derivacion);
  }

  getRespuestasTutor(): RespuestaTutor[] {
    return this.respuestasTutor;
  }

  getContadores(): { enviados: number; recibidos: number } {
    return { enviados: 3, recibidos: 1 };
  }

  getContadoresTutor(): { recibidos: number; respondidos: number } {
    return { recibidos: 3, respondidos: 1 }; // Datos falsos
  }
}

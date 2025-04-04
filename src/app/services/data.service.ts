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
  responded: boolean;
  respuestaTutor?: string;
}
export interface RespuestaTutor {
  id: number;
  derivacionId: number;
  mensaje: string;
}

export interface Notificacion {
  id: number;
  mensaje: string;
  fecha: string;
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
    { id: 1, estudianteId: 1234567, motivo: 'El estudiante no asistió a clases en lo que va del curso', fecha: '2025-03-01', responded: false },
    { id: 2, estudianteId: 1234568, motivo: 'El estudiante no asistió a clases en lo que va del curso', fecha: '2025-03-02', responded: true, respuestaTutor: 'Se contactó con el joven, el motivo de su inasistencia fue que estuvo mal de salud.' },
    { id: 3, estudianteId: 1234567, motivo: 'El estudiante no asistió a clases en lo que va del curso', fecha: '2025-03-03', responded: false },
  ];

  private respuestasTutor: RespuestaTutor[] = [
    { id: 1, derivacionId: 2, mensaje: 'Se contactó con el joven, el motivo de su inasistencia fue que estuvo mal de salud.' },
  ];

  private notificaciones: Notificacion[] = [];

  getEstudiantes(): Estudiante[] {
    return this.estudiantes;
  }

  getEstudianteById(id: number): Estudiante | undefined {
    return this.estudiantes.find((e) => e.id === id);
  }

  /// Registrar estudiantes
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

  updateDerivacion(derivacionId: number, respuesta: string) {
    const derivacion = this.derivaciones.find(d => d.id === derivacionId);
    if (derivacion) {
      derivacion.responded = true;
      derivacion.respuestaTutor = respuesta;
      this.respuestasTutor.push({
        id: this.respuestasTutor.length + 1,
        derivacionId: derivacionId,
        mensaje: respuesta,
      });
      this.notificaciones.push({
        id: this.notificaciones.length + 1,
        mensaje: `El tutor ha respondido a la derivación del estudiante ${derivacion.estudianteId}: "${respuesta}"`,
        fecha: new Date().toISOString().split('T')[0],
      });
    }
  }

  getRespuestasTutor(): RespuestaTutor[] {
    return this.respuestasTutor;
  }

  getNotificaciones(): Notificacion[] {
    return this.notificaciones;
  }

  // Contadores para el profesor
  getContadoresProfesor(): { enviados: number; recibidos: number } {
    const enviados = this.derivaciones.length; // Todas las derivaciones creadas por el profesor
    const recibidos = this.derivaciones.filter((d) => d.responded).length; // Derivaciones respondidas por el tutor
    return { enviados, recibidos };
  }

  // Contadores para el tutor
  getContadoresTutor(): { recibidos: number; respondidos: number } {
    const recibidos = this.derivaciones.filter((d) => !d.responded).length; // Derivaciones pendientes de respuesta
    const respondidos = this.derivaciones.filter((d) => d.responded).length; // Derivaciones ya respondidas
    return { recibidos, respondidos };
  }
}

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/profesor/inicio.component';
import { EstudiantesComponent } from './components/profesor/estudiantes.component';
import { DerivacionesComponent } from './components/profesor/derivaciones.component';
import { HistorialComponent } from './components/profesor/historial.component';

import { InicioTutorComponent } from './components/tutor/inicio.component';
import { HistorialTutorComponent } from './components/tutor/historial.component';
import { VerDerivadosComponent } from './components/tutor/ver-derivados.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'profesor',
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'estudiantes', component: EstudiantesComponent },
      { path: 'derivaciones', component: DerivacionesComponent },
      { path: 'derivaciones/:id', component: DerivacionesComponent },
      { path: 'historial', component: HistorialComponent },
    ],
  },
  {
    path: 'tutor',
    children: [
      { path: 'inicio', component: InicioTutorComponent },
      { path: 'ver-derivaciones', component: VerDerivadosComponent},
      { path: 'historial', component: HistorialTutorComponent },
    ],
  },
  {
    path: 'admin',
    loadComponent: () => import('./layout/admin/layout-admin/layout-admin.component'),
    children:[
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./admin/dashboard/dashboard.component')},
      { path: 'derivacion', loadComponent: () => import ('./admin/derivacion/derivacion.component')},
      { path: 'estudiantes', loadComponent: () => import ('./admin/estudiantes/estudiantes.component')},
    ]
  },

  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];

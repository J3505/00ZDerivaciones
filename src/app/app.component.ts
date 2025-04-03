import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sisd';
}

export const appConfig = {
  providers: [provideRouter(routes)],
};

import { Component, signal } from '@angular/core';
import { Empleados } from './components/empleados/empleados';

@Component({
  imports: [Empleados],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('front-end');
}

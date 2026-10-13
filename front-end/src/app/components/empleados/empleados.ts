import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';

declare var M: any;

@Component({
  selector: 'app-empleados',
  imports: [FormsModule],
  templateUrl: './empleados.html',
  styleUrl: './empleados.css'
})
export class Empleados {
  constructor(public empleadoService: EmpleadoService) {}

  agregarEmpleado(form: NgForm) {
    this.empleadoService.postEmpleado(form.value).subscribe({
      next: () => {
        this.resetForm(form);
        M.toast({ html: 'Guardado satisfactoriamente' });
      },
      error: (err) => {
        M.toast({ html: 'Error al guardar: ' + (err.error?.error ?? err.message) });
      }
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }
}
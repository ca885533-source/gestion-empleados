import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { EmpleadoService } from './empleado.service';
import { Empleado } from '../models/empleado';

describe('EmpleadoService', () => {
  let service: EmpleadoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(EmpleadoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getEmpleados hace un GET a la API', () => {
    const datos: Empleado[] = [new Empleado(undefined, 'Ana', 'Experto', 'Bogotá', 1000)];

    service.getEmpleados().subscribe((respuesta) => {
      expect(respuesta).toEqual(datos);
    });

    const req = httpMock.expectOne(service.URL_API);
    expect(req.request.method).toBe('GET');
    req.flush(datos);
  });

  it('postEmpleado hace un POST con los datos del empleado', () => {
    const empleado = new Empleado(undefined, 'Carmen', 'Experto', 'Colombia', 5000);

    service.postEmpleado(empleado).subscribe();

    const req = httpMock.expectOne(service.URL_API);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(empleado);
    req.flush({ mensaje: 'Empleado guardado' });
  });

  it('putEmpleado hace un PUT a la URL con el id', () => {
    const empleado = new Empleado('123', 'Carmen', 'Experto', 'Brasil', 5000);

    service.putEmpleado(empleado).subscribe();

    const req = httpMock.expectOne(service.URL_API + '/123');
    expect(req.request.method).toBe('PUT');
    req.flush({ mensaje: 'Empleado actualizado' });
  });

  it('deleteEmpleado hace un DELETE a la URL con el id', () => {
    service.deleteEmpleado('123').subscribe();

    const req = httpMock.expectOne(service.URL_API + '/123');
    expect(req.request.method).toBe('DELETE');
    req.flush({ mensaje: 'Empleado eliminado' });
  });
});
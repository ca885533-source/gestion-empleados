export class Empleado {
  constructor(
    public _id?: string,
    public name: string = '',
    public position: string = '',
    public office: string = '',
    public salary: number = 0
  ) {}
}
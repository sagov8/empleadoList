export class Empleado {
  id: number;
  nombre: string;
  apellido: string;
  genero: string;
  salario: number;

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    genero: string,
    salario: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.genero = genero;
    this.salario = salario;
  }
}

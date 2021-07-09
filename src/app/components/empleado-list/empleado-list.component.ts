import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listEmpleados: Empleado[] = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', genero: 'Masculino', salario: 25000 },
    { id: 2, nombre: 'Marcos', apellido: 'Gozalez', genero: 'Masculino', salario: 65000 },
    { id: 3, nombre: 'Marta', apellido: 'Garcia', genero: 'Femenino', salario: 75000 },
    { id: 4, nombre: 'Ignacio', apellido: 'Cortes', genero: 'Masculino', salario: 55000 },
    { id: 5, nombre: 'Maria', apellido: 'Navarro', genero: 'Femenino', salario: 80000 },
    { id: 6, nombre: 'Santiago', apellido: 'Vivas', genero: 'Masculino', salario: 90000 },
  ]

  radioButtonSelect = 'Todos';

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number{
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number{
    return this.listEmpleados.filter(list => list.genero === 'Femenino').length;
  }

  obtenerTotalMasculinos(): number{
    return this.listEmpleados.filter(list => list.genero === 'Masculino').length;
  }

}

import { Injectable } from '@angular/core';
import { Registro } from './registro.model';

@Injectable({
  providedIn: 'root'
})
export class FlujoDineroService {

  constructor() { }

  ingresos: Registro[] = [
    new Registro('Salario', 4000),
    new Registro('Venta Coche', 500)
  ]

  egresos: Registro[] = [
    new Registro('Renta Depto', 900),
    new Registro('Ropa', 200)
  ]

  agregarIngreso(ingreso: Registro): void {
    this.ingresos.push(ingreso);
  }

  agregarEgreso(egreso: Registro): void {
    this.egresos.push(egreso);
  }

  eliminarIngreso(ingresoEliminable: Registro) {
    const indice = this.ingresos.indexOf(ingresoEliminable);
    this.ingresos.splice(indice, 1)
  }

  eliminarEgreso(egresoEliminable: Registro) {
    const indice = this.egresos.indexOf(egresoEliminable);
    this.egresos.splice(indice, 1)
  }



  ingresoTotal() {
    let ingresoAcumulado=0;
    this.ingresos.forEach(ingreso =>{
      ingresoAcumulado+=ingreso.precio
    })
    return ingresoAcumulado
  }

  egresoTotal() {
    let egresoAcumulado=0;
    this.egresos.forEach(egreso =>{
      egresoAcumulado+=egreso.precio
    })
    return egresoAcumulado;
  }

  saldoActual() {
    return this.ingresoTotal() - this.egresoTotal();
  }


}

import { Component } from '@angular/core';
import { FlujoDineroService } from '../flujo-dinero.service';
import { Registro } from '../registro.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ingresos',
  imports: [CommonModule],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})
export class IngresosComponent {

  eliminarIngreso(ingresoEliminable: Registro){
    this.flujoService.eliminarIngreso(ingresoEliminable);
  }

  constructor(private flujoService:FlujoDineroService){
  }

  ingresos:Registro[]=[]

  ngOnInit(){
    this.ingresos=this.flujoService.ingresos;
  }

}

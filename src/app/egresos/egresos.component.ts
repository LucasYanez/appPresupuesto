import { Component, Input } from '@angular/core';
import { FlujoDineroService } from '../flujo-dinero.service';
import { Registro } from '../registro.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egresos',
  imports: [CommonModule],
  templateUrl: './egresos.component.html',
  styleUrl: './egresos.component.css'
})
export class EgresosComponent {

  @Input() ingresosTotales!: number;

  constructor(private flujoService:FlujoDineroService){

  }

  egresos: Registro[]=[]


  ngOnInit(){
    this.egresos=this.flujoService.egresos; 
  }

  eliminarEgreso(egresoEliminable:Registro){
    this.flujoService.eliminarEgreso(egresoEliminable)
  }

}

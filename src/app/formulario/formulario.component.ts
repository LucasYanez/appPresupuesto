import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlujoDineroService } from '../flujo-dinero.service';
import { Registro } from '../registro.model';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
tipo: string='ingresoOperacion';
tipoOperacion(evento: Event) {
  const elementoSelect=evento.target as HTMLSelectElement;
  this.tipo=elementoSelect.value;
}

  constructor(private flujoService: FlujoDineroService) {

  }

  nuevaDescripcion: string = '';
  nuevoPrecio: number = 0 ;

  agregarFlujo(opcionSeleccionada:string):void {
    if(opcionSeleccionada=='ingresoOperacion'){
      this.flujoService.agregarIngreso(new Registro(this.nuevaDescripcion,this.nuevoPrecio));
      this.nuevaDescripcion='';
      this.nuevoPrecio=0;
    }
    else{
      this.flujoService.agregarEgreso(new Registro(this.nuevaDescripcion,this.nuevoPrecio))
      this.nuevaDescripcion='';
      this.nuevoPrecio=0;
    }
  }

  

}

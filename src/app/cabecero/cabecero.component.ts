import { Component, Input } from '@angular/core';
import { FlujoDineroService } from '../flujo-dinero.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecero',
  imports: [CommonModule],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {

  @Input() ingresosTotales!:number
  @Input() egresosTotales!:number
  @Input() presupuestoDisponible!:number
  

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceroComponent } from "./cabecero/cabecero.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { IngresosComponent } from "./ingresos/ingresos.component";
import { EgresosComponent } from "./egresos/egresos.component";
import { FlujoDineroService } from './flujo-dinero.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceroComponent, FormularioComponent, IngresosComponent, EgresosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appPresupuesto';

  constructor(private flujoService:FlujoDineroService){

  }

  ingresoTotal():number{
    return this.flujoService.ingresoTotal()
  }

  egresoTotal():number{
    return this.flujoService.egresoTotal()
  }

  saldoActual():number{
    return this.flujoService.saldoActual()
  }
}

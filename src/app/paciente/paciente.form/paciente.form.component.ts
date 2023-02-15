import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../PacienteService';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
    id: string;
    dataNascimento: number;
    nome: number;
    celular: string;
    cns: string;
  }

@Component({
  selector: 'app-pacientes-form',
  templateUrl: 'paciente.form.component.html'
})
export class PacienteFormComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'age', 'phone', 'cns'];
    pacientes:any = [];
    dataSource: any;

    
    constructor(private pacienteService: PacienteService) { }
    
    ngOnInit() {
        this.pacienteService.getPacientes().subscribe(pacientes => {
            console.log(pacientes);
            this.pacientes = pacientes;
            this.dataSource = new MatTableDataSource(this.pacientes);
    });
  }

  
  filtro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

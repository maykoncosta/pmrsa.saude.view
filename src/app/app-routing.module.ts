import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './paciente/PacienteComponent';
import { PacienteFormComponent } from './paciente/paciente.form/paciente.form.component';

const routes: Routes = [
  { path: 'pacientes', component: PacientesComponent},
  {path:'pacientes-form', component: PacienteFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

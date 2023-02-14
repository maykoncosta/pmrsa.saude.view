import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Minha lista de pacientes</h1>
    <a routerLink="/pacientes">Ver pacientes</a>
    <br/>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'pmrsa.saude';
}

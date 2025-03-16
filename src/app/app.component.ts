import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/productos">Productos</a>
      <a routerLink="/contacto">Contacto</a>
      <a routerLink="/mision">Misión</a>
      <a routerLink="/ubicacion">Ubicación</a>
      <button (click)="login()">Iniciar Sesión</button>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      display: flex;
      justify-content: space-around;
      background: #333;
      padding: 1rem;
    }
    a, button {
      color: white;
      text-decoration: none;
      font-size: 1.2rem;
    }
    button {
      background: #007bff;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  `]
})
export class AppComponent {
  login() {
    alert('Función de inicio de sesión en desarrollo');
  }
}

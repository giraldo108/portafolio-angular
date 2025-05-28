// Importación del decorador Component para definir un componente en Angular
import { Component } from '@angular/core';
// Importación de CommonModule, que incluye directivas comunes como *ngIf, *ngFor, etc.
import { CommonModule } from '@angular/common';

// Decorador @Component para definir los metadatos del componente
@Component({
  standalone: true, // Indica que este componente es independiente (no necesita declararse en un NgModule)
  imports: [CommonModule], // Importa el módulo CommonModule para usar directivas comunes dentro del HTML del componente
  selector: 'app-about', // Nombre del selector HTML que se usa para insertar este componente (ejemplo: <app-about></app-about>)
  templateUrl: './about.component.html', // Ruta del archivo HTML que contiene la estructura visual del componente
  styleUrls: ['./about.component.css'] // Ruta del archivo CSS que define los estilos de este componente
})

// Definición de la clase del componente, que contiene su lógica
export class AboutComponent {
  // Actualmente no contiene lógica, pero aquí puedes agregar propiedades, métodos, etc.
}

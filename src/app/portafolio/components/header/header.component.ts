// Importa el decorador Component de Angular para definir un componente.
import { Component } from '@angular/core';

// Importa el módulo de la barra de menús de PrimeNG.
import { MenubarModule } from 'primeng/menubar';

// Importa el módulo de botones de PrimeNG, necesario para usar <button pButton>
import { ButtonModule } from 'primeng/button'; // Nuevo import

// Importa la interfaz MenuItem que define los ítems del menú.
import { MenuItem } from 'primeng/api';

// Importa funcionalidades comunes de Angular necesarias en cualquier componente.
import { CommonModule } from '@angular/common';

// Decorador que define los metadatos del componente
@Component({
  selector: 'app-header', // Nombre del selector para usar este componente en templates: <app-header></app-header>
  standalone: true,       // Indica que este componente no depende de un módulo externo, es autónomo.
  templateUrl: './header.component.html', // Ruta del archivo HTML asociado
  styleUrls: ['./header.component.css'],  // Ruta del archivo CSS asociado
  imports: [CommonModule, MenubarModule, ButtonModule] // Módulos que el componente necesita para funcionar
})
export class HeaderComponent {
  // Define un arreglo de objetos MenuItem que representan los elementos del menú
  items: MenuItem[] = [
    { label: 'Inicio', url: '#inicio' },       // Navega a la sección con id="inicio"
    { label: 'Sobre mí', url: '#sobre-mi' },   // Navega a la sección con id="sobre-mi"
    { label: 'Mi blog', url: '#mi-blog' },     // Navega a la sección con id="mi-blog"
    { label: 'Contacto', url: '#mi-contacto' } // Navega a la sección con id="mi-contacto"
  ];
}

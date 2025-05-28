// Importa el decorador Component desde el núcleo de Angular
import { Component } from '@angular/core';
// Importa CommonModule para permitir el uso de directivas comunes (*ngIf, *ngFor, etc.)
import { CommonModule } from '@angular/common';

// Define un componente Angular utilizando el decorador @Component
@Component({
  standalone: true, // Marca este componente como standalone (no requiere estar en un módulo declarado)
  imports: [CommonModule], // Importa módulos necesarios, en este caso CommonModule para directivas básicas
  selector: 'app-contact', // Nombre que se usará en HTML para incluir este componente (<app-contact></app-contact>)
  templateUrl: './contact.component.html', // Ruta del archivo HTML que contiene la vista del componente
  styleUrls: ['./contact.component.css'] // Ruta del archivo CSS con los estilos específicos del componente
})
export class ContactComponent {
  // Dirección de correo que se mostrará en la sección de contacto
  email = 'daniela.gallego@utp.edu.co';

  // URL del perfil de Instagram que se usará como enlace
  instagramUrl = 'https://www.instagram.com/codex_sof/';

  // Nombre visible del perfil de Instagram
  instagramHandle = '@codex_sof';
}

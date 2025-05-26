import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button'; // Nuevo import
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, MenubarModule, ButtonModule] // Añade ButtonModule
})
export class HeaderComponent {
  items: MenuItem[] = [
    { label: 'Inicio', url: '#inicio' },
    { label: 'Sobre mí', url: '#sobre-mi' },
    { label: 'Mi blog', url: '#mi-blog' },
    { label: 'Contacto', url: '#mi-contacto' }
  ];
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioComponent } from './portafolio/portafolio.component';

@Component({
  standalone: true,
  imports: [CommonModule, PortafolioComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pag';
}
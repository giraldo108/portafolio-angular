import { Routes } from '@angular/router';
import { PortafolioComponent } from './portafolio/portafolio.component';

export const routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: '**', redirectTo: '' }
];
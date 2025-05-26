import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email = 'daniela.gallego@utp.edu.co';
  instagramUrl = 'https://www.instagram.com/codex_sof/';
  instagramHandle = '@codex_sof';
}
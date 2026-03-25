import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  constructor() {}
  // Abrir página oficial de WhatsApp
  openWhatsApp() {
    window.open('https://wa.me/525555571966', '_blank');
  }
}

/* ==========================================================================
     FOOTER COMPONENT LOGIC
     ========================================================================== */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  // Actualizar año automáticamente
  public currentYear: number = new Date().getFullYear();

  // Abrir API WhatsApp (Mersol)
  public openWhatsApp(): void {
    const url = 'https://wa.me/525555571966';
    window.open(url, '_blank');
  }
}

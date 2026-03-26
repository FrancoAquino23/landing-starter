/* ==========================================================================
     NAVBAR COMPONENT LOGIC
     ========================================================================== */

import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SocialComponent } from '../../shared/components/social-links/social.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, SocialComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  // Estado del menú desplegable en dispositivos móviles
  public isMenuOpen = false;

  // Alternar estado del menú hamburguesa (Abrir / Cerrar)
  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Cerrar ménu manualmente
  public closeMenu(): void {
    this.isMenuOpen = false;
  }

  // Cerrar menú automáticamente
  @HostListener('window:resize', ['$event'])
  protected onResize(event: UIEvent): void {
    const window = event.target as Window;
    if (window.innerWidth > 991 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}

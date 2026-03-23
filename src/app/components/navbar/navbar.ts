import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componente de navegación responsivo (Móvil - Hamburguesa)
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  isMenuOpen = false;

  // Alternar estado (Abierto / Cerrado)
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Forzar cierre del menú
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}

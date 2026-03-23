import { Component } from '@angular/core';

// Componente de pie de página (Móvil - Hamburguesa)
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  // Mostrar año actual
  protected readonly currentYear = new Date().getFullYear();
}

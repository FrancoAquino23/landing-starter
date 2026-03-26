/* ==========================================================================
   HERO COMPONENT LOGIC
   ========================================================================== */

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() title: string = 'Soluciones Industriales de Alta Calidad';
  @Input() subtitle: string = 'Expertos en soldadura y abrasivos para el sureste mexicano.';
  @Input() backgroundImage: string = 'assets/images/hero-bg.jpg';
  @Input() primaryCtaText: string = 'Ver Catálogo';
  @Input() secondaryCtaText: string = 'Contacto';

  constructor() {}

  // Desplazarse de manera lineal (Smooth Scroll)
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`La sección con ID "${sectionId}" no fue encontrada.`);
    }
  }
}

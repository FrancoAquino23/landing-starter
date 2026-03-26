/* ==========================================================================
     FEATURES COMPONENT LOGIC
   ========================================================================== */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  readonly ICON_PATH = 'assets/brand/icons/';

  // Beneficios (Features)
  features: FeatureItem[] = [
    {
      icon: 'crosshairs.svg',
      title: 'Tecnología de Punta',
      desc: 'Equipos de última generación para procesos MIG, TIG y arco manual con alta precisión.',
    },
    {
      icon: 'cart.svg',
      title: 'Logística Eficiente',
      desc: 'Entregas garantizadas en 24-48 horas en toda la zona del sureste mexicano.',
    },
    {
      icon: 'user.svg',
      title: 'Respaldo Total',
      desc: 'Garantía directa y soporte técnico especializado para asegurar tu continuidad operativa.',
    },
    {
      icon: 'hammer.svg',
      title: 'Asesoría Experta',
      desc: 'Contamos con ingenieros certificados para optimizar tus procesos de soldadura.',
    },
  ];

  constructor() {}
}

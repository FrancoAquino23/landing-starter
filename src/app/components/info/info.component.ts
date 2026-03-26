/* ==========================================================================
   INFO COMPONENT LOGIC
   ========================================================================== */

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  number: string;
  label: string;
  highlight: boolean;
}

interface Beneficio {
  icon: string;
  titulo: string;
  desc: string;
}

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  // Descripción general
  public sectionTitle = signal('Respaldo Global, Soluciones Locales');
  public subtitle = signal('Liderazgo y Respaldo Regional');
  public mainDescription = signal(`
    En Grupo Austromex, integramos más de seis décadas de liderazgo en la
    fabricación de abrasivos, apoyados de la sólida infraestructura de
    MERSOL en el Sureste de México. Esta alianza estratégica
    nos permite elevar la productividad de tu industria.
  `);

  // KPI'S
  public stats = signal<Stat[]>([
    { number: '60+', label: 'Años de Liderazgo', highlight: true },
    { number: '17+', label: 'Años de Experiencia', highlight: false },
    { number: '2,800+', label: 'Productos', highlight: false },
    { number: '10', label: 'Sucursales', highlight: true },
  ]);

  // Beneficios
  public beneficios = signal<Beneficio[]>([
    {
      icon: 'assets/brand/icons/truck.svg',
      titulo: 'Logística de Respuesta',
      desc: 'Garantizamos stock y entregas eficientes para que la operación nunca se detenga.',
    },
    {
      icon: 'assets/brand/icons/shield.svg',
      titulo: 'Confianza Certificada',
      desc: 'Cada herramienta cuenta con un sello de calidad donde tu integridad es prioridad.',
    },
    {
      icon: 'assets/brand/icons/globe.svg',
      titulo: 'Innovación Sustentable',
      desc: 'Impulsamos tecnologías y recursos optimizando el futuro de la industria.',
    },
  ]);

  constructor() {}
}

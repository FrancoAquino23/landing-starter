/* ==========================================================================
     FAQ LOGIC
   ========================================================================== */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  pregunta: string;
  respuesta: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  // Preguntas & Respuestas
  faqs: FaqItem[] = [
    {
      pregunta: '¿Cuál es el tiempo de entrega de los equipos?',
      respuesta:
        'Contamos con entrega inmediata en la zona metropolitana de Mérida y envíos de 24 a 48 horas a Campeche y Quintana Roo.',
      isOpen: false,
    },
    {
      pregunta: '¿Ofrecen servicio de mantenimiento preventivo?',
      respuesta:
        'Sí, contamos con un equipo técnico especializado para el mantenimiento y reparación de máquinas de soldar de todas las marcas.',
      isOpen: false,
    },
    {
      pregunta: '¿Cómo puedo solicitar una demostración de productos?',
      respuesta:
        'Puedes solicitarla a través de nuestro formulario de contacto o vía WhatsApp. Coordinamos visitas técnicas a tu taller o planta.',
      isOpen: false,
    },
    {
      pregunta: '¿Manejan precios especiales por volumen?',
      respuesta:
        'Correcto, para proyectos industriales o compras al mayoreo de consumibles, ofrecemos planes de descuento personalizados.',
      isOpen: false,
    },
  ];

  // Conocer estado de la pregunta (Abierta / Cerrada)
  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
    this.faqs.forEach((item, i) => {
      if (i !== index) item.isOpen = false;
    });
  }
}

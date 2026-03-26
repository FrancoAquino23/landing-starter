/* ==========================================================================
     BANNER COMPONENT LOGIC
     ========================================================================== */

import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit, OnDestroy {
  public currentIndex = signal(0);
  private autoPlayInterval: any;

  // Información de los banners
  public promociones = [
    {
      id: 1,
      titulo: 'Promo Austromex - Envío Gratis',
      imgDesktop: 'assets/brand/promo/promoH1.webp',
      imgMobile: 'assets/brand/promo/promoV1.webp',
      link: 'https://mersolsureste.com.mx/productos/austromex',
      alt: 'Promoción envío gratis Austromex',
    },
    {
      id: 2,
      titulo: 'Nueva Colección Industrial',
      imgDesktop: 'assets/brand/promo/promoH2.webp',
      imgMobile: 'assets/brand/promo/promoV2.webp',
      link: 'https://mersolsureste.com.mx/ofertas',
      alt: 'Nuevos productos industriales Mersol',
    },
  ];

  ngOnInit(): void {
    this.startAutoPlay();
  }

  // Mejorar rendimiento
  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  // Iniciar cambio automático (5 segundos)
  public startAutoPlay(): void {
    this.stopAutoPlay();
    if (this.promociones.length > 1) {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }

  // Detener temporizador activo
  public stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  // Avanzar al siguiente banner
  public nextSlide(): void {
    const next = (this.currentIndex() + 1) % this.promociones.length;
    this.currentIndex.set(next);
  }

  // Retroceder al anterior banner
  public prevSlide(): void {
    const prev = (this.currentIndex() - 1 + this.promociones.length) % this.promociones.length;
    this.currentIndex.set(prev);
  }

  // Mover banners de acuerdo a interacción de usuario (Avanzar / Retroceder)
  public goToSlide(index: number): void {
    this.currentIndex.set(index);
    this.startAutoPlay();
  }
}

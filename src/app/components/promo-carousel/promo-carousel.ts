import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promo-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promo-carousel.html',
  styleUrl: './promo-carousel.scss',
})
export class PromoCarouselComponent implements OnInit, OnDestroy {
  currentIndex = signal(0);
  private autoPlayInterval: any;
  promociones = [
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

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.stopAutoPlay();
    if (this.promociones.length > 1) {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide(): void {
    const next = (this.currentIndex() + 1) % this.promociones.length;
    this.currentIndex.set(next);
  }

  prevSlide(): void {
    const prev = (this.currentIndex() - 1 + this.promociones.length) % this.promociones.length;
    this.currentIndex.set(prev);
  }

  goToSlide(index: number): void {
    this.currentIndex.set(index);
    this.startAutoPlay();
  }
}

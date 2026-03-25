import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Category {
  title: string;
  image: string;
  color: string;
  link: string;
}

@Component({
  selector: 'app-category-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-carousel.html',
  styleUrl: './category-carousel.scss',
})
export class CategoryCarouselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLElement>;

  private autoPlayInterval: any;
  private readonly INTERVAL_TIME = 5000;
  private isAnimating = false;

  readonly categories: Category[] = [
    {
      title: 'ABRASIVOS SÓLIDOS',
      image: 'assets/categories/solidos.webp',
      color: '#2c3e50',
      link: '#solidos',
    },
    {
      title: 'PRODUCTOS DE LIJA',
      image: 'assets/categories/lija.webp',
      color: '#d35400',
      link: '#lija',
    },
    {
      title: 'PRODUCTOS DE FIBRA',
      image: 'assets/categories/fibra.webp',
      color: '#27ae60',
      link: '#fibra',
    },
    {
      title: 'PULIDO Y LIMPIEZA',
      image: 'assets/categories/pulido.webp',
      color: '#7f8c8d',
      link: '#pulido',
    },
    {
      title: 'ESTÉTICA AUTOMOTRIZ',
      image: 'assets/categories/estetica.webp',
      color: '#c0392b',
      link: '#estetica',
    },
    {
      title: 'CONSTRUCCIÓN',
      image: 'assets/categories/construccion.webp',
      color: '#f39c12',
      link: '#construccion',
    },
    {
      title: 'SUPERABRASIVOS',
      image: 'assets/categories/superabrasivos.webp',
      color: '#2980b9',
      link: '#superabrasivos',
    },
    {
      title: 'RECTIFICADO AUTOMOTRIZ',
      image: 'assets/categories/rectificado.webp',
      color: '#8e44ad',
      link: '#rectificado',
    },
    {
      title: 'CEPILLOS DE ALAMBRE',
      image: 'assets/categories/cepillos.webp',
      color: '#8cb043',
      link: '#cepillos',
    },
    {
      title: 'HERRAMIENTAS',
      image: 'assets/categories/herramientas.webp',
      color: '#3e5f58',
      link: '#herramientas',
    },
    {
      title: 'MÁQUINAS',
      image: 'assets/categories/maquinas.webp',
      color: '#5b548a',
      link: '#maquinas',
    },
    {
      title: 'ACCESORIOS',
      image: 'assets/categories/accesorios.webp',
      color: '#b36b2d',
      link: '#accesorios',
    },
  ];

  ngAfterViewInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  scroll(direction: number, isManual: boolean = true): void {
    if (this.isAnimating || !this.carouselTrack) return;

    if (isManual) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }

    const track = this.carouselTrack.nativeElement;
    const card = track.querySelector('.category-card') as HTMLElement;

    const scrollAmount = card ? card.offsetWidth + 20 : 300;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const currentScroll = track.scrollLeft;

    let targetScroll = currentScroll + direction * scrollAmount;

    if (targetScroll > maxScroll + 10) {
      targetScroll = 0;
    } else if (targetScroll < -10) {
      targetScroll = maxScroll;
    }

    this.animateScrollTo(track, targetScroll, 800);
  }

  private animateScrollTo(element: HTMLElement, target: number, duration: number): void {
    this.isAnimating = true;
    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease =
        progress < 0.5
          ? 8 * progress * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 4) / 2;

      element.scrollLeft = start + change * ease;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.isAnimating = false;
      }
    };

    requestAnimationFrame(animate);
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.scroll(1, false);
    }, this.INTERVAL_TIME);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}

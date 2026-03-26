/* ==========================================================================
   CATEGORY COMPONENT LOGIC
   ========================================================================== */

import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  signal,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryCarouselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLElement>;

  private autoPlayInterval: any;
  private readonly INTERVAL_TIME = 4000;
  private isAnimating = false;

  // Lista de categorías
  private readonly _baseCategories = signal<Category[]>([
    {
      title: 'ABRASIVOS SÓLIDOS',
      image: 'assets/brand/categories/01.webp',
      color: '#d2242a',
      link: 'solidos',
    },
    {
      title: 'PRODUCTOS DE LIJA',
      image: 'assets/brand/categories/02.webp',
      color: '#d2242a',
      link: 'lija',
    },
    {
      title: 'PRODUCTOS DE FIBRA',
      image: 'assets/brand/categories/03.webp',
      color: '#d2242a',
      link: 'fibra',
    },
    {
      title: 'PULIDO Y LIMPIEZA',
      image: 'assets/brand/categories/04.webp',
      color: '#d2242a',
      link: 'pulido',
    },
    {
      title: 'ESTÉTICA AUTOMOTRIZ',
      image: 'assets/brand/categories/05.webp',
      color: '#d2242a',
      link: 'estetica',
    },
    {
      title: 'CONSTRUCCIÓN',
      image: 'assets/brand/categories/06.webp',
      color: '#d2242a',
      link: 'construccion',
    },
    {
      title: 'SUPERABRASIVOS',
      image: 'assets/brand/categories/07.webp',
      color: '#d2242a',
      link: 'superabrasivos',
    },
    {
      title: 'RECTIFICADO AUTOMOTRIZ',
      image: 'assets/brand/categories/08.webp',
      color: '#d2242a',
      link: 'rectificado',
    },
    {
      title: 'CEPILLOS DE ALAMBRE',
      image: 'assets/brand/categories/09.webp',
      color: '#d2242a',
      link: 'cepillos',
    },
    {
      title: 'HERRAMIENTAS',
      image: 'assets/brand/categories/10.webp',
      color: '#d2242a',
      link: 'herramientas',
    },
    {
      title: 'MÁQUINAS',
      image: 'assets/brand/categories/11.webp',
      color: '#d2242a',
      link: 'maquinas',
    },
    {
      title: 'ACCESORIOS',
      image: 'assets/brand/categories/12.webp',
      color: '#d2242a',
      link: 'accesorios',
    },
  ]);

  public displayCategories = computed(() => [
    ...this._baseCategories(),
    ...this._baseCategories().slice(0, 6),
  ]);

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  // Manejar interacción con usuario
  onCategoryClick(category: Category): void {
    if (category.link.startsWith('#')) {
      const element = document.querySelector(category.link);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/productos', category.link]);
    }
  }

  // Manejar lógica de desplazamiento automático
  scroll(direction: number, isManual: boolean = true): void {
    if (this.isAnimating || !this.carouselTrack) return;

    if (isManual) this.stopAutoPlay();

    const track = this.carouselTrack.nativeElement;
    const card = track.querySelector('.category-card') as HTMLElement;
    if (!card) return;

    const gap = 20;
    const scrollAmount = card.offsetWidth + gap;
    const originalWidth = this._baseCategories().length * scrollAmount;

    let targetScroll = track.scrollLeft + direction * scrollAmount;

    this.animateScrollTo(track, targetScroll, 800, () => {
      if (track.scrollLeft >= originalWidth - 1) {
        track.scrollLeft = 0;
      } else if (track.scrollLeft <= 0 && direction === -1) {
        track.scrollLeft = originalWidth;
      }

      if (isManual) this.startAutoPlay();
    });
  }

  private animateScrollTo(
    element: HTMLElement,
    target: number,
    duration: number,
    callback?: () => void,
  ): void {
    this.isAnimating = true;
    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);

      element.scrollLeft = start + change * ease;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.isAnimating = false;
        if (callback) callback();
      }
    };
    requestAnimationFrame(animate);
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => this.scroll(1, false), this.INTERVAL_TIME);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importar componentes
import { PromoCarouselComponent } from '../../../components/promo-carousel/promo-carousel';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, PromoCarouselComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {}

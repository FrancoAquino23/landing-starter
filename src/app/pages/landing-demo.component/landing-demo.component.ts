import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../shared/components/hero/hero';
import { NosotrosComponent } from '../../sections/nosotros/nosotros';
import { PromoCarouselComponent } from '../../components/promo-carousel/promo-carousel';

@Component({
  selector: 'app-landing-demo',
  standalone: true,
  imports: [CommonModule, HeroComponent, PromoCarouselComponent, NosotrosComponent],
  templateUrl: './landing-demo.component.html',
  styleUrl: './landing-demo.component.scss',
})
export class LandingDemoComponent {}

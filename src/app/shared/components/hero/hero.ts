import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCarouselComponent } from '../category-carousel/category-carousel';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, CategoryCarouselComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  constructor() {}

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

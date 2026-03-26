/* ==========================================================================
     LANDING PAGE LOGIC
     ========================================================================== */

import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeroComponent } from '../../components/hero/hero.component';
import { InfoComponent } from '../../components/info/info.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { CategoryCarouselComponent } from '../../components/categories/category.component';
import { ContactFormComponent } from '../../shared/components/contact-form/form.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    BannerComponent,
    InfoComponent,
    CategoryCarouselComponent,
    ContactFormComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements AfterViewInit, OnDestroy {
  private fragmentSub: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
  ) {}

  // Manejar scroll automático
  ngAfterViewInit(): void {
    this.fragmentSub = this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment);
        }, 100);
      }
    });
  }

  // Limpiar componente
  ngOnDestroy(): void {
    if (this.fragmentSub) {
      this.fragmentSub.unsubscribe();
    }
  }
}

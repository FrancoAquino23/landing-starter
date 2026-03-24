import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promo-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promo-carousel.html',
  styleUrl: './promo-carousel.scss',
})
export class PromoCarouselComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  // Determinar si el dispositivo actual es web o móvil
  isMobile$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
    .pipe(map((result) => result.matches));

  // Lista de promociones
  promociones = [
    {
      id: 1,
      titulo: 'Promo Austromex - Envío Gratis',
      // H = Horizontal (Versión Web)
      imgDesktop: 'assets/brand/promo/promoH1.webp',
      // V = Vertical (Versión Móvil)
      imgMobile: 'assets/brand/promo/promoV1.webp',
      link: 'https://mersolsureste.com.mx',
      alt: 'Promoción envío gratis en discos Austromex',
    },
  ];

  ngOnInit(): void {
    // Lógica para carrusel automático
  }
}

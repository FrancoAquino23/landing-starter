import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importar los componentes
import { HeroComponent } from '../../shared/components/hero/hero';
import { NosotrosComponent } from '../../sections/nosotros/nosotros';

@Component({
  selector: 'app-landing-demo',
  standalone: true,
  imports: [CommonModule, HeroComponent, NosotrosComponent],
  templateUrl: './landing-demo.component.html',
  styleUrl: './landing-demo.component.scss',
})
export class LandingDemoComponent implements OnInit {
  ngOnInit(): void {}
}

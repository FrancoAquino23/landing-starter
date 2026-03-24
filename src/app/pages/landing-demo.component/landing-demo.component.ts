import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importar componentes
import { NosotrosComponent } from '../../sections/nosotros/nosotros';

@Component({
  selector: 'app-landing-demo',
  standalone: true,
  imports: [CommonModule, NosotrosComponent],
  templateUrl: './landing-demo.component.html',
  styleUrl: './landing-demo.component.scss',
})
export class LandingDemoComponent implements OnInit {
  // Implementar lógica de componente
  ngOnInit(): void {}
}

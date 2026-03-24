import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinks } from '../../shared/components/social-links/social-links';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SocialLinks],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  // Mostrar año actual
  protected readonly currentYear = new Date().getFullYear();
}

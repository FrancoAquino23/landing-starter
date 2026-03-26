/* ==========================================================================
   CONTACT FORMS LOGIC
   ========================================================================== */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializar estructura
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      empresa: [''],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // Activar al enviar
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Datos del Lead:', this.contactForm.value);
      this.contactForm.reset();
      alert('¡Gracias! Tu solicitud de cotización ha sido enviada.');
    } else {
      // Mostrar errores visuales
      this.contactForm.markAllAsTouched();
    }
  }
}

/* ==========================================================================
     ROOT COMPONENT TESTS
   ========================================================================== */

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  // Verificar carga correcta del componente
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Verificar carga correcta del título
  it(`should have the 'Austromex - Soluciones Industriales' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app['title']()).toEqual('Austromex - Soluciones Industriales');
  });
});

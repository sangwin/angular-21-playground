/**
 * Project: Angular 21 Demo Playground
 * Description: Angular 21 Demo Playground for fun demo
 * Author: Sangwin Gawande
 * GitHub: https://github.com/sangwin
 * Date: 2025-11-22
 */

import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, demo-app-21');
  });
});
/**
 * Project: Angular 21 Demo Playground
 * Description: Angular 21 Demo Playground for fun demo
 * Author: Sangwin Gawande
 * GitHub: https://github.com/sangwin
 * Date: 2025-11-22
 */
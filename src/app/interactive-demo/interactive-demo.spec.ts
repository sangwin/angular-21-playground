/**
 * Project: Angular 21 Demo Playground
 * Description: Angular 21 Demo Playground for fun demo
 * Author: Sangwin Gawande
 * GitHub: https://github.com/sangwin
 * Date: 2025-11-22
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveDemo } from './interactive-demo';

describe('InteractiveDemo', () => {
  let component: InteractiveDemo;
  let fixture: ComponentFixture<InteractiveDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/**
 * Project: Angular 21 Demo Playground
 * Description: Angular 21 Demo Playground for fun demo
 * Author: Sangwin Gawande
 * GitHub: https://github.com/sangwin
 * Date: 2025-11-22
 */


/**
 * Project: Angular 21 Demo Playground
 * Description: Angular 21 Demo Playground for fun demo
 * Author: Sangwin Gawande
 * GitHub: https://github.com/sangwin
 * Date: 2025-11-22
 */

import { Component, signal } from '@angular/core';
import { InteractiveDemoComponent } from './interactive-demo/interactive-demo';

@Component({
  selector: 'app-root',
  imports: [InteractiveDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo-app-21');
}

/**
 * Project: Angular 21 Demo Playground
 * Description: Angular 21 Demo Playground for fun demo
 * Author: Sangwin Gawande
 * GitHub: https://github.com/sangwin
 * Date: 2025-11-22
 */
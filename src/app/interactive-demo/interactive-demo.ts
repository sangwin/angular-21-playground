/**
 * Project: Angular 21 Demo Playground
 * Description: Angular 21 Demo Playground for fun demo
 * Author: Sangwin Gawande
 * GitHub: https://github.com/sangwin
 * Date: 2025-11-22
 */

import { CommonModule } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interactive-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './interactive-demo.html',
  styleUrls: ['./interactive-demo.scss']
})
export class InteractiveDemoComponent {
  // Signals
  text = signal('Hello Angular 21!');
  size = signal(30);
  color = signal('#0084ff');
  textReverse = signal(false);

  // Form controls
  textControl = new FormControl(this.text());
  sizeControl = new FormControl(this.size());
  colorControl = new FormControl(this.color());
  reverseControl = new FormControl(this.textReverse());

  // Sync form → signals
  constructor() {
    this.textControl.valueChanges.subscribe(v => this.text.set(v || ''));
    this.sizeControl.valueChanges.subscribe(v => this.size.set(Number(v) || 20));
    this.colorControl.valueChanges.subscribe(v => this.color.set(v || '#000000'));
    this.reverseControl.valueChanges.subscribe(v => this.textReverse.set(v || false));
  }

  // Computed preview style
  previewStyle = computed(() => ({
    color: this.color(),
    fontSize: this.size() + 'px',
    transition: '0.2s ease'
  }));
}

/**
 * Project: Angular 21 Demo Playground
 * Description: Angular 21 Demo Playground for fun demo
 * Author: Sangwin Gawande
 * GitHub: https://github.com/sangwin
 * Date: 2025-11-22
 */
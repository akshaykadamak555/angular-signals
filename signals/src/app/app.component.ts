import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public name = signal('Akshay');

  public updateName(newName: string) {
    this.name.set(newName);
  }

  counter = signal(0);

  buttonClicked() {
    this.counter.update(current => current + 1);
  }
}

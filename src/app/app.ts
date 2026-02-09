import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navComponent } from './components/nav/nav-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,navComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('mppAngular');
  
}

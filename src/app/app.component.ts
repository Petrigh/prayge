import { Component } from '@angular/core';
import { God } from '../assets/models/god';
import { RandomGodsService } from '../assets/services/random-gods.service';
import { GodComponent } from './components/god/god.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'god-generator';
  god!: God;

  constructor(private randomGodsService: RandomGodsService) {}

  generateGod() {
    this.god = this.randomGodsService.generateRandomGod();
  }
}

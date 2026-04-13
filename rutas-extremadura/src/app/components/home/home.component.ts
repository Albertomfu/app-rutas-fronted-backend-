import { Component } from '@angular/core';
import { ExtremaduraMapComponent } from '../../shared/extremadura-map/extremadura-map.component';
import { MainComponent } from '../../shared/main/main.component';

@Component({
  selector: 'app-home',
  imports: [ExtremaduraMapComponent, MainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

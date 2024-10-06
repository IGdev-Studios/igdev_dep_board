import { Component } from '@angular/core';
import { HomeHeaderComponent } from "./home-header/home-header.component";
import { HomeHeroComponent } from "./home-hero/home-hero.component";
import { HomeCardsComponent } from "./home-cards/home-cards.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, HomeHeroComponent, HomeCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

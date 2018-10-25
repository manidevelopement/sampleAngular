import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero;
  heroes: Hero [];
  selectedHero: Hero;
  insertJsonString: String;
  constructor(private heroService : HeroService) { }

  ngOnInit() {
    //this.hero = "Mani";
    this.hero = {
      id: 1,
      name: 'Mani'
    };
    this.heroes = [
      {id: 1, name: 'Mani'},
      {id: 2, name: 'Vinoth'}
    ];
    this.getUsers();
  }
  onSelected(hero: Hero): void{
    this.selectedHero = hero;
  }
  getUsers() : void{
    this.heroService.getUsers()
    .subscribe(result => {
      console.log("result", result);
    });
  }
  addUser() : void{
    
  }
}

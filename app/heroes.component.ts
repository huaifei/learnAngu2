import { Component , OnInit } from '@angular/core';
import { HeroDetailComponent } from'./hero-details.component'
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives : [ HeroDetailComponent ]
    // providers : [HeroService]
})


export class HeroesComponent implements OnInit {
    //TODO:know the difference between : and =
    // title = 'tour of heroes';
    heroes : Hero[];
    selectedHero : Hero;

    constructor(
        private router: Router,
        private heroService: HeroService) { }
    // TODO: private is in AppComponent

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes); //TODO: know the arrow function
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero : Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}


import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})

@Injectable()
export class MenuComponent implements OnInit {

  activeLink = '';

  constructor( private router: Router ) {}

  ngOnInit() {}

  navigateTo($link) {
    this.activeLink = $link;
    this.router.navigate([$link], {skipLocationChange: true});
  }
}

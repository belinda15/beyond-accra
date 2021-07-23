import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-night-life',
  templateUrl: './night-life.component.html',
  styleUrls: ['./night-life.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(
        ':enter',
        [
          style({opacity: 0}),
          animate('0.5s ease-out',
            style({opacity: 1}))
        ]
      )
    ]),
    trigger('fadeOut', [
      transition(
        ':leave',
        [
          style({opacity: 1}),
          animate('0.5s ease-in',
            style({opacity: 0}))
        ]
      )
    ])
  ]
})
export class NightLifeComponent implements OnInit {

  bgOne = './assets/images/night-one.png';
  bgTwo = './assets/images/night-two.png';
  bgThree = './assets/images/night-three.png';
  bgFour = './assets/images/book-one.png';
  bgFive = './assets/images/book-two.png';


  viewMenu = false;
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci ac auctor augue mauris augue. Eu feugiat pretium nibh ipsum';
  textOne = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci ac auctor augue mauris augue. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Ut ';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
      'menu-alt',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/menu-ic-alt.svg'));
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/menu-ic.svg'));

    iconRegistry.addSvgIcon(
      'message',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/message.svg'));

    iconRegistry.addSvgIcon(
      'more',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/more-ic.svg'));
  }

  ngOnInit(): void {
  }

  viewMenuDisplay(): void {
    this.viewMenu = !this.viewMenu;
  }
  closeMenu(event): void{
    this.viewMenu = event;
  }

}

import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(
        ':enter',
        [
          style({opacity: 0}),
          animate('1s ease-out',
            style({opacity: 1}))
        ]
      )
    ]),
    trigger('fadeOut', [
      transition(
        ':leave',
        [
          style({opacity: 1}),
          animate('1s ease-in',
            style({opacity: 0}))
        ]
      )
    ])
  ]
})
export class HomeComponent implements OnInit {

  viewMenu = false;
  accomadtionOptions = [
    'SUPERIOR', 'DELUXE', 'PRIVILEGE', 'JUNIOR SUITE', 'COUPLES SUITE', 'SINGLE SUITE'
  ];
  selectedAccomodation = 0;
  selectedNightLife = 0;
  nightLifeOptions = [
    'CLUBS', 'RESTAURANTS', 'BARS', 'ROOFTOPS'
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/menu-ic.svg'));

    iconRegistry.addSvgIcon(
      'message',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/message.svg'));

    iconRegistry.addSvgIcon(
      'more',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/more-ic.svg'));

    iconRegistry.addSvgIcon(
      'right',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/arrow-right-home.svg'));

    iconRegistry.addSvgIcon(
      'arrow-left',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/home-arrow-left.svg'));

    iconRegistry.addSvgIcon(
      'arrow-right',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/home-arrow-right.svg'));






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
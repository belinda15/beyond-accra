import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {animate, style, transition, trigger} from '@angular/animations';





@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss'],
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
export class AccomodationComponent implements OnInit {

  viewMenu = false;
  selected: {startDate: '', endDate: ''};
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {


    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/menu-ic.svg'));
  }

  accomadtionOptions = [
    'SUPERIOR', 'DELUXE', 'PRIVILEGE', 'JUNIOR SUITE', 'COUPLES SUITE', 'SINGLE SUITE'
  ];
  selectedAccomodation = 0;
  bgOne = './assets/images/acc-home.png';
  bgTwo = './assets/images/acc-sample.png';
  bgThree = './assets/images/acc-sample-two.png';



  ngOnInit(): void {

    const adminIds = ['test admin', 'test admin 1', 'test admin 2', 'test admin 3'];
    const userIds = ['test user', 'test user 1', 'test user 2', 'test user 3', 'test user 4', 'test user 5', 'test user 6', 'test user 7', 'test user 8']


  }

  viewMenuDisplay(): void {
    this.viewMenu = !this.viewMenu;
  }
  closeMenu(event): void{
    this.viewMenu = event;
  }





}

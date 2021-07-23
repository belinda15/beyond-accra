import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
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
export class BlogComponent implements OnInit {
  viewMenu = false;

  bgOne = './assets/images/blog-one.png';
  bgTwo = './assets/images/blog-two.png';
  bgThree = './assets/images/gal-home.png';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {


    iconRegistry.addSvgIcon(
      'menu-alt',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/menu-ic-alt.svg'));

    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/menu-ic-alt.svg'));
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

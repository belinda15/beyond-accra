import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
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
export class BlogDetailsComponent implements OnInit {
  viewMenu = false;

  bgOne = './assets/images/blog-details.png';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {


    iconRegistry.addSvgIcon(
      'menu-alt',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/menu-ic-alt.svg'));

    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/menu-ic-alt.svg'));

    iconRegistry.addSvgIcon(
      'arrow',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/arrow.svg'));
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

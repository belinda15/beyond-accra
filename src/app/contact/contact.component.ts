import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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
export class ContactComponent implements OnInit {

  viewMenu = false;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {


    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/menu-ic.svg'));

    iconRegistry.addSvgIcon(
      'fb',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/fb.svg'));

    iconRegistry.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/twitter.svg'));

    iconRegistry.addSvgIcon(
      'ig',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/ig.svg'));
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

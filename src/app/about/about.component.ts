import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}

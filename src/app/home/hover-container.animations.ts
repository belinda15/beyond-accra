import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

const animateIn = '0.4s ease-in';
const animateOut = '0.4s ease-out';

const styleIdle = { transform: 'translate3d(0, 0, 0)' };
const styleTop = { transform: 'translate3d(0, -100%, 0)' };
const styleRight = { transform: 'translate3d(100%, 0, 0)' };
const styleBottom = { transform: 'translate3d(0, 100%, 0)' };
const styleLeft = { transform: 'translate3d(-100%, 0, 0)' };

export const HoverContainerAnimations = [
  trigger('hover', [
    state('*', style(styleIdle)),
    transition('* => in-left', [
      style(styleLeft),
      style({opacity: 0}),
      animate(animateIn),
      style({opacity: 1})
    ]),
    transition('* => in-right', [
      style(styleRight),
      style({opacity: 0}),
      animate(animateIn),
      style({opacity: 1})
    ]),
    transition('* => in-top', [
      style(styleTop),
      style({opacity: 0}),
      animate(animateIn),
      style({opacity: 1})
    ]),
    transition('* => in-bottom', [
      style(styleBottom),
      style({opacity: 0}),
      animate(animateIn),
      style({opacity: 1})
    ]),
    transition('* => out-right', [
      animate(animateOut, style(styleRight))
    ]),
    transition('* => out-left', [
      animate(animateOut, style(styleLeft))
    ]),
    transition('* => out-top', [
      animate(animateOut, style(styleTop))
    ]),
    transition('* => out-bottom', [
      animate(animateOut, style(styleBottom))
    ]),
  ])
];

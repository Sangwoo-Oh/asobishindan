import {
  trigger,
  animate,
  transition,
  query,
  style,
  group,
  animateChild,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('intro01 => intro02, intro02 => intro03', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ right: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({ right: '100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ right: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('intro03 => intro02, intro02 => intro01', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);

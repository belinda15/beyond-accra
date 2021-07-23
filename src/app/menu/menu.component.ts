import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() onClose = new EventEmitter();
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
      'close',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/close.svg'));

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

  close(): void{
    this.onClose.emit(false);
  }

}

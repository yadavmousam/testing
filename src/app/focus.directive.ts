import {
  Directive,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {
  @HostBinding("style.background-color") backgroundColor?: string;

  @HostListener('mouseover') onHover() {
    this.backgroundColor = 'red';
  }

  @HostListener('mouseout') onLeave() {
    this.backgroundColor = 'inherit';
  }

}

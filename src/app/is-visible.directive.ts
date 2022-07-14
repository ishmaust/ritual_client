import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {

  @Input('appIsVisible') isVisible: boolean = true;

  constructor(private el: ElementRef) {
    el.nativeElement.isVisible = this.isVisible;
  }

}

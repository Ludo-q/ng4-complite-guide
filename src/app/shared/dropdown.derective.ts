import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  opened = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event.target'])
  mouseClick() {
    if (this.opened) {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
      this.opened = false;
    } else {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
      this.opened = true;
    }
  }
}

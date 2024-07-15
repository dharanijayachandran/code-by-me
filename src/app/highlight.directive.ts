import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef, private render:Renderer2){}

  @HostListener('mouseenter') onMouseEnter(){
    this.render.setStyle(this.el.nativeElement, 'background-color','yellow')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.render.setStyle(this.el.nativeElement,'background-color',null)
  }
}

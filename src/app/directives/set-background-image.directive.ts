import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackImage]'
})
export class SetBackgroundImageDirective {

  @Input() imageUrl:string = '';

  constructor(private elementRef:ElementRef, private renderer: Renderer2) {

  }

  ngOnChanges() {
      this.renderer.setStyle(
          this.elementRef.nativeElement,
          'backgroundImage',
          `url(${this.imageUrl})`
      );
  }

}

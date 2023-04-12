import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[size]'
})
export class SizeDirective {

  @Input() height:string = '';
  @Input() width:string = '';

  constructor(private elementRef:ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
      this.renderer.setStyle(
          this.elementRef.nativeElement,
          'height',
          `${this.height}`
      );
      this.renderer.setStyle(
          this.elementRef.nativeElement,
          'width',
          `${this.width}`
      );
  }

}

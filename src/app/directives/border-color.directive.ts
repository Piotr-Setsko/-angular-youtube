import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnInit {

  @Input() private itemDate: number;
  public borderBottom: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    if (this.itemDate < 7) {
      this.borderBottom = 'blueClass';
    } else if (this.itemDate < 30) {
      this.borderBottom = 'greenClass';
    } else if (this.itemDate < 180) {
      this.borderBottom = 'yellowClass';
    } else {
      this.borderBottom = 'redClass';
    }
    this.renderer.addClass(this.elementRef.nativeElement, this.borderBottom);
  }
}

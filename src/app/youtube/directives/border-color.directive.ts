import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnInit {

  @Input() private itemDate: number;
  public borderBottom: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    this.itemDate = (+new Date() - new Date(this.itemDate).getTime()) / (1000 * 60 * 60 * 24);
    if (this.itemDate < 7) {
      this.borderBottom = 'weekClass';
    } else if (this.itemDate < 30) {
      this.borderBottom = 'monthClass';
    } else if (this.itemDate < 180) {
      this.borderBottom = 'lessSixMonthClass';
    } else {
      this.borderBottom = 'moreSixMonthClass';
    }
    this.renderer.addClass(this.elementRef.nativeElement, this.borderBottom);
  }
}

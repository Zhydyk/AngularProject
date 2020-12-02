import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[coursePlate]'
})
export class CoursePlateDirective implements OnInit{
  @Input('coursePlate') public date: Date;

  constructor(private element: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.changeBorder();
  }

  public changeBorder(): void {
    const currentDate = Date.now();
    const creationDate = this.date.getDate();
    const milisecondsPerDay = 86400000;

    if (creationDate < currentDate && creationDate >= (currentDate - 14 * milisecondsPerDay)) {
      this.render.addClass(this.element.nativeElement, 'fresh');
    }
    else if (creationDate > currentDate) {
      this.render.addClass(this.element.nativeElement, 'upcoming');
    }
  }

}

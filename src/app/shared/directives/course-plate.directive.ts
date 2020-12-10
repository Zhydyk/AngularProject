import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[coursePlate]'
})
export class CoursePlateDirective implements OnInit{
  @Input('coursePlate') public date: Date;

  constructor(private element: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.changeBorder();
  }

  public changeBorder(): void {
    const currentDate = +Date.now();
    const creationDate = +new Date(this.date);
    const milisecondsPerDay = 86400000;
    const isFresh = creationDate < currentDate && creationDate >= (currentDate - 14 * milisecondsPerDay)
    if (isFresh) {
      this.render.addClass(this.element.nativeElement, 'fresh');
    } else{
      this.render.addClass(this.element.nativeElement, 'upcoming');
    }
  }

}

import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[crsHighlightBorder]'
})
export class HighlightBorderDirective {

  @Input('crsHighlightBorder') date: Date;

  constructor(
    private el: ElementRef,
    private readonly renderer: Renderer2,
    ) {}

  ngOnInit() {
      const today = new Date()
      if (  this.date.getTime() < today.getTime() && 
            this.date.getTime() >= this.addDays(today, -14).getTime()) {
          this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid green');
      } else if ( this.date.getTime() > today.getTime() ) {
        this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid blue');
      }
    }

    private addDays(date, daysToAdd) {
      const MILLISECONDS_IN_ONE_DAY = 24*3600*1000;
      return new Date(date.getTime() + daysToAdd*MILLISECONDS_IN_ONE_DAY); 
    }
}

import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[crsBorderHighliter]'
})
export class BorderHighliterDirective {

  @Input('crsBorderHighliter') date: Date;

  constructor(private el: ElementRef) {}


  ngOnInit() {
      const today = new Date()
      if (  this.date.getTime() < today.getTime() && 
            this.date.getTime() >= this.addDays(today, -14).getTime()) {
        this.el.nativeElement.style.border = '2px solid green';
      } else if ( this.date.getTime() > today.getTime() ) {
        this.el.nativeElement.style.border = '2px solid blue';
      }
    }


    private addDays(date, daysToAdd) {
      const MILLISECONDS_IN_ONE_DAY = 24*3600*1000;
      return new Date(date.getTime() + daysToAdd*MILLISECONDS_IN_ONE_DAY); 
    }


}
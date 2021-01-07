import { Component, OnInit, Input, forwardRef, Self, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl, NgControl, NgForm, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'crs-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateComponent),
      multi: true
    }
  ],
})
export class DateComponent implements OnInit, ControlValueAccessor {

  @ViewChild('control', {static: true, read: ElementRef}) 
  inputElementRef: ElementRef;
  @Input() date: string;
  courseDate = new FormControl('');

  onTouched = () => {};
  onChange = _ => {};


  ngOnInit() {}

  onBlur() {
    this.onTouched();
  }

  onInputChange() {
    const value = this.inputElementRef.nativeElement.value;
    this.onChange(value);
  }

  writeValue(obj: any) {
    this.courseDate.setValue(obj);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
   }

  registerOnTouched(fn: any) { 
    this.onTouched = fn;
  }

  validate( { value }: FormControl) {}

}

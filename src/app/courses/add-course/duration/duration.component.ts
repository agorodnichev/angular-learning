import { Component, OnInit, Input, forwardRef, Self, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl, NgControl, NgForm, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
@Component({
  selector: 'crs-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DurationComponent),
      multi: true
    }
  ],
})
export class DurationComponent implements OnInit, ControlValueAccessor {
  
  @ViewChild('control', {static: true, read: ElementRef}) 
  inputElementRef: ElementRef;
  // @Input() duration: number = 0;
  courseDuration = new FormControl('');

  onTouched = () => {};
  onChange = _ => {};

  ngOnInit(): void {
  }

  onBlur() {
    this.onTouched();
  }

  onInputChange() {
    const value = this.inputElementRef.nativeElement.value;
    this.onChange(value);
  }

  writeValue(obj: any) {
    this.courseDuration.setValue(obj);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
   }

  registerOnTouched(fn: any) { 
    this.onTouched = fn;
  }

  validate( { value }: FormControl) {}

}

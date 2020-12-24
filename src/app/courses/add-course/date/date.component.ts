import { Component, OnInit, Input, forwardRef, Self } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl, NgControl, NgForm, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'crs-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  // providers: [
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   useExisting: forwardRef(() => DateComponent),
    //   multi: true
    // },
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: forwardRef(() => DateComponent),
    //   multi: true
    // }
  // ],
})
export class DateComponent implements OnInit, ControlValueAccessor {

  @Input() date: string;
  // courseDate = new FormControl('')

  constructor(
    @Self() public ngControl: NgControl,
  ) { 
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
  }

  writeValue(obj: any) {}

  registerOnChange(fn: any) { }

  registerOnTouched(fn: any) { }

  setDisabledState?(isDisabled: boolean) { }

}

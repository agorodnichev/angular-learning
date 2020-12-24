import { Component, OnInit, Input, forwardRef, Self } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl, NgControl, NgForm, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
@Component({
  selector: 'crs-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css'],
})
export class DurationComponent implements OnInit, ControlValueAccessor {

  // @Input() duration: number = 0;
  // value = new FormControl('', [Validators.required]);

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

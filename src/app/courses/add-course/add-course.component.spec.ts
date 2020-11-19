import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCourseComponent } from './add-course.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseComponent, DateComponentMock, DurationComponentMock ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('saveHandler should be called on click', () => {
    const saveButton = fixture.debugElement.query(By.css('.save'));
    spyOn(component, 'saveHandler');
    saveButton.triggerEventHandler('click', null);
    expect(component.saveHandler).toHaveBeenCalled();
  });

  it('cancelHandler should be called on click', () => {
    const cancelButton = fixture.debugElement.query(By.css('.cancel'));
    spyOn(component, 'cancelHandler');
    cancelButton.triggerEventHandler('click', null);
    expect(component.cancelHandler).toHaveBeenCalled();
  });

});

@Component({
  selector: 'crs-date',
  template: `<div></div>`
})
class DateComponentMock {
}

@Component({
  selector: 'crs-duration',
  template: `<div></div>`
})
class DurationComponentMock {
}
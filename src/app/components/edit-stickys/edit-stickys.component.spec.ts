import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { EditStickysComponent } from './edit-stickys.component';

describe('EditStickysComponent', () => {
  let component: EditStickysComponent;
  let fixture: ComponentFixture<EditStickysComponent>;
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStickysComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStickysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('should navigate to the sticky form page', () => {

  //   const component = fixture.componentInstance;
  //   const navigateSpy = spyOn(router, 'navigate');

  //   component.saveNote();
  //   expect(navigateSpy).toHaveBeenCalledWith(['/sticky'])

  // })




});

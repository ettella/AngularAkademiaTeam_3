import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { EditStickysComponent } from './edit-stickys.component';

describe('EditStickysComponent', () => {
  let component: EditStickysComponent;
  let fixture: ComponentFixture<EditStickysComponent>;

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
});

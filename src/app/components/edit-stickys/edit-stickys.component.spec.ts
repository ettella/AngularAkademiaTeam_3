import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStickysComponent } from './edit-stickys.component';

describe('EditStickysComponent', () => {
  let component: EditStickysComponent;
  let fixture: ComponentFixture<EditStickysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStickysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStickysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

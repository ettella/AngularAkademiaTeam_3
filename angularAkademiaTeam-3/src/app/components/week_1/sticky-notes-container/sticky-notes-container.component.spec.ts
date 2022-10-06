import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNotesContainerComponent } from './sticky-notes-container.component';

describe('StickyNotesContainerComponent', () => {
  let component: StickyNotesContainerComponent;
  let fixture: ComponentFixture<StickyNotesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyNotesContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyNotesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

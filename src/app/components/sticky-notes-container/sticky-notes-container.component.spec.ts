import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { StickyNotesContainerComponent } from './sticky-notes-container.component';

describe('StickyNotesContainerComponent', () => {
  let component: StickyNotesContainerComponent;
  let fixture: ComponentFixture<StickyNotesContainerComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyNotesContainerComponent ],
      imports: [AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyNotesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new note', ()=>{
    const textInput: HTMLInputElement = el.querySelector('#text');

    //Set values
    textInput.value = 'Test text';
    textInput.dispatchEvent(new Event('input'));

    //Submit form
    const form:HTMLFormElement = el.querySelector('#form');
    form.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    //check if note was created
    expect(el.querySelectorAll('.notes').length).toBe(4);

  })

});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { EditStickysComponent } from '../edit-stickys/edit-stickys.component';
import { StickyNotesContainerComponent } from './sticky-notes-container.component';

describe('StickyNotesContainerComponent', () => {
  let component: StickyNotesContainerComponent;
  let editComponent: EditStickysComponent;
  let fixture: ComponentFixture<StickyNotesContainerComponent>;
  let fixtureEditComponent: ComponentFixture<EditStickysComponent>;
  let el: any;
  let elEdit: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyNotesContainerComponent ],
      imports: [AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyNotesContainerComponent);
    fixtureEditComponent = TestBed.createComponent(EditStickysComponent)
    component = fixture.componentInstance;
    editComponent = fixtureEditComponent.componentInstance
    fixture.detectChanges();
    el = fixture.debugElement.nativeElement;
    elEdit = fixtureEditComponent.debugElement.nativeElement
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

  it('should delete the selected note', () => {
    expect(el.querySelectorAll('.notes').length).toBe(4);
    const deleteIcon = el.querySelector('#delete')
    deleteIcon.dispatchEvent(new Event('click'))
    fixture.detectChanges();
    expect(el.querySelectorAll('.notes').length).toBe(3);
  })

  it('should delete all notes on Delete all CTA', () => {
    expect(el.querySelectorAll('.notes').length).toBe(4);
    const deleteIcon = el.querySelector('#deleteall')
    deleteIcon.dispatchEvent(new Event('click'))
    fixture.detectChanges();
    expect(el.querySelectorAll('.notes').length).toBe(0);
  })

  it('should be align items to the center horizontally', () => {
    const noteContainer: HTMLElement = el.querySelector('.notes-container')
    el.querySelector('#horizontal-center').dispatchEvent(new Event('click'))
    fixture.detectChanges()
    expect(el.querySelector('.notes-container').getAttribute("style").endsWith("center;")).toBeTrue()
  })

  it('should be align items to the start horizontally', () => {
    const noteContainer: HTMLElement = el.querySelector('.notes-container')
    el.querySelector('#horizontal-start').dispatchEvent(new Event('click'))
    fixture.detectChanges()
    expect(el.querySelector('.notes-container').getAttribute("style").endsWith("start;")).toBeTrue()
  })

  it('should be align items to the end horizontally', () => {
    const noteContainer: HTMLElement = el.querySelector('.notes-container')
    el.querySelector('#horizontal-end').dispatchEvent(new Event('click'))
    fixture.detectChanges()
    expect(el.querySelector('.notes-container').getAttribute("style").endsWith("end;")).toBeTrue()
  })

  it('should be align items to the centered space-between horizontally', () => {
    const noteContainer: HTMLElement = el.querySelector('.notes-container')
    el.querySelector('#horizontal-space-between').dispatchEvent(new Event('click'))
    fixture.detectChanges()
    expect(el.querySelector('.notes-container').getAttribute("style").endsWith("space-between;")).toBeTrue()
  })

  it('should be align items to space-between vertically', () => {
    const noteContainer: HTMLElement = el.querySelector('.notes-container')
    el.querySelector('#vertical-center').dispatchEvent(new Event('click'))
    fixture.detectChanges()
    expect(el.querySelector('.notes-container').getAttribute("style").startsWith("place-content: center")).toBeTrue()
  })

  it('should be align items to the start vertically', () => {
    const noteContainer: HTMLElement = el.querySelector('.notes-container')
    el.querySelector('#vertical-start').dispatchEvent(new Event('click'))
    fixture.detectChanges()
    expect(el.querySelector('.notes-container').getAttribute("style").startsWith("place-content: start")).toBeTrue()
  })

  it('should be align items to the end vertically', () => {
    const noteContainer: HTMLElement = el.querySelector('.notes-container')
    el.querySelector('#vertical-end').dispatchEvent(new Event('click'))
    fixture.detectChanges()
    expect(el.querySelector('.notes-container').getAttribute("style").startsWith("place-content: end")).toBeTrue()
  })

  it('should be align items to space-between vertically', () => {
    const noteContainer: HTMLElement = el.querySelector('.notes-container')
    el.querySelector('#vertical-space-between').dispatchEvent(new Event('click'))
    fixture.detectChanges()
    expect(el.querySelector('.notes-container').getAttribute("style").startsWith("place-content: space-between")).toBeTrue()
  })

  xit('should edit the sticky note', () => {
    const editButton: HTMLElement = el.querySelector('#edit')
    editButton.dispatchEvent(new Event('click'))
    const textArea: HTMLInputElement = elEdit.querySelector(".mat-input-element")
    textArea.value = 'This is now edited';
    textArea.dispatchEvent(new Event('input'));
    const saveButton: HTMLElement = elEdit.querySelector('#saveNote')
    fixtureEditComponent.detectChanges()
    saveButton.dispatchEvent(new Event('click'))
    const stickyNote: HTMLElement = el.querySelector('.notes')
    fixture.detectChanges()
    expect(stickyNote.innerHTML).toEqual(' This is now edited ')
  })

});

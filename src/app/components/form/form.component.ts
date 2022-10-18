import { ActivatedRoute } from '@angular/router';
import { Notes } from '../../domain/notes-model';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlignTextService } from '../../service/align-text.service';
import { EditStickysService } from '../../service/edit-stickys.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  stickyItem!: Notes;
  notes = this.editStickysService.notes;
  currentId!: number;
  newNote: Notes = new Notes();

  constructor(
    fb: FormBuilder,
    public alignTextService: AlignTextService,
    public editStickysService: EditStickysService,
    public activatedRoute: ActivatedRoute
  ) {
    this.form = fb.group({
      text: ['', Validators.required],
    });
  }

  get text(): FormControl {
    return this.form.get('text') as FormControl;
  }

  ngOnInit(): void {
    if (this.currentId == 0) {
      this.stickyItem = this.newNote;
    }
    this.currentId = this.activatedRoute.snapshot.params['id'];
  }

  public onSetAlignText(v: string): void {
    this.alignTextService.alignTextHor = v;
  }

  public onSetAlignTextVert(v: string): void {
    this.alignTextService.alignTextVert = v;
  }

  public deleteNotes(note: Notes): void {
    this.editStickysService.deleteNote(note);
  }

  public addNote(): void {
    let addedSticky: Notes = this.form.value as Notes;
    this.editStickysService.addNote(addedSticky);
  }

  public deleteAll(): void {
    this.notes.splice(0, this.notes.length);
  }
}

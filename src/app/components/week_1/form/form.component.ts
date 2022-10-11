
import { ActivatedRoute } from '@angular/router';
import { Notes } from './../models/notes-model';
import {
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import {
  Component,
  OnInit,
} from '@angular/core';
import { AlignTextService } from '../service/align-text.service';
import { EditStickysService } from '../service/edit-stickys.service';

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
    public activatedRoute: ActivatedRoute,
  ) {
    this.form = fb.group({
      text: [''],
    });
    this.currentId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.currentId == 0) {
      this.stickyItem = this.newNote;
    }
  }

  onSetAlignText(v: string): any {
    this.alignTextService.alignTextHor = v;
  }

  onSetAlignTextVert(v: string): any {
    this.alignTextService.alignTextVert = v;
  }

  deleteNotes(note: Notes) {
    this.editStickysService.deleteNote(note);
  }

  addNote() {
    let addedSticky: Notes = this.form.value as Notes;
    this.editStickysService.addNote(addedSticky);
  }

  deleteAll() {
    this.notes.splice(0, this.notes.length);
  }


}

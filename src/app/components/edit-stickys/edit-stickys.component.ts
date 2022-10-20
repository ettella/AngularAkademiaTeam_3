import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Notes } from '../../domain/notes-model';
import { EditStickysService } from '../../service/edit-stickys.service';

@Component({
  selector: 'app-edit-stickys',
  templateUrl: './edit-stickys.component.html',
  styleUrls: ['./edit-stickys.component.scss']
})
export class EditStickysComponent implements OnInit {
  form: FormGroup;
  selectedNote!: Notes
  currentId!: number;
  newNote: Notes = new Notes();

  constructor(fb: FormBuilder, private editStickysService: EditStickysService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = fb.group({
      id: [Number],
      text: ['']
    })
  }

  get text(): FormControl {
    return this.form.get('text') as FormControl;
  }

  ngOnInit(): void {
    this.currentId = this.activatedRoute.snapshot.params['id'];
    if (this.currentId == 0) {
      this.selectedNote = this.newNote;
    } else {
      this.selectedNote = this.editStickysService.getNoteById(this.currentId);

      const { id, text } = this.selectedNote;
      this.form.patchValue({
        id, text
      })
    }
  }


  saveNote(){
    let addedSticky: Notes = this.form.value as Notes;
    if (this.currentId == 0) {
      this.editStickysService.addNote(addedSticky);
    } else {
      this.editStickysService.saveNote(addedSticky);
    }
    this.router.navigate(['sticky']);
  }

}

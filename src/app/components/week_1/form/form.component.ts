import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Notes } from './../models/notes-model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { AlignTextService } from '../service/align-text.service';
import { EditStickysService } from '../service/edit-stickys.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // @Output() add = new EventEmitter<string>();
  // @Output() deletePosts = new EventEmitter<string[]>();
  // @Input() notes : string[] = []
  // stickyNote: Notes;
  form: FormGroup;
  stickyItem!: Notes
  notes = this.editStickysService.notes;
  currentId!: number;
  newNote: Notes = new Notes();

  constructor(fb: FormBuilder, public alignTextService: AlignTextService, public editStickysService: EditStickysService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = fb.group({
      text: ['']
    })
    this.currentId = activatedRoute.snapshot.params['id'];

  }

  ngOnInit(): void {
    if (this.currentId == 0) {
      this.stickyItem = this.newNote;
    } 
  }


  onSetAlignText(v: string): any{
    this.alignTextService.alignText = v
  }

  
  deleteNotes(note: Notes){
    this.editStickysService.deleteNote(note)
  }

  addNote(){
    let addedSticky: Notes = this.form.value as Notes;
    this.editStickysService.addNote(addedSticky)
  }

  deleteAll(){
    // this.notes = [];
    this.notes.splice(0, this.notes.length)
  }
  
  
  
  // submit(stickyNote: string){
    //   this.add.emit(stickyNote);
    
    // }
    
    // deleteAll(){
    //   this.deletePosts.emit(this.notes)
    // }




  }






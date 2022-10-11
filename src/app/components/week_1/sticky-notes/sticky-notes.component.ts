import { Component, OnInit } from '@angular/core';
import { Notes } from '../models/notes-model';
import { AlignTextService } from '../service/align-text.service';
import { EditStickysService } from '../service/edit-stickys.service';

@Component({
  selector: 'app-sticky-notes',
  templateUrl: './sticky-notes.component.html',
  styleUrls: ['./sticky-notes.component.scss']
})
export class StickyNotesComponent implements OnInit {

  notes = [''];


  constructor(public alignTextService: AlignTextService, ) { 
    
  }

  ngOnInit(): void {

  }

  spush(note: string){
    this.notes.push(note);
  }

  deleteNotes(index: number){
    this.notes.splice(index,1)
  }

  
  deleteAll(){
    this.notes = [''];
    console.log(this.notes) 
  }



}

import { Injectable } from '@angular/core';
import { Notes } from '../models/notes-model';

@Injectable({
  providedIn: 'root'
})
export class EditStickysService {

  notes!: Notes[]

  constructor() { 
    // this.notes = [
    //   { text: ''},
    //   // {id: 2, text: 'This to-do list template for Word allows you to mark each items priority'},
    //   // {id: 3, text:'Due date, what to do, who to contact, steps in progress, and done fields for each entry. '},
    //   // {id: 4, text: 'Use this task list template as is, or customize it with a variety of style and color options.'},
    //   // {id: 5, text:'Use smart templates to quickly import and work with data on hundreds of topics directly in Excel.'}
    // ]
  }

  addNote(note: Notes){
    this.notes.push(note)
  }

  deleteNote(note: Notes){
    let index = this.notes.findIndex(x=>x.id == note.id);
    this.notes.splice(index,1)
  }

}

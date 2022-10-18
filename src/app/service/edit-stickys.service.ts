import { Injectable } from '@angular/core';
import { Notes } from '../domain/notes-model';

@Injectable({
  providedIn: 'root',
})
export class EditStickysService {
  notes: Notes[] = [];

  constructor() {
    this.notes = [
      {
        id: 1,
        text: 'This to-do list template for Word allows you to mark each items priority',
      },
      {
        id: 2,
        text: 'Due date, what to do, who to contact, steps in progress, and done fields for each entry. ',
      },
      {
        id: 3,
        text: 'Use this task list template as is, or customize it with a variety of style and color options.',
      },
      {
        id: 4,
        text: 'Use smart templates to quickly import and work with data on hundreds of topics directly in Excel.',
      },
    ];
  }

  public addNote(note: Notes): void {
    note.id = this.notes.length + 1;
    this.notes.push(note);
  }

  public deleteNote(note: Notes): void {
    let index = this.notes.findIndex((x) => x.id == note.id);
    this.notes.splice(index, 1);
  }

  public saveNote(note: Notes): void {
    const index = this.notes.findIndex((x) => x.id == note.id);
    this.notes.splice(index, 1, note);
  }

  public getNoteById(id: number): Notes {
    const index = this.notes.findIndex((x) => x.id == id);
    return this.notes[index];
  }
}

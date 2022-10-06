import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-notes',
  templateUrl: './sticky-notes.component.html',
  styleUrls: ['./sticky-notes.component.scss']
})
export class StickyNotesComponent implements OnInit {

  notes = [''];

  constructor() { }

  ngOnInit(): void {
  }

  spush(note: string){
    this.notes.push(note);
  }

}

import { Component, OnInit } from '@angular/core';
import { AlignTextService } from '../service/align-text.service';

@Component({
  selector: 'app-sticky-notes',
  templateUrl: './sticky-notes.component.html',
  styleUrls: ['./sticky-notes.component.scss']
})
export class StickyNotesComponent implements OnInit {

  notes: string[] = [];

  constructor(public alignTextService: AlignTextService) { }

  ngOnInit(): void {
    console.log(this.notes.length)
  }

  spush(note: string){
    this.notes.push(note);
  }

}

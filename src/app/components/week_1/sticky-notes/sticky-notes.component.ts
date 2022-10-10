import { Component, OnInit } from '@angular/core';
import { AlignTextService } from '../service/align-text.service';

@Component({
  selector: 'app-sticky-notes',
  templateUrl: './sticky-notes.component.html',
  styleUrls: ['./sticky-notes.component.scss']
})
export class StickyNotesComponent implements OnInit {

  notes = [''];

  constructor(public alignTextService: AlignTextService) { }

  ngOnInit(): void {
  }

  spush(note: string){
    this.notes.push(note);
  }

}

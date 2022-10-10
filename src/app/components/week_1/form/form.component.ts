import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { AlignTextService } from '../service/align-text.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() add = new EventEmitter<string>();
  @Input() notes : string[] =[];
  stickyNote: string = '';


  constructor(private aligntextService: AlignTextService) {

  }

  ngOnInit(): void {
  }


  submit(stickyNote: string){
    this.add.emit(stickyNote);

  }

  onSetAlignText(v: string): any{
    this.aligntextService.alignTextHor = v
  }

  onSetAlignTextVert(v: string): any{
    this.aligntextService.alignTextVert = v
  }



}

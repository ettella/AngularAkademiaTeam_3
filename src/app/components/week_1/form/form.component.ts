import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() add = new EventEmitter<string>();
  @Input() notes : string[] =[];
  stickyNote: string = '';


  constructor() {

  }
  ngOnInit(): void {
  }

  submit(stickyNote: string){
    this.add.emit(stickyNote)
  }

}

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


  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      stickyNotes: ['', Validators.required]
      
    });
  }

  get stickyNotes() : FormControl{
    return this.form.get('stickyNote') as FormControl
  }

  ngOnInit(): void {
  }

  submit(stickyNote: string){
    this.add.emit(stickyNote)
  }

}

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      stickyNote: ['', Validators.required]
      
    });
  }

  get stickyNote() : FormControl{
    return this.form.get('stickyNote') as FormControl
  }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}

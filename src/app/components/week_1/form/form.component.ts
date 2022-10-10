import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

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
    this.add.emit(stickyNote);
    
  }

  onSetAlignCenter(): any{
    // const divNotes: HTMLDivElement = <HTMLDivElement>event.target
    // console.log(divNotes.style.alignContent)
    // if(divNotes.style.alignContent = this.setAlignLeft){
    //   return divNotes.style.alignContent = this.setAlignCenter
    // }
    // this.renderer.setStyle(this.test.nativeElement, 'color', 'white');
  }



}

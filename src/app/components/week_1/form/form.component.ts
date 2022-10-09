import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  @Output() add = new EventEmitter<string>();
  @Input() notes : string[] =[];
  stickyNote: string = '';
  setAlignLeft: string = 'align-content:left'
  setAlignCenter: string = 'align-content:center'
  // setJustifyCenter: string = 'align-content:center'
  // setAlignCenter: string = 'align-content:center'
  // setAlignCenter: string = 'align-content:center'
  @ViewChild('test') test!: ElementRef;


  constructor(private renderer: Renderer2) {
   
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  
  }



  submit(stickyNote: string){
    this.add.emit(stickyNote);
    
  }

  // randomColor(){
  //   let randomColor = (Math.floor(Math.random()*16777215).toString(16));
  //   this.notes.style.backgroundColor = randomColor;
  // };


  onSetAlignCenter(): any{
    // const divNotes: HTMLDivElement = <HTMLDivElement>event.target
    // console.log(divNotes.style.alignContent)
    // if(divNotes.style.alignContent = this.setAlignLeft){
    //   return divNotes.style.alignContent = this.setAlignCenter
    // }
    // this.renderer.setStyle(this.test.nativeElement, 'color', 'white');
    this.test.nativeElement.style.color="white";

  }


  setJustifyCenter(event:any): any{
    if(event.style.setAlignLeft == true){
      return event.style.setJustifyCenter == true
    }
  }
  

  setAlignRight(event:any):any{
    if(event.style.setAlignLeft == true){
      return event.style.setAlignRight == true
    }
  }


  onSetAlignLeft(event:any): any{
    if(event.style.setAlignLeft == false){
      return event.style.setAlignLeft == true
    }
  }


}

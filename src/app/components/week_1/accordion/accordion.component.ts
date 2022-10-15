import { Component, Input, OnInit } from '@angular/core';

export class Data {
  title?: string;
  description?: string;

  constructor(){
      this.title = '',
      this.description = ''
  }
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  
    items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    expandedIndex = 0;

  constructor() {

   }

  ngOnInit(): void {
  }






}

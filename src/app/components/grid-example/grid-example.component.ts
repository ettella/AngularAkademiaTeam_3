import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-grid-example',
  templateUrl: './grid-example.component.html',
  styleUrls: ['./grid-example.component.scss']
})

export class GridExampleComponent implements OnInit {

  tiles1: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Three', cols: 3, rows: 1, color: 'lightblue'}
  ];

  tiles2: Tile[] = [
    {text: 'One', cols: 2, rows: 3, color: '#DDBDF1'},
    {text: 'Two', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Three', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  tiles3: Tile[] = [
    {text: 'One', cols: 3, rows: 4, color: 'lightpink'},
    {text: 'Two', cols: 3, rows: 4, color: 'lightpink'},
    {text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: 'lightpink'},
    {text: 'Six', cols: 2, rows: 2, color: 'lightpink'},
    {text: 'Five', cols: 2, rows: 1, color: 'lightpink'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

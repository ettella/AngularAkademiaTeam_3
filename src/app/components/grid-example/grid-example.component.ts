import { Component, OnInit } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
}
@Component({
  selector: 'app-grid-example',
  templateUrl: './grid-example.component.html',
  styleUrls: ['./grid-example.component.scss']
})

export class GridExampleComponent implements OnInit {

  tiles1: Tile[] = [
    {cols: 1, rows: 2 },
    {cols: 2, rows: 2 },
    {cols: 3, rows: 1 },
  ];

  tiles2: Tile[] = [
    {cols: 2, rows: 3 },
    {cols: 1, rows: 1 },
    {cols: 1, rows: 1 },
    {cols: 1, rows: 1 },
  ];

  tiles3: Tile[] = [
    {cols: 3, rows: 4 },
    {cols: 3, rows: 4 },
    {cols: 2, rows: 2 },
    {cols: 2, rows: 1 },
    {cols: 2, rows: 2 },
    {cols: 2, rows: 1 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

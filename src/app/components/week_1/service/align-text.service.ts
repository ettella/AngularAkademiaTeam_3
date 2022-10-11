import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlignTextService {

  alignTextHor: string = 'start';
  alignTextVert: string = 'start';

  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlignTextService {

  alignTextVert: string = 'flex-start';
  alignTextHor: string = 'start';

  constructor() { }
}

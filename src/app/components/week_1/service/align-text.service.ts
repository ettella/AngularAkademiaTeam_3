import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlignTextService {

  alignTextHor: string = 'left';
  alignTextVert: string = 'top';

  constructor() { }
}

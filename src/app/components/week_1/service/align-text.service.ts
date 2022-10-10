import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlignTextService {

  alignText: string = 'left'

  constructor() { }
}

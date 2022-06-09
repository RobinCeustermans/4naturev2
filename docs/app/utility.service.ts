import { Injectable } from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor( private viewportScroller: ViewportScroller) {}

  public onClickNavigate(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}

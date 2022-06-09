import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {UtilityService} from '../utility.service';

@Component({
  selector: 'app-beheer-mee',
  templateUrl: './beheer-mee.component.html',
  styleUrls: ['./beheer-mee.component.css']
})
export class BeheerMeeComponent implements OnInit {

  constructor(private util:UtilityService) {}

  ngOnInit(): void {
  }

  onClickNavigate(elementid: string){
    this.util.onClickNavigate(elementid);
  }
}

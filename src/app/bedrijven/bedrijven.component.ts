import { Component, OnInit } from '@angular/core';
import {UtilityService} from '../utility.service';

@Component({
  selector: 'app-bedrijven',
  templateUrl: './bedrijven.component.html',
  styleUrls: ['./bedrijven.component.css']
})
export class BedrijvenComponent implements OnInit {

  constructor(private util:UtilityService) {}

  ngOnInit(): void {
  }

  onClickNavigate(elementid: string){
    this.util.onClickNavigate(elementid);
  }

}

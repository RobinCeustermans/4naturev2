import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {hasClassName} from '@ng-bootstrap/ng-bootstrap/util/util';
import { Router, NavigationEnd } from '@angular/router';

//to use jquery
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent {
  title = '4nature';

  constructor(private router: Router) {

  }



  ngOnInit(){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) { return; }

      // This closes the top nav
      $(document).click((event: any) => {
        const click = $(event.target);
        const _open = $('.navbar-collapse').hasClass('show');
        if (_open === true && !click.hasClass('navbar-toggler')) {
          $('.navbar-toggler').click();
        }
      });
    });
  }


}

import {Component} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// @ts-ignore
import * as AOS from 'aos';

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

    AOS.init();
  }




}

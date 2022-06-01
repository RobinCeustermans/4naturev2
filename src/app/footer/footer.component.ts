import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, NgForm} from '@angular/forms';
import {ContactService} from '../contact.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  FormData: FormGroup;
  constructor(private router : Router, private builder: FormBuilder, private contact: ContactService
              ,private http: HttpClient) {}

  ngOnInit() {

  }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mrgjjjze',
        { naam: email.name, bedrijf: email.company, verzender: email.email, telefoon: email.phone, bericht: email.message },
        { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );
    }
  }




  toPrivacy(){
    this.router.navigate(['/privacy'])
  }

  toCookie(){
    this.router.navigate(['/cookie'])
  }




}

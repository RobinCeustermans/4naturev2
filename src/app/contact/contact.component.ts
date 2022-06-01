import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, NgForm} from '@angular/forms';
import {ContactService} from '../contact.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private builder: FormBuilder, private contact: ContactService
    ,private http: HttpClient) { }

  ngOnInit(): void {
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

}

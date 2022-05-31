import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerForm: FormGroup | undefined;

  constructor(private router : Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void{
    this.footerForm = this.fb.group({
      name:'',
      company:'',
      maim: '',
      phone: '',
      message: ''
    })
  }

  toPrivacy(){
    this.router.navigate(['/privacy'])
  }

  toCookie(){
    this.router.navigate(['/cookie'])
  }


}

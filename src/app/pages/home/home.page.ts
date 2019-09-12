import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public form : FormGroup;
  public username : string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    )
    {}

  ngOnInit(){
    this.form = this.formBuilder.group({
      username: ['',[Validators.required,Validators.maxLength(16), Validators.minLength(3)] ]
    });
  }

  public submitForm(){

    this.username = this.form.value['username'];
    
    this.form = this.formBuilder.group({
      username: ['',[Validators.required, Validators.maxLength(16), Validators.minLength(3)] ]
    });
    this.form.patchValue(this.form.value);

    this.router.navigate([`chat/${this.username}`])


  }



}

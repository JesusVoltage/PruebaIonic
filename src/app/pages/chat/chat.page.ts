import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Message } from '../../models/message.model'
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {


  public username: string;
  public text: string;
  public form: FormGroup;

  public MSG : any;

  public msgList : any[];


  constructor(
    private activatedRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private messageService : MessagesService

  ) { }

  ngOnInit() {

    this.getData();

    this.username = this.activatedRouter.snapshot.params['name'];
    this.form = this.formBuilder.group({
      user: this.username,
      text: ['', Validators.required]
    });

  }


  public getData(){

    window.scrollTo(0,document.body.scrollHeight);

    this.messageService.getMessages().subscribe((data: any) => {
      this.msgList = data;
      console.log(this.msgList);
    });
  }


  public submitMessage() {
    this.MSG = JSON.stringify(this.form.value);
    this.messageService.postMessage(this.form.value).subscribe();


    this.form = this.formBuilder.group({
      user: this.username,
      text: ['', Validators.required]
    });
    this.form.patchValue(this.form.value);


    
  }


}

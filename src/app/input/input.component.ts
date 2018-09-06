import {Component, Input, OnInit} from '@angular/core';
import {ChatService} from '../chat.service';
import * as firebase from 'firebase';
import {Message} from '../message.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() userAuth: string;

  constructor(private msgService: ChatService) { }

  ngOnInit() {
  }

  sendMsg(msg: string) {
    if (msg !== null) {
      const message: Message = {
        msg: msg,
        user: this.userAuth,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      };
      this.msgService.addMsg(message);
    }
  }

}

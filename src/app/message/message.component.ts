import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;
  @Input() userAuth: string;

  constructor() { }

  ngOnInit() {
  }

}

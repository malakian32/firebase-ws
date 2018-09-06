
import { Message } from './message.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messages: AngularFirestoreCollection<Message>;

  constructor(private db: AngularFirestore) {
    this.messages = db.collection<Message>("messages");
  }

  addMsg(msg: Message) {
    this.messages.add(msg);
  }
}

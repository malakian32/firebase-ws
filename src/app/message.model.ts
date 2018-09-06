
import * as firebase from 'firebase';
import FieldValue = firebase.firestore.FieldValue;

export interface Message {
  user: string;
  msg: string;
  timestamp: FieldValue;
}

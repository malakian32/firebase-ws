

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';

const config = {
  apiKey: 'AIzaSyD06veL6lVED9TiasIMPtsXqcPlGLGxQ1U',
  authDomain: 'fir-ws-fb-sr.firebaseapp.com',
  databaseURL: 'https://fir-ws-fb-sr.firebaseio.com',
  projectId: 'fir-ws-fb-sr',
  storageBucket: 'fir-ws-fb-sr.appspot.com',
  messagingSenderId: '506036699821'
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

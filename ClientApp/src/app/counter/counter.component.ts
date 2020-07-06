import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  currentCount = 0;
  messagePrompt = "Say something";
  encryptedMessageText: string;

  incrementCounter() {
    this.currentCount++;
  }

  getMessage( encrypMessage: string){
    this.encryptedMessageText = encrypMessage;
  }
}

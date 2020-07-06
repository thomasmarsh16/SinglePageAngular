import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-encryptor',
  templateUrl: './input-encryptor.component.html',
  styleUrls: ['./input-encryptor.component.css']
})
export class InputEncryptorComponent implements OnInit {

  @Input() message: string;
  @Output() newMessageEvent = new EventEmitter<string>();



  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(value: string) {
    
    value = "askuyv" + value + "reibwyig";

    this.newMessageEvent.emit(value);
  }



}

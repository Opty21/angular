import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.scss']
})
export class GameControllerComponent implements OnInit {
  currVal = 0;
  interval;
  @Output() emitNumber = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  
  startClock(){
    this.interval = setInterval(() => {
      this.currVal += 1;
      this.emitNumber.emit(this.currVal)
    }, 1000);
  }

  stopClock(){
    clearInterval(this.interval)
  }
}

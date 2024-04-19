import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  count:number = 0;
  ev:EventEmitter<number> = new EventEmitter<number>();
  incCount(){
    this.count++;
    this.ev.emit(this.count);
  }
}

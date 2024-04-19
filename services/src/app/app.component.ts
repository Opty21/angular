import { Component, OnInit } from '@angular/core';
import { CounterService } from './shared/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count = 0
  constructor(private counterService:CounterService){}
  ngOnInit(): void {
    this.counterService.ev.subscribe((num:number) => this.count = num);
  }
}

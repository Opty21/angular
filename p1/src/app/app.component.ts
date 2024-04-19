import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = ''
  showText = false;
  incArr = []
  buttonClick(){
    this.showText = !this.showText;
    this.incArr.push(this.incArr.length + 1)
  }
}

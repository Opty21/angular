import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  oddList = []
  evenList = []
  onNumberEmmited(value){
    if(value % 2 == 0){
      this.evenList.push(value)
    } else{
      this.oddList.push(value)
    }
  }

}

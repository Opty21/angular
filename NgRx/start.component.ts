import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from 'shared-lib';
import { Store } from '@ngrx/store';
import { selectNavigationState } from '../../selectors/app.selectors';
import { AppActions } from '../../actions/app.actions';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  standalone: true,
  imports: [CommonModule,LogoComponent]
})
export default class StartComponent {
  constructor(private store:Store){}
  navigationVisible = this.store.select(selectNavigationState)

  showNavigation(){
    this.store.dispatch(AppActions.showNavigation())
  }
  hideNavigation(){
    this.store.dispatch(AppActions.hideNavigation())
  }
}

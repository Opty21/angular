import { Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription, interval, take, tap } from 'rxjs';

@Directive({
  selector: '[appTextType]',
  standalone: true
})
export class TextTypeDirective implements OnInit,OnChanges{
  @Output() appTextType = new EventEmitter();
  @Input( {required:true}) titleText = ''
  subscription!:Subscription;
  constructor(private el: ElementRef) { 
  }
  ngOnInit(): void {
    this.typeText();
  }
  ngOnChanges(changes: SimpleChanges): void {
    let change = changes['titleText']
    if(!change.firstChange){
      this.subscription.unsubscribe()
      this.typeText()
    }
  }
  typeText(){
    let baseText = this.titleText + '';
    let len = baseText.length;
    this.el.nativeElement.textContent = ""
    this.subscription = interval(60).pipe(tap((x)=>this.el.nativeElement.textContent += baseText[x]),take(len)).subscribe({complete:()=>{
      this.appTextType.emit();
    }});
  }

}

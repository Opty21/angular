import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomImage]',
  standalone: true
})
export class ZoomImageDirective {
  zoom:number = 1.0;
  @HostBinding('style.transform') get scale(){
    return `scale(${this.zoom})`
  }
  @HostListener('mousemove') mov(){
    this.zoom += 0.005;
  }
  @HostListener('mouseout') mout(){
    this.zoom = 1;
  }
  constructor() { }

}

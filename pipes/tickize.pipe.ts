import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tickize',
  standalone: true
})
export class TickizePipe implements PipeTransform {

  transform(value: boolean): string {
    return value === true ? "✓" : "✗";
  }

}

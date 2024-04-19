import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterNames',
  standalone: true
})
export class CharacterNamesPipe implements PipeTransform {

  colorArray = ['bg-gray-400','bg-red-400','bg-orange-400','bg-amber-400','bg-green-400','bg-blue-400','bg-indigo-400','bg-pink-400']

  transform(text: string, nameArray:string[],revealNames=false): unknown {
    for(let i =0;i<nameArray.length;i++){
      let x = revealNames ? nameArray[i] : `character ${i+1}`
      text = text.replaceAll(`$$p${i+1}$$`,`<span class=" ${this.colorArray[i%this.colorArray.length]} bg-opacity-40 mt-1 px-1 font-semibold text-white inline-block">${x}</span>`)
    }
    return text;
  }

}

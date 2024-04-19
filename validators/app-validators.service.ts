import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { map, of } from 'rxjs';
import { environment } from '../environments/environment';
import { PilotAttrs } from './space/pilot';

@Injectable({
  providedIn: 'root'
})
export class AppValidatorsService {
  httpService = inject(HttpClient)

  firstUpperCase:ValidatorFn = (formControl) => {
    if(!formControl.value) return null;
    let str = (formControl.value as string)
    if(str[0] === str[0].toUpperCase()) return null;
    return {notUpper:true};
  }

  badName: AsyncValidatorFn = (formControl) => {
    if (!formControl.value) { return of(null); }

    const name = formControl.value;
    return this.httpService.get<PilotAttrs[]>(`${environment.apiUrl}/forbidden-names`, {params: {name}}).pipe(
      map((users) => users.length > 0 ? {badName: true} : null)
    );
  }
  constructor() { }
}

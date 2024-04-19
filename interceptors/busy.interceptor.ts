import { HttpInterceptorFn } from '@angular/common/http';
import { BehaviorSubject, debounce, finalize, map, of, tap, timer } from 'rxjs';

const activeRequestCount = new BehaviorSubject(0);
export const isBusy = activeRequestCount.pipe(map((count) => count > 0),debounce(busy => busy ? timer(100): of(0)))

export const busyInterceptor: HttpInterceptorFn = (req, next) => {
  activeRequestCount.next(activeRequestCount.getValue()+1)
  console.log(activeRequestCount.getValue())
  return next(req).pipe(
    tap(()=>  activeRequestCount.next(activeRequestCount.getValue()-1)
  ));
};

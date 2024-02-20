import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private actionSource = new Subject<any>();
  $action = this.actionSource.asObservable();

  constructor() { }

  action(data:any){
    this.actionSource.next(data);
  }
}

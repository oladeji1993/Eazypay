import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  emitValue = new BehaviorSubject<any>(null);
  sideBarMessenger = new BehaviorSubject<any>(null)


  constructor() { }
}

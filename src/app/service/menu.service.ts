import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private isOpenedSubject = new BehaviorSubject<boolean>(false); // Changed to false
  isOpened = this.isOpenedSubject.asObservable();

  constructor() { }

  toggle() {
    this.isOpenedSubject.next(!this.isOpenedSubject.value);
  }
}
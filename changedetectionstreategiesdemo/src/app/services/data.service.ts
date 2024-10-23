import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private myData: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { 
    this.myData.next('Initial data!');
  }

  getMyData(): Observable<string> {
    return this.myData;
  }

  setMyData(val: string): void {
    this.myData.next(val);
  }
}

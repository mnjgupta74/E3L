// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable()
// export class DataService {

//   constructor() { }

//   private newUser = new BehaviorSubject<any>({
//     firstName: 'Kevin',
//     email: 'ksmith@fanreact.com',
//     g: 'M'
//   });

//   setNewUserInfo(user: any) {
//     this.newUser.next(user);
//   }

//   getNewUserInfo() {
//     return this.newUser.asObservable();
//   }
// }

import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
const STORE_KEY = 'lastAction';

@Injectable()
export class SharedService {
private setValue = new BehaviorSubject<any>({});

  constructor() {}

  setData(updatedData: any) {
    this.setValue.next(updatedData);
    
  
  }
  getData()
  {
    return this.setValue.asObservable();
    
  }
  // private storageName: string = "Settings";
  public storageName: string ='';
  public data:any;
  setSettings(data: any) {
    localStorage.setItem(this.storageName, JSON.stringify(data));
  }

  getUserSettings() {
    this.data = localStorage.getItem(this.storageName);
    return JSON.parse(this.data);
  }

  clearUserSettings() {
    localStorage.removeItem(this.storageName);
  }

  cleanAll() {
    localStorage.clear()
  }
}

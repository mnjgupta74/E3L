// Angular Modules
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, throwError, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const MINUTES_UNITL_AUTO_LOGOUT = 10; // in mins
const CHECK_INTERVAL = 15000; // in ms
const STORE_KEY = 'lastAction';

@Injectable()
export class ApiHttpService {
  public getLastAction() {
    return parseInt(localStorage.getItem(STORE_KEY) || '{}');
  }
  public setLastAction(lastAction: number) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
  }

  hash: any;
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public auth_token: BehaviorSubject<string> = new BehaviorSubject<string>(
    sessionStorage.getItem('token') || '{}'
  );
  public TreName: BehaviorSubject<string> = new BehaviorSubject<string>(
    sessionStorage.getItem('loc') || '{}'
  );
  public ipAddress: any;

  constructor(
    // Angular Modules
    private http: HttpClient,
    private router: Router
  ) {}

  postresultservice(url: any, data: any) {
    // let token = localStorage.getItem('token');
    let token =
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3MTAiLCJVc2VySWQiOiI3MTAiLCJleHAiOjE2ODA4MTQzNzYsIlVzZXJUeXBlIjoiMTAiLCJpYXQiOjE2Nzk5MTQzNzZ9.2pHbuUEPv_oqVCj9IvqQBtjTNiMT9-VxWvta7qjitfLCGtSl-GUFlshZbCCbA8FtuYgXPotd0-3TlKAb9fak5g';

    let Options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    //return this.http.post(this.loginurl,data,this.httpOptions).pipe(catchError(this.handleError));//('postresultservice',data)
    //return this.http.post(url,data,Options).pipe();//('postresultservice',data)
    console.log('hhhhhhhhhh__', url);

    return this.http.post(url, data, Options).pipe(
      map((data: any) => {
        console.log('postresultservice', data);
        return data;
      })
    );
    // catchError(this.handleError));//('postresultservice',data)
  }

  getservice(url: any) {
    let token =
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3MTAiLCJVc2VySWQiOiI3MTAiLCJleHAiOjE2ODA4MTQzNzYsIlVzZXJUeXBlIjoiMTAiLCJpYXQiOjE2Nzk5MTQzNzZ9.2pHbuUEPv_oqVCj9IvqQBtjTNiMT9-VxWvta7qjitfLCGtSl-GUFlshZbCCbA8FtuYgXPotd0-3TlKAb9fak5g';
    // let token = localStorage.getItem('token');

    console.log('token_____', token);
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    };
    console.log('hhhhhhhhhh__', httpOptions, url);
    return this.http.get(url, httpOptions).pipe(
      map((data: any) => {
        console.log('getservice', data);
        return data;
      })
    );
    // catchError(this.handleError));//('postresultservice',data)
  }

  getMethodNew(url: any) {
    console.log('url..', url);
    return this.http.get(url).pipe(
      map((data: any) => {
        console.log('getMethodNew', data);

        return data;
      }),
      // catchError(this.handleError)
    );
    // catchError(this.handleError));//('postresultservice',data)
  }
  postMethodNew(url: any, data: any) {
    console.log('url..', url);
    console.log('data..', data);
    return this.http.post(url, data).pipe(
      map((data: any) => {
        console.log('postMethodNew', data);
        return data;
      }),

      // catchError(this.handleError)
    ); //('postresultservice',data)
  }
  // handleError(error: any) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // client-side error
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     // server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(() => {
  //     return errorMessage;
  //   });
  // }

  // getMethodNew(url: any){
  //     // public get(url: string, options?: any) {
  //   return this.http.get(url).pipe(
  //     map((data: any) => {
  //       console.log("hiresult",data)
  //       return data;
  //     })
  //   );
  // // }
  // }

  //   public post(url: string, data: any, options?: any) {
  //     return this.http.post(url, data, options).pipe(
  //       map((data: any) => {
  //         return data;
  //       })
  //     );
  //   }
  //   public put(url: string, data: any, options?: any) {
  //     return this.http.put(url, data, options).pipe(
  //       map((data: any) => {
  //         return data;
  //       })
  //     );
  //   }
  //   public delete(url: string, options?: any) {
  //     return this.http.delete(url, options).pipe(
  //       map((data: any) => {
  //         return data;
  //       })
  //     );
  //   }

  ///*** auto logout code ***///
  initListener() {
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover', () => this.reset());
    document.body.addEventListener('mouseout', () => this.reset());
    document.body.addEventListener('keydown', () => this.reset());
    document.body.addEventListener('keyup', () => this.reset());
    document.body.addEventListener('keypress', () => this.reset());
  }
  reset() {
    this.setLastAction(Date.now());
  }

  initInterval() {
    setInterval(() => {
      this.check();
    }, CHECK_INTERVAL);
  }

  check() {
    const now = Date.now();
    const timeleft =
      this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;

    if (isTimeout) {
      this.logout();
    }
  }
  ipaddress() {
    this.http.get('https://jsonip.com').subscribe((res: any) => {
      this.ipAddress = res.ip;
      console.log('res.ip');
    });
  }
  ///*** logout call ***///
  logout(): void {
    this.loggedIn.next(false);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('loc');
    this.router.navigate(['']);
  }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  // get username() {
  //   return this.user.asObservable();
  // }
  get LocName() {
    return this.TreName.asObservable();
  }
}

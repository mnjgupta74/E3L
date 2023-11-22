import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  catchError,
  concatMap,
  Observable,
  of,
  retryWhen,
  throwError,
} from 'rxjs';
import { ErrorCode } from 'src/app/utility/enums';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptorService implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Http-Request-Started');

    return next.handle(request).pipe(
      //retry api
      retryWhen(error => this.retryRequest(error,5)
    //   retryWhen((error) =>
    //     error.pipe(
    //       concatMap((checkErr: HttpErrorResponse, count: number) => {
    //         if (checkErr.status === ErrorCode.serverDown && count <= count) {
    //           return of(checkErr);
    //         }
    //         if (checkErr.status === ErrorCode.unautherized && count <= count) {
    //           return of(checkErr);
    //         }
    //         return throwError(checkErr);
    //       })
    //     )
      ),

      //catch error
      catchError((error: HttpErrorResponse) => {
        const errorMessage = this.setError(error);
        console.log(errorMessage);
        this.toastr.error(errorMessage);
        return throwError(() => new Error(errorMessage));
        // return throwError(error.error);
      })
    );
  }
  setError(error: HttpErrorResponse): string {
    let errorMessage = 'UnKnown error occured';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      //server side errors
      if (error.status !== 0) {
        errorMessage = error.error.ErrorMessage;
      }
    }
    return errorMessage;
  }
//   retry the request in case of webApi is down
      retryRequest(error: Observable<any>,retryCount:number): Observable<any>{
              return error.pipe(
                concatMap((checkError: HttpErrorResponse,count : number) => {
                    if(count <= retryCount){
                        switch(checkError.status)
                        {
                            case ErrorCode.serverDown : 
                            return of(checkError);

                            case ErrorCode.unautherized : 
                            return of(checkError);

                            // case ErrorCode.InternalServerError : 
                            // return of(checkError);

                            // case ErrorCode.Bad_Request : 
                            // return of(checkError);
                        }

                    }
                    return throwError(checkError);
                }))
      }
}
